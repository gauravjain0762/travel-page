export default function ReadyToPlan() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[60px] sm:pt-[20px] pb-10 sm:pb-40">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />
      <div className="container-premium relative z-10 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cream/60 mb-6">
          Ready to Plan Your Next Journey?
        </p>
        <h2 className="font-cormorant font-medium text-cream text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.3] max-w-3xl mx-auto text-balance">
          Tell us what you&apos;re dreaming of, and let&apos;s create
          something wonderful together.
        </h2>

        <div className="mt-10 flex justify-center">
          <a
            href="/start-planning"
            className="inline-flex items-center justify-center gap-2 w-[230px] rounded-full bg-cream text-ink text-sm font-medium py-4 hover:bg-cream-2 transition-colors"
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
      </div>
    </section>
  );
}
