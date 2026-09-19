import Image from "next/image";

const offerings = [
  "Personalized itinerary planning",
  "Handpicked accommodation recommendations",
  "Activities and experiences",
  "Transportation guidance",
  "Dining recommendations",
  "Pre-trip planning support",
  "Assistance during your journey",
];

export default function BespokeTravelPlanning() {
  return (
    <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative h-[460px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=900&auto=format&fit=crop"
            alt="Santorini village overlooking the caldera at sunset"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-5">
            Bespoke Travel Planning
          </p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-[2.75rem] leading-tight text-ink mb-5">
            Your Ideas. Our Expertise.
            <br />
            One Unforgettable Journey.
          </h2>
          <p className="text-ink/55 text-[0.95rem] leading-relaxed max-w-lg">
            We take the time to understand how you love to travel, then
            create a thoughtful itinerary that brings your vision to life.
          </p>

          <div className="border-t border-ink/10 mt-8 pt-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-5">
              What We Offer
            </p>
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {offerings.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink/75"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0 text-ink/60"
                  >
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/contact"
            className="mt-10 flex mx-auto sm:mx-0 items-center justify-center gap-2 w-[230px] rounded-full bg-ink text-cream text-sm font-medium py-4 hover:bg-ink-2 transition-colors"
          >
            Plan My Trip
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
