import Image from "next/image";

export default function FinalCta() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-[20px] pb-10 sm:pb-40">
      <Image
        src="/footer.png"
        alt="Coastal cliffs along the ocean at dusk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-premium relative z-10 text-center">
        <h2 className="font-cormorant font-medium text-balance text-cream text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Let&apos;s Create Your Perfect Journey.
        </h2>
        <p className="mt-4 text-cream/85 text-sm sm:text-base">
          Your travel dreams are unique. Let&apos;s turn them into a plan.
        </p>

        <div className="mt-8 flex justify-center">
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
        </div>
      </div>
    </section>
  );
}
