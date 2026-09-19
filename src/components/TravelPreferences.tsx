"use client";

import { useState } from "react";
import Toast from "./Toast";
import { digitsOnly, todayISO } from "@/lib/formUtils";

type TileOption = {
  label: string;
  icon?: React.ReactNode;
};

const journeyTypes: TileOption[] = [
  {
    label: "Relax & Unwind",
    icon: (
      <>
        <path d="M12 3C7 3 3 7.5 3 13h18c0-5.5-4-10-9-10z" />
        <path d="M12 13v6a2 2 0 0 1-2 2" />
        <path d="M12 3V1.5" />
      </>
    ),
  },
  {
    label: "Family Holidays",
    icon: (
      <>
        <circle cx="9" cy="7.5" r="2.3" />
        <circle cx="16.5" cy="8.5" r="1.9" />
        <path d="M4 20c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" />
        <path d="M14.2 20c.2-2.3 1.8-4 3.5-4 1.9 0 3.4 1.9 3.6 4" />
      </>
    ),
  },
  {
    label: "Cultural Experiences",
    icon: (
      <>
        <path d="M3 10l9-6 9 6" />
        <path d="M5 10v10M9 10v10M15 10v10M19 10v10" />
        <path d="M4 20h16" />
      </>
    ),
  },
  {
    label: "Adventure & Exploration",
    icon: <path d="M3 19l6-11 4 6.5 3-5 5 9.5H3z" />,
  },
  {
    label: "Romantic Getaways",
    icon: (
      <path d="M12 20s-7.2-4.4-9.5-8.6C1 8 2.6 5 6 5c2 0 3.5 1.3 4 2.2.5-.9 2-2.2 4-2.2 3.4 0 5 3 3.5 6.4C19.2 15.6 12 20 12 20z" />
    ),
  },
  {
    label: "Luxury Escapes",
    icon: (
      <>
        <path d="M4 17.5l-1-8 4 3 5-6 5 6 4-3-1 8H4z" />
        <path d="M4 20.5h16" />
      </>
    ),
  },
  {
    label: "Custom Journeys",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.5L13 13l-3.5 1.5L11 11l3.5-1.5z" />
      </>
    ),
  },
];

const travelingWithOptions: TileOption[] = [
  {
    label: "Solo",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      </>
    ),
  },
  {
    label: "Couple",
    icon: (
      <>
        <circle cx="8.5" cy="8" r="2.6" />
        <circle cx="15.5" cy="8" r="2.6" />
        <path d="M3.5 19.5c0-3 2.2-5.3 5-5.3s5 2.3 5 5.3M10.5 19.5c0-3 2.2-5.3 5-5.3s5 2.3 5 5.3" />
      </>
    ),
  },
  {
    label: "Family",
    icon: (
      <>
        <circle cx="9" cy="7.5" r="2.3" />
        <circle cx="16.5" cy="8.5" r="1.9" />
        <path d="M4 20c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" />
        <path d="M14.2 20c.2-2.3 1.8-4 3.5-4 1.9 0 3.4 1.9 3.6 4" />
      </>
    ),
  },
  {
    label: "Friends",
    icon: (
      <>
        <circle cx="6.5" cy="9" r="2.2" />
        <circle cx="12" cy="7.5" r="2.4" />
        <circle cx="17.5" cy="9" r="2.2" />
        <path d="M2.5 20c0-2.6 1.8-4.6 4-4.6M21.5 20c0-2.6-1.8-4.6-4-4.6M7.5 20c0-3 2-5.2 4.5-5.2s4.5 2.2 4.5 5.2" />
      </>
    ),
  },
  {
    label: "Group",
    icon: (
      <>
        <circle cx="5" cy="9.5" r="1.8" />
        <circle cx="12" cy="7.5" r="2.2" />
        <circle cx="19" cy="9.5" r="1.8" />
        <circle cx="8.5" cy="10.5" r="1.5" />
        <circle cx="15.5" cy="10.5" r="1.5" />
        <path d="M2 20c0-2.4 1.6-4.2 3.5-4.2M22 20c0-2.4-1.6-4.2-3.5-4.2M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      </>
    ),
  },
];

