import Image from "next/image";

const highlights = [
  {
    label: "Exclusive Destinations",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z" />
      </>
    ),
  },
  {
    label: "Tailor-Made Itineraries",
    icon: <path d="M12 2l4 7-4 13-4-13 4-7z" />,
  },
  {
    label: "Premium Support",
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      <Image
        src="/hero-background.jpg"
        alt="Couple sharing a candlelit toast beside an infinity pool overlooking misty mountains"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

      <button
        type="button"
        aria-label="Previous"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-ink/40 text-cream backdrop-blur-sm hover:bg-ink/60 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-ink/40 text-cream backdrop-blur-sm hover:bg-ink/60 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="container-premium relative z-10 w-full pt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-cream/60" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold-2">
            <path
              d="M21 3L3 10.5l7 2.5m11-10l-4.5 15-6-6.5m10.5-8.5L9.5 15.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="eyebrow text-cream/90">Bespoke Travel Experiences</p>
        </div>

        <h1 className="font-headline font-bold text-balance text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.08] max-w-2xl">
          <span className="text-cream">Where Will</span>
          <br />
          <span className="text-gold-2">You Go Next?</span>
        </h1>
        <p className="mt-6 max-w-md text-cream/85 text-base leading-relaxed">
          Tell us what inspires you, and we&apos;ll transform your vision
          into a journey that&apos;s uniquely yours.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="/start-planning" className="inline-flex w-[230px] btn-pill-gold">
            Start Planning
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
          <a href="/travel-services" className="inline-flex w-[230px] btn-pill-outline">
            Explore Our Services
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          {highlights.map((h, i) => (
            <div key={h.label} className="flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold-2 shrink-0"
                >
                  <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {h.icon}
                  </g>
                </svg>
                <span className="text-cream/85 text-xs font-semibold tracking-[0.1em] uppercase leading-tight">
                  {h.label}
                </span>
              </div>
              {i < highlights.length - 1 && (
                <span className="hidden sm:block h-8 w-px bg-cream/25" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
