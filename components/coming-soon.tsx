"use client";

import { useState } from "react";

export function ComingSoonButton({
  children,
  className = "",
  title = "Coming soon",
  message = "This action is part of the next functional pass. Nothing was changed yet.",
  type = "button",
  ariaLabel
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  message?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type={type} aria-label={ariaLabel} onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-midnight/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-viz-100 bg-white p-6 text-center shadow-glow">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">VizHire</p>
            <h2 className="mt-3 text-2xl font-black text-ink">{title}</h2>
            <p className="mt-3 text-sm font-bold leading-6 text-slate-600">{message}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-viz-700 px-4 text-sm font-black text-white"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
