"use client";

import { useState } from "react";
import Toast from "./Toast";
import { digitsOnly, todayISO } from "@/lib/formUtils";

const vacationStyles = [
  "Relax & Unwind",
  "Adventure & Exploration",
  "Romantic Getaway",
  "Family Holiday",
  "Luxury Escape",
  "Cultural Experience",
  "Cruise Holiday",
  "Wellness Retreat",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000 – $50,000",
  "$50,000+",
];

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-ink mb-2.5"
    >
      {children}
      {required && <span className="text-gold ml-1">*</span>}
    </label>
  );
}

function inputClass() {
  return "w-full border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder:text-ink/35 bg-white focus:outline-none focus:border-gold transition-colors";
}

function Helper({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-ink/40">{children}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-ink/10 mt-12 mb-8 pt-10">
      <h2 className="font-cormorant text-2xl sm:text-[1.75rem] text-ink">
        {children}
      </h2>
    </div>
  );
}

function RadioGroup({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  return (
    <div className="flex flex-wrap gap-6">
      {options.map((opt) => (
        <label
          key={opt}
          className="inline-flex items-center gap-2 text-sm text-ink/80 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            className="h-4 w-4 accent-[var(--gold)]"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default function TravelQuestionnaire() {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });
    payload.vacationStyles = selectedStyles;

    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      setShowToast(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-cream-3 min-h-[70vh] flex items-center justify-center pt-24">
        <div className="container-premium max-w-lg text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-5">
            Thank You
          </p>
          <h1 className="font-cormorant text-4xl text-ink mb-4">
            Your Questionnaire Has Been Sent
          </h1>
          <p className="text-ink/55 leading-relaxed">
            We&apos;ve received your responses and can&apos;t wait to start
            designing your journey. A member of our team will be in touch
            within one business day.
          </p>
        </div>
        <Toast
          show={showToast}
          message="Your questionnaire was submitted successfully!"
          onClose={() => setShowToast(false)}
        />
      </section>
    );
  }

  return (
    <section className="bg-cream-3 pt-32 pb-24 sm:pt-40">
      <div className="container-premium max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="font-cormorant text-4xl sm:text-5xl uppercase tracking-[0.12em] text-ink">
            Wanderly
          </h1>
          <p className="font-logo text-2xl text-gold mt-1">Travel Co.</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,19,32,0.2)]">
          <div className="bg-cream-2 text-center px-8 py-12 sm:px-14">
            <h2 className="font-cormorant text-3xl sm:text-4xl text-ink mb-4">
              Travel Discovery Questionnaire
            </h2>
            <p className="text-ink/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              The more I know about your travel style and goals, the better I
              can personalize our consultation and recommendations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white px-8 py-12 sm:px-14">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label required htmlFor="firstName">
                  Full Name(s)
                </Label>
                <input id="firstName" name="firstName" required className={inputClass()} placeholder="First Name" />
              </div>
              <div>
                <Label htmlFor="lastName">&nbsp;</Label>
                <input id="lastName" name="lastName" className={inputClass()} placeholder="Last Name" />
              </div>
            </div>

            <div className="mt-8">
              <Label required htmlFor="email">
                Email Address
              </Label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass()}
                placeholder="example@example.com"
              />
            </div>

            <div className="mt-8">
              <Label required htmlFor="phone">
                Phone Number
              </Label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                required
                className={inputClass()}
                placeholder="(000) 000-0000"
                onChange={(e) => {
                  e.currentTarget.value = digitsOnly(e.currentTarget.value);
                }}
              />
              <Helper>
                Please enter a valid phone number. Format: (000) 000-0000.
              </Helper>
            </div>

            <div className="mt-8">
              <Label required htmlFor="cityState">
                City &amp; State
              </Label>
              <input id="cityState" name="cityState" required className={inputClass()} />
            </div>

            <SectionHeading>Tell Me About Your Trip</SectionHeading>

            <div>
              <Label required htmlFor="destination">
                Where are you thinking about traveling?
              </Label>
              <input id="destination" name="destination" required className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label htmlFor="undecided">
                If you&apos;re undecided, what destinations are you
                considering?
              </Label>
              <input id="undecided" name="undecided" className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label required htmlFor="travelDates">
                What are your preferred travel dates?
              </Label>
              <input
                id="travelDates"
                name="travelDates"
                type="date"
                min={todayISO()}
                required
                className={`${inputClass()} cursor-pointer`}
                onClick={(e) => e.currentTarget.showPicker?.()}
              />
              <Helper>2 digit month, 2 digit day, 4 digit year</Helper>
            </div>

            <div className="mt-8">
              <Label required>Are your dates flexible?</Label>
              <RadioGroup name="datesFlexible" options={["Yes", "No"]} />
            </div>

            <div className="mt-8">
              <Label required htmlFor="travelerCount">
                How many travelers are in your group?
              </Label>
              <input
                id="travelerCount"
                name="travelerCount"
                required
                className={inputClass()}
                placeholder="e.g., 2-3"
              />
            </div>

            <div className="mt-8">
              <Label htmlFor="childrenAges">
                Ages of children (if applicable)
              </Label>
              <input id="childrenAges" name="childrenAges" className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label htmlFor="celebrating">
                Are you celebrating anything special?
              </Label>
              <input id="celebrating" name="celebrating" className={inputClass()} />
            </div>

            <SectionHeading>Your Travel Style</SectionHeading>

            <div>
              <Label required>How would you describe your ideal vacation?</Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {vacationStyles.map((style) => (
                  <label
                    key={style}
                    className="inline-flex items-center gap-2.5 text-sm text-ink/80 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedStyles.includes(style)}
                      onChange={() => toggleStyle(style)}
                      className="h-4 w-4 accent-[var(--gold)]"
                    />
                    {style}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Label htmlFor="otherStyle">Other (please describe)</Label>
              <input id="otherStyle" name="otherStyle" className={inputClass()} />
            </div>

            <SectionHeading>Hotel Preferences</SectionHeading>

            <div>
              <Label htmlFor="accommodationType">
                What type of accommodations do you enjoy?
              </Label>
              <input id="accommodationType" name="accommodationType" className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label htmlFor="hotelBrands">
                Favorite hotel brands you&apos;ve loved
              </Label>
              <input id="hotelBrands" name="hotelBrands" className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label htmlFor="favoriteHotel">
                Favorite hotel you&apos;ve ever stayed at
              </Label>
              <input id="favoriteHotel" name="favoriteHotel" className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label htmlFor="leastFavoriteHotel">
                Least favorite hotel—and why?
              </Label>
              <textarea
                id="leastFavoriteHotel"
                name="leastFavoriteHotel"
                rows={3}
                className={`${inputClass()} resize-none`}
              />
            </div>

            <SectionHeading>Budget</SectionHeading>

            <div>
              <Label required htmlFor="budget">
                What is your approximate trip budget?
              </Label>
              <select id="budget" name="budget" required className={inputClass()} defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-8">
              <Label required>Does this include flights?</Label>
              <RadioGroup name="includesFlights" options={["Yes", "No"]} />
            </div>

            <SectionHeading>Travel Experience</SectionHeading>

            <div>
              <Label htmlFor="lovedDestinations">
                Where have you traveled that you&apos;ve loved?
              </Label>
              <textarea
                id="lovedDestinations"
                name="lovedDestinations"
                rows={3}
                className={`${inputClass()} resize-none`}
              />
            </div>

            <div className="mt-8">
              <Label htmlFor="wouldntReturn">
                Is there anywhere you wouldn&apos;t return?
              </Label>
              <textarea
                id="wouldntReturn"
                name="wouldntReturn"
                rows={3}
                className={`${inputClass()} resize-none`}
              />
            </div>

            <div className="mt-8">
              <Label htmlFor="bucketList">Bucket-list destinations?</Label>
              <textarea
                id="bucketList"
                name="bucketList"
                rows={3}
                className={`${inputClass()} resize-none`}
              />
            </div>

            <SectionHeading>Tell Me More</SectionHeading>

            <div>
              <Label htmlFor="threeWords">
                If you could describe your perfect vacation in three words,
                what would they be?
              </Label>
              <input id="threeWords" name="threeWords" className={inputClass()} />
            </div>

            <div className="mt-8">
              <Label htmlFor="unforgettable">
                What would make this trip feel truly unforgettable?
              </Label>
              <textarea
                id="unforgettable"
                name="unforgettable"
                rows={3}
                className={`${inputClass()} resize-none`}
              />
            </div>

            <div className="mt-8">
              <Label htmlFor="favoriteTrips">
                Tell me about your three favorite trips you&apos;ve ever
                taken. What made them so memorable?
              </Label>
              <textarea
                id="favoriteTrips"
                name="favoriteTrips"
                rows={4}
                className={`${inputClass()} resize-none`}
              />
            </div>

            <div className="mt-8">
              <Label htmlFor="anythingElse">
                Is there anything else you&apos;d like me to know before we
                chat?
              </Label>
              <textarea
                id="anythingElse"
                name="anythingElse"
                rows={3}
                className={`${inputClass()} resize-none`}
              />
            </div>

            {submitError && (
              <p className="mt-8 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {submitError}
              </p>
            )}

            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex btn-pill-gold px-10 disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
