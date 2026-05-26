"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plus, Sparkles } from "lucide-react";

function focusRequiredSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
  section.classList.add("ring-4", "ring-viz-300", "ring-offset-2", "ring-offset-white");
  window.setTimeout(() => {
    section.classList.remove("ring-4", "ring-viz-300", "ring-offset-2", "ring-offset-white");
  }, 2200);
}

const employerRequiredItems = [
  {
    label: "Add the job title",
    target: "job-title",
    reason: "This helps candidates quickly understand the role."
  },
  {
    label: "Add a clear job description",
    target: "job-description",
    reason: "This helps candidates apply with confidence."
  },
  {
    label: "Add salary range",
    target: "salary-range",
    reason: "Clear expectations attract better-fit candidates faster."
  },
  {
    label: "Confirm video questions",
    target: "video-questions",
    reason: "This helps candidates answer with clarity and confidence."
  }
];

export function JobPublishAssist() {
  const [active, setActive] = useState(employerRequiredItems[0]);
  const [guidedOnce, setGuidedOnce] = useState(false);

  function guideTo(item = employerRequiredItems[0]) {
    setGuidedOnce(true);
    setActive(item);
    focusRequiredSection(item.target);
  }

  return (
    <div className="rounded-2xl border border-viz-100 bg-white p-4 shadow-soft">
      <div className="flex items-start gap-3">
        <Sparkles className="mt-1 h-5 w-5 text-viz-600" />
        <div>
          <p className="font-black text-ink">VizHire posting quality check</p>
          <p className="mt-1 text-sm font-bold leading-6 text-slate-600">Complete the essentials before publishing so candidates understand the opportunity clearly.</p>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        {employerRequiredItems.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => guideTo(item)}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-bold leading-6 transition ${
              active.target === item.target ? "bg-viz-700 text-white shadow-glow" : "bg-viz-50 text-slate-700 hover:bg-viz-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-bold leading-6 text-viz-800">
        This is required before preview/publish. {active.reason}
      </p>
      {guidedOnce ? (
        <Link href="/employer/jobs/published" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 py-4 font-black text-white shadow-glow">
          Continue testing flow <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <button type="button" onClick={() => guideTo()} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 py-4 font-black text-white shadow-glow">
          <Plus className="h-4 w-4" /> Show missing items
        </button>
      )}
    </div>
  );
}

const completionItems = [
  {
    label: "Record your intro video",
    target: "video",
    reason: "This helps employers understand you faster."
  },
  {
    label: "Upload your resume and review experience",
    target: "resume",
    reason: "This helps employers trust your background faster."
  },
  {
    label: "Add Top 5 Skills",
    target: "skills",
    reason: "This helps VizHire recommend better-fit roles."
  },
  {
    label: "Add references or recommendations",
    target: "references",
    reason: "This helps employers understand you faster."
  }
];

export function CandidatePreviewAssist() {
  const [active, setActive] = useState(completionItems[0]);
  const [guidedOnce, setGuidedOnce] = useState(false);

  function guideTo(item = completionItems[0]) {
    setGuidedOnce(true);
    setActive(item);
    focusRequiredSection(item.target);
  }

  return (
    <div className="rounded-3xl border border-viz-100 bg-white p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <Sparkles className="mt-1 h-5 w-5 text-viz-600" />
        <div>
          <p className="font-black text-ink">Ready for employer preview?</p>
          <p className="mt-1 text-sm font-bold leading-6 text-slate-600">
            Complete the core profile areas first so the preview feels polished, useful, and worth sharing.
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        {completionItems.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => guideTo(item)}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-bold leading-6 transition ${
              active.target === item.target ? "bg-viz-700 text-white shadow-glow" : "bg-viz-50 text-slate-700 hover:bg-viz-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-bold leading-6 text-viz-800">
        This is required before preview/publish. {active.reason}
      </p>
      {guidedOnce ? (
        <Link href="/onboarding/preview" className="mt-4 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 py-4 font-black text-white shadow-glow">
          Preview incomplete profile <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <button type="button" onClick={() => guideTo()} className="mt-4 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-4 font-black text-slate-500 transition hover:bg-viz-50 hover:text-viz-700">
          Complete required sections to preview <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
