import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="bg-cream-3 pt-40 pb-0 sm:pt-48 sm:pb-28">
      <div className="container-premium grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-6">
            Our Services
          </p>
          <h1 className="font-cormorant font-medium text-5xl sm:text-6xl leading-tight text-ink mb-6">
            Travel Planning,
            <br />
            <span className="italic">Tailored to You.</span>
          </h1>
          <p className="text-ink/55 text-base leading-relaxed max-w-md mb-10">
            From relaxing escapes to unforgettable adventures, we create
            personalized travel experiences designed around your interests,
            preferences, and dreams.
          </p>

          <a
            href="/start-planning"
            className="inline-flex items-center justify-center gap-2 w-[230px] rounded-full bg-ink text-cream text-sm font-medium py-4 hover:bg-ink-2 transition-colors"
          >
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
        </div>

        <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(11,19,32,0.25)]">
          <Image
            src="/jo-lord-C9HqBpQzyds-unsplash.jpg"
            alt="Woman in a wide-brimmed hat overlooking the New York City skyline at dusk"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
