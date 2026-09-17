"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setShowToast(true);
      setFullName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-cream-3 pt-40 pb-24 sm:pt-48 sm:pb-28">
      <div className="container-premium max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-6">
          Let&apos;s Start Planning Something Extraordinary
        </p>
        <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-ink">
          Ready to Embark on
          <br />
          Your <span className="italic">Next</span> Adventure?
        </h1>
        <p className="mt-6 text-ink/55 text-[0.95rem] sm:text-base leading-relaxed max-w-xl mx-auto">
          Whether you&apos;re ready to start planning your journey or simply
          have a question, we&apos;re here to help. Use the button below to
          begin your personalized trip planning experience, or fill out the
          contact form for general inquiries.
        </p>

        <div className="mt-10 flex justify-center">
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

        {status === "sent" ? (
          <div className="mt-16 bg-white rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,19,32,0.15)] p-12 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Message Sent
            </p>
            <h2 className="font-cormorant text-3xl text-ink mb-3">
              Thank You for Reaching Out
            </h2>
            <p className="text-ink/55">
              We&apos;ve received your message and will get back to you
              within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-16 bg-white rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,19,32,0.15)] p-8 sm:p-12 text-left"
          >
            <div className="mb-8">
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold tracking-[0.2em] uppercase text-ink/45 mb-3"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border-b border-ink/20 bg-transparent pb-2 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="email"
                className="block text-xs font-semibold tracking-[0.2em] uppercase text-ink/45 mb-3"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-ink/20 bg-transparent pb-2 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div className="mb-10">
              <label
                htmlFor="message"
                className="block text-xs font-semibold tracking-[0.2em] uppercase text-ink/45 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-ink/15 rounded-lg p-4 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Type here..."
              />
            </div>

            {status === "error" && (
              <p className="mb-6 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Something went wrong. Please try again.
              </p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex btn-pill-gold disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
      <Toast
        show={showToast}
        message="Your message was sent successfully!"
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
