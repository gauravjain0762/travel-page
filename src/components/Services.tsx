const services = [
  {
    title: "Bespoke Itinerary Design",
    desc: "Every trip is built from a blank page around your pace, interests, and non-negotiables — never a fixed package.",
    icon: (
      <path
        d="M4 19L19 4M19 4h-6M19 4v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "24/7 Concierge Support",
    desc: "A dedicated advisor is reachable throughout your journey — for changes, upgrades, or the unexpected.",
    icon: (
      <path
        d="M4 12a8 8 0 1116 0M4 12v3a2 2 0 002 2h1v-6H5a1 1 0 00-1 1zm16 0v3a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Exclusive Access",
    desc: "Preferred rates, room upgrades, and private experiences through our global network of properties and guides.",
    icon: (
      <path
        d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L6.6 19.3l1.3-6-4.6-4.1 6.1-.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Documentation & Visas",
    desc: "We manage visas, entry requirements, and travel advisories so logistics never become your problem.",
    icon: (
      <path
        d="M6 3h9l3 3v15H6V3zm9 0v3h3M9 12h6M9 16h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-28 sm:py-32">
      <div className="container-premium">
        <div className="max-w-xl mb-16">
          <p className="eyebrow text-gold-2 mb-4">What We Handle</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-cream">
            The full arc of your journey, quietly managed.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {services.map((s) => (
            <div key={s.title} className="bg-ink p-8 sm:p-10 flex flex-col gap-6">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gold-2"
              >
                {s.icon}
              </svg>
              <div>
                <h3 className="font-display text-xl text-cream mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
