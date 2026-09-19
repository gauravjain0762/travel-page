import { Fragment } from "react";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    desc: "Share your travel preferences and expectations.",
    icon: (
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8c-1 0-2-.2-2.9-.5L5 21l1.6-4.5C5.2 15.2 4 13.7 4 12z" />
    ),
  },
  {
    number: "02",
    title: "We Create Your Plan",
    desc: "Our advisor prepares a personalized travel proposal.",
    icon: (
      <>
        <path d="M4 5l5-2 6 2 5-2v14l-5 2-6-2-5 2V5z" />
        <path d="M9 3v14M15 5v14" />
      </>
    ),
  },
  {
    number: "03",
    title: "Refine the Details",
    desc: "Review and adjust the plan to suit your needs.",
    icon: (
      <>
        <path d="M6 4v9M6 17v3M12 4v3M12 11v9M18 4v13M18 21v-1" />
        <circle cx="6" cy="15" r="2" />
        <circle cx="12" cy="9" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    desc: "Travel with confidence and support.",
    icon: <path d="M12 4l8 15H4L12 4z" />,
  },
];

export default function OurProcess() {
  return (
    <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-4">
            Our Process
          </p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-5xl leading-tight text-ink">
            From Your Dream to Your Departure
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:[grid-template-columns:1fr_28px_1fr_28px_1fr_28px_1fr]">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-ink mb-8"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </g>
                </svg>
                <p className="text-xs text-ink/40 mb-2">{step.number}</p>
                <h3 className="font-semibold text-ink text-[0.95rem] mb-2">
                  {step.title}
                </h3>
                <p className="text-ink/55 text-sm leading-relaxed max-w-none lg:max-w-[220px]">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex justify-center pt-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-ink/20"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-[230px] rounded-full border border-ink/20 text-ink text-sm font-medium py-4 hover:border-ink/40 transition-colors"
          >
            Start Your Travel Enquiry
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
