"use client";

import { useEffect } from "react";

export default function Toast({
  show,
  message,
  onClose,
}: {
  show: boolean;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[200] transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 bg-ink text-cream rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] pl-4 pr-5 py-4 max-w-sm">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