const travelStyleOptions: TileOption[] = [
  {
    label: "Luxury",
    icon: (
      <>
        <path d="M4 17.5l-1-8 4 3 5-6 5 6 4-3-1 8H4z" />
        <path d="M4 20.5h16" />
      </>
    ),
  },
  {
    label: "Budget-Friendly",
    icon: (
      <>
        <path d="M20 12l-8 8-9-9V4h7l10 8z" />
        <circle cx="7.5" cy="7.5" r="1.3" />
      </>
    ),
  },
  {
    label: "Adventure",
    icon: <path d="M3 19l6-11 4 6.5 3-5 5 9.5H3z" />,
  },
  {
    label: "Relaxed",
    icon: (
      <>
        <path d="M12 3C7 3 3 7.5 3 13h18c0-5.5-4-10-9-10z" />
        <path d="M12 13v6a2 2 0 0 1-2 2" />
      </>
    ),
  },
  {
    label: "Family-Friendly",
    icon: (
      <>
        <circle cx="9" cy="7.5" r="2.3" />
        <circle cx="16.5" cy="8.5" r="1.9" />
        <path d="M4 20c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" />
        <path d="M14.2 20c.2-2.3 1.8-4 3.5-4 1.9 0 3.4 1.9 3.6 4" />
      </>
    ),
  },
  {
    label: "Cultural",
    icon: (
      <>
        <path d="M3 10l9-6 9 6" />
        <path d="M5 10v10M9 10v10M15 10v10M19 10v10" />
        <path d="M4 20h16" />
      </>
    ),
  },
];

const timeframeOptions = [
  "This Month",
  "Within 1–3 Months",
  "Within 3–6 Months",
  "6+ Months",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000 – $50,000",
  "$50,000+",
];

const stepMeta = [
  { title: "What Are You Looking For?", eyebrow: "Step 1 of 6" },
  { title: "Who Are You Travelling With?", eyebrow: "Step 2 of 6" },
  { title: "What Is Your Preferred Travel Style?", eyebrow: "Step 3 of 6" },
  { title: "When Would You Like to Travel?", eyebrow: "Step 4 of 6" },
  { title: "Tell Us More", eyebrow: "Step 5 of 6" },
  { title: "Your Details", eyebrow: "Step 6 of 6" },
];

