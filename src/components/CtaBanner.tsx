export default function CtaBanner() {
  return (
    <section id="contact" className="relative bg-ink py-28 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border border-gold" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full border border-gold" />
      </div>

      <div className="container-premium relative z-10 text-center">
        <p className="eyebrow text-gold-2 mb-5">Begin Your Next Journey</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream max-w-3xl mx-auto leading-tight text-balance">
          Tell us where, and we&apos;ll handle everything else.
        </h2>
        <p className="text-cream/60 mt-6 max-w-md mx-auto text-sm leading-relaxed">
          A member of our advisory team will respond within one business day
          to schedule your private consultation.
        </p>

        <form className="mt-12 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 px-5 py-3.5 text-sm focus:outline-none focus:border-gold-2 transition-colors"
          />
          <button type="submit" className="inline-flex btn-gold whitespace-nowrap">
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
