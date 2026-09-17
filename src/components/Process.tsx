const steps = [
  {
    n: "01",
    title: "Consult",
    desc: "A private conversation with your advisor to understand how you actually want to travel — pace, priorities, budget, and taste.",
  },
  {
    n: "02",
    title: "Curate",
    desc: "We design a draft itinerary, refine it with you, and lock in access, availability, and rates while they still hold.",
  },
  {
    n: "03",
    title: "Travel",
    desc: "You travel; we stay on call. Every reservation, transfer, and contingency has already been quietly arranged.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream-2 py-28 sm:py-32">
      <div className="container-premium">
        <div className="max-w-xl mb-16">
          <p className="eyebrow text-gold mb-4">How It Works</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            Three conversations. Zero logistics on you.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <p className="font-display text-6xl text-gold/30 mb-4">
                {s.n}
              </p>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed max-w-xs">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[110%] w-[20%] divider-gold" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
