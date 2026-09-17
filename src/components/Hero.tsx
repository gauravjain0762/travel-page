import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      <Image
        src="/hero-background.png"
        alt="Couple relaxing in an infinity pool overlooking Santorini at sunset"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

      <div className="container-premium relative z-10 w-full pt-24">
        <p className="eyebrow text-cream/90 mb-6">Luxury Travel Advisor</p>
        <h1 className="font-headline italic text-balance text-cream text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.08] max-w-2xl">
          Your Journey.
          <br />
          Your Way.
        </h1>
        <p className="mt-6 max-w-md text-cream/85 text-base leading-relaxed">
          Tell us what kind of experience you&apos;re looking for, and
          we&apos;ll help you create a journey that&apos;s uniquely yours.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="/start-planning" className="inline-flex btn-pill-gold">
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
          <a href="#services" className="inline-flex btn-pill-outline">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
