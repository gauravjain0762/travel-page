const features = [
  {
    label: "Better Rates",
    title: "The Rates You Never See",
    desc: "Hotels distribute thousands of unpublished rates through private channels — wholesalers, consortia, agency networks. We scan hundreds of these sources in seconds so you're never paying more than you should.",
  },
  {
    label: "Recognition",
    title: "They Know You're Coming",
    desc: "When you book through us, your preferences arrive before you do. The room, the pillow, the wine you like — all communicated in advance. You walk in as a known guest, not a stranger checking in.",
  },
  {
    label: "Advocacy",
    title: "Someone on Your Side",
    desc: "You reach your advisor directly. They speak to hotel management — not the front desk. No hold music. No repeating yourself. Actual representation when something goes wrong.",
  },
  {
    label: "Zero Fees",
    title: "So What's the Catch",
    desc: "There isn't one. The hotel pays us — not you. You pay the same rate, often less, and get better treatment. It doesn't cost you a thing.",
  },
  {
    label: "Convenience",
    title: "It Only Gets Better",
    desc: "Each booking becomes faster than the last. Call or text your advisor with a destination — they'll come back with options before you've finished thinking about it.",
  },
  {
    label: "Personalization",
    title: "A Permanent Advantage",
    desc: "Your preferences, loyalty numbers, and travel history are stored securely. Future bookings take a single text. A relationship that compounds every time you travel.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-gold mb-4">Why Choose Us</p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-[2.75rem] leading-tight text-ink">
            More Than Just Travel Planning
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((f) => (
            <div key={f.label} className="text-center sm:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                {f.label}
              </p>
              <h3 className="font-cormorant font-medium text-xl sm:text-2xl text-ink mb-3">
                {f.title}
              </h3>
              <p className="text-ink/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/ri.imagine.travel/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 flex mx-auto items-center justify-center gap-2 w-[230px] rounded-full border border-ink/20 text-ink text-sm font-medium py-4 hover:border-ink/40 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
          </svg>
          View More on Instagram
        </a>
      </div>
    </section>
  );
}
