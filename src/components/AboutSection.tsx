export default function AboutSection() {
  return (
    <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-6">
            About Ri-Imagine Travel
          </p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-ink">
            Meet Rimi
          </h2>
        </div>

        <div className="space-y-6 text-ink/70 text-[1.05rem] leading-relaxed">
          <p>
            My background is deeply rooted in fashion, while travel has
            always been a part of my life. Over time, the two naturally came
            together, shaping the way I see, experience, and ultimately plan
            travel for my clients. For me, a great trip isn&apos;t just about
            checking off countries and sights on a list. It&apos;s about
            knowing which hotel is happening right now, which lobby bar is
            worth lingering in, the restaurant everyone is talking about, and
            which street you should wander down to really feel the energy of
            a destination.
          </p>
          <p>
            My approach to travel is much like putting together a great
            look: it should feel effortless, personal, and thoughtfully
            curated. I love creating journeys that are on-trend, blending
            beautiful hotels, incredible food, local experiences, and those
            little details that make a trip feel special.
          </p>
          <p>
            At Ri-Imagine Travel, my goal is to take your personal travel
            style and turn it into a journey that feels distinctly yours.
            Through my preferred partnerships with luxury hotels and resorts
            worldwide, I&apos;m able to pair that personal approach with
            insider rates, VIP recognition, and exclusive perks&nbsp;&hellip;
            adding even more value to every journey I design.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/start-planning"
            className="inline-flex w-[230px] justify-center btn-pill-gold"
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
