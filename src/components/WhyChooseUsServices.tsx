import Image from "next/image";

const features = [
  {
    title: "Personalized Recommendations",
    desc: "Your trip reflects your preferences.",
    icon: (
      <>
        <circle cx="12" cy="8.5" r="3" />
        <path d="M5.5 19c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
      </>
    ),
  },
  {
    title: "Carefully Selected Experiences",
    desc: "Thoughtful accommodation and activity suggestions.",
    icon: (
      <path d="M12 4l1.8 4.6L18 10l-4.2 1.4L12 16l-1.8-4.6L6 10l4.2-1.4L12 4z" />
    ),
  },
  {
    title: "Expert Travel Guidance",
    desc: "Advice from an experienced travel advisor.",
    icon: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 00-3.5 10.9c.3.2.5.6.5 1v.1h6v-.1c0-.4.2-.8.5-1A6 6 0 0012 3z" />
      </>
    ),
  },
  {
    title: "Support Throughout Your Journey",
    desc: "Assistance before and during your travels.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M6.5 17.5l1.4-1.4M16.1 7.9l1.4-1.4" />
      </>
    ),
  },
];

export default function WhyChooseUsServices() {
  return (
    <section className="bg-cream-3 py-24 sm:py-28">
      <div className="container-premium grid lg:grid-cols-[480px_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=1000&auto=format&fit=crop"
            alt="Infinity pool resort overlooking the bay at sunset"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-5">
            Why Choose Us
          </p>
          <h2 className="font-cormorant text-4xl sm:text-[2.75rem] leading-tight text-ink mb-10">
            Thoughtful Planning.
            <br />
            Meaningful Experiences.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-ink/70"
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
                </span>
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
        </div>
      </div>
    </section>
  );
}
