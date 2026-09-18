import Image from "next/image";

const features = [
  {
    title: "Personalized Recommendations",
    desc: "Every journey is tailored to your unique interests and preferences.",
    icon: (
      <path d="M12 20s-7.2-4.4-9.5-8.6C1 8 2.6 5 6 5c2 0 3.5 1.3 4 2.2.5-.9 2-2.2 4-2.2 3.4 0 5 3 3.5 6.4C19.2 15.6 12 20 12 20z" />
    ),
  },
  {
    title: "Expert Travel Guidance",
    desc: "Benefit from trusted advice and year of industry experience.",
    icon: (
      <>
        <path d="M4 5l5-2 6 2 5-2v14l-5 2-6-2-5 2V5z" />
        <path d="M9 3v14M15 5v14" />
      </>
    ),
  },
  {
    title: "Carefully Selected Experiences",
    desc: "We handpick the best stays, activities and local experiences.",
    icon: (
      <path d="M7 3h10M7 21h10M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" />
    ),
  },
  {
    title: "Support Throughout Your Journey",
    desc: "From planning to your return, we're always here for you.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3.5V6M12 18v2.5M3.5 12H6M18 12h2.5" />
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-3 pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-center">
        <div className="relative h-[460px] rounded-2xl overflow-hidden">
          <Image
            src="/jack-ward-rknrvCrfS1k-unsplash.jpg"
            alt="Cliffside coastal village at golden hour"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 380px"
          />
        </div>

        <div>
          <p className="eyebrow text-gold mb-4">Why Choose Us</p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-[2.75rem] leading-tight text-ink mb-12">
            More Than Just Travel Planning
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-0.5 text-ink/70"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </g>
                </svg>
                <div>
                  <h3 className="font-semibold text-ink text-[0.95rem] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-ink/55 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink text-sm font-medium px-6 py-4 hover:border-ink/40 transition-colors"
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
      </div>
    </section>
  );
}