function Tile({
  option,
  selected,
  onClick,
}: {
  option: TileOption;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex flex-col items-center justify-center gap-4 rounded-2xl border px-3 py-8 text-center transition-all duration-300 ${
        selected
          ? "border-gold bg-gold/[0.08] shadow-[0_18px_36px_-20px_rgba(201,162,75,0.5)]"
          : "border-ink/10 bg-white hover:border-ink/20 hover:-translate-y-0.5"
      }`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className={selected ? "text-gold" : "text-ink/70"}
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {option.icon}
        </g>
      </svg>
      <span className="text-sm font-medium text-ink/80 leading-snug">
        {option.label}
      </span>
    </button>
  );
}

function fieldClass() {
  return "w-full border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder:text-ink/35 bg-white focus:outline-none focus:border-gold transition-colors";
}

export default function TravelPreferences() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [journeyType, setJourneyType] = useState("");
  const [travelingWith, setTravelingWith] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [moreInfo, setMoreInfo] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");

  const canContinue = () => {
    if (step === 1) return journeyType !== "";
    if (step === 2) return travelingWith !== "";
    if (step === 3) return travelStyle !== "";
    if (step === 4) return timeframe !== "";
    return true;
  };

  const canSubmit = name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async () => {
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/planning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          journeyType,
          travelingWith,
          travelStyle,
          timeframe,
          moreInfo,
          name,
          email,
          phone,
          dates,
          budget,
          requirements,
        }),
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

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  if (submitted) {
    return (
      <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
        <div className="container-premium max-w-lg text-center">
          <p className="eyebrow text-gold mb-4">Thank You</p>
          <h2 className="font-cormorant font-medium text-4xl text-ink mb-4">
            Your Journey Awaits
          </h2>
          <p className="text-ink/55 leading-relaxed">
            We&apos;ve received your preferences and will be in touch within
            one business day to start designing your trip.
          </p>
        </div>
        <Toast
          show={showToast}
          message="Your preferences were submitted successfully!"
          onClose={() => setShowToast(false)}
        />
      </section>
    );
  }

  return (
    <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">Your Perfect Journey</p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-5xl leading-tight text-ink">
            What Kind of Journey Are You Dreaming Of?
          </h2>
          <p className="mt-5 text-ink/55 text-base">
            Answer a few quick questions to help us understand your ideal
            travel experience.
          </p>
        </div>

        <div className="mt-14 bg-white rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,19,32,0.15)] p-6 sm:p-10 lg:p-14">
          <div className="h-1 w-full bg-ink/10 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-gold transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">
            {stepMeta[step - 1].eyebrow}
          </p>
          <h3 className="font-cormorant font-medium text-2xl sm:text-3xl text-ink mb-8">
            {stepMeta[step - 1].title}
          </h3>

          {step === 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {journeyTypes.map((opt) => (
                <Tile
                  key={opt.label}
                  option={opt}
                  selected={journeyType === opt.label}
                  onClick={() => setJourneyType(opt.label)}
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {travelingWithOptions.map((opt) => (
                <Tile
                  key={opt.label}
                  option={opt}
                  selected={travelingWith === opt.label}
                  onClick={() => setTravelingWith(opt.label)}
                />
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {travelStyleOptions.map((opt) => (
                <Tile
                  key={opt.label}
                  option={opt}
                  selected={travelStyle === opt.label}
                  onClick={() => setTravelStyle(opt.label)}
                />
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-wrap gap-3">
              {timeframeOptions.map((opt) => {
                const selected = timeframe === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setTimeframe(opt)}
                    aria-pressed={selected}
                    className={
                      selected
                        ? "inline-flex btn-pill-gold"
                        : "inline-flex items-center rounded-full border border-ink/15 text-ink/75 text-sm px-6 py-3 hover:border-ink/30 transition-colors"
                    }
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {step === 5 && (
            <div>
              <label htmlFor="moreInfo" className="block text-sm font-semibold text-ink mb-2.5">
                Anything else about your ideal trip we should know?
              </label>
              <textarea
                id="moreInfo"
                rows={5}
                value={moreInfo}
                onChange={(e) => setMoreInfo(e.target.value)}
                className={`${fieldClass()} resize-none`}
                placeholder="Tell us about the experiences, pace, or details that matter most to you..."
              />
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2.5">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={fieldClass()}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2.5">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={fieldClass()}
                    placeholder="example@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2.5">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => setPhone(digitsOnly(e.target.value))}
                    required
                    className={fieldClass()}
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dates" className="block text-sm font-semibold text-ink mb-2.5">
                    Preferred Travel Dates
                  </label>
                  <input
                    id="dates"
                    type="date"
                    min={todayISO()}
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    onClick={(e) => e.currentTarget.showPicker?.()}
                    className={`${fieldClass()} cursor-pointer`}
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-ink mb-2.5">
                    Approximate Budget
                  </label>
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={fieldClass()}
                  >
                    <option value="">Select a range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-semibold text-ink mb-2.5">
                  Additional Requirements or Special Requests
                </label>
                <textarea
                  id="requirements"
                  rows={4}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className={`${fieldClass()} resize-none`}
                />
              </div>
            </div>
          )}

          {submitError && (
            <p className="mt-6 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {submitError}
            </p>
          )}

          <div className="mt-10 flex items-center justify-center sm:justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className={`${
                step === 1 ? "hidden sm:inline-flex sm:invisible" : "inline-flex"
              } items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink transition-colors`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                disabled={!canContinue()}
                onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
                className="inline-flex w-[230px] justify-center btn-pill-gold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                disabled={!canSubmit || submitting}
                onClick={handleSubmit}
                className="inline-flex w-[230px] justify-center btn-pill-gold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
