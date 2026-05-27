"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function SaveProfileButton() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="sticky bottom-20 z-20 rounded-2xl border border-viz-100 bg-white/95 p-3 shadow-glow backdrop-blur xl:bottom-4">
      <button
        type="button"
        onClick={() => setSaved(true)}
        className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 py-4 font-black text-white"
      >
        <CheckCircle2 className="h-5 w-5" />
        Save Profile Updates
      </button>
      {saved && <p className="mt-3 text-center text-sm font-bold text-emerald-700">Saved. You are ready for the next opportunity.</p>}
    </div>
  );
}
