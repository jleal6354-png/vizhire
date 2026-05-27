"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ApplyButton({ jobTitle }: { jobTitle: string }) {
  const [applied, setApplied] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setApplied(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 py-4 font-black text-white shadow-glow"
      >
        {applied ? <CheckCircle2 className="h-5 w-5" /> : <Send className="h-5 w-5" />}
        {applied ? "Application Submitted" : "Submit VizHire Application"}
      </button>
      {applied && (
        <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
          You applied to {jobTitle}. The employer can now review your profile, resume, and guided video responses.
        </p>
      )}
    </div>
  );
}
