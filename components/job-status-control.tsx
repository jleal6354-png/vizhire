"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";

const statuses = ["Draft", "Live", "Filled", "Paused", "Cancelled/Closed"] as const;
type JobStatus = (typeof statuses)[number];

const statusCopy: Record<JobStatus, string> = {
  Draft: "This role is not visible to candidates yet.",
  Live: "This role is actively hiring and visible to candidates.",
  Filled: "This role is filled. Applicants remain viewable for history.",
  Paused: "This role is temporarily hidden from active hiring.",
  "Cancelled/Closed": "This role is closed. Applicants remain viewable."
};

export function JobStatusControl({ initialStatus = "Live" }: { initialStatus?: JobStatus }) {
  const [status, setStatus] = useState<JobStatus>(initialStatus);
  const isInactive = status === "Filled" || status === "Cancelled/Closed";
  const tone = useMemo(() => {
    if (status === "Live") return "bg-emerald-50 text-emerald-700";
    if (status === "Paused" || status === "Draft") return "bg-amber-50 text-amber-700";
    return "bg-slate-100 text-slate-700";
  }, [status]);

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Job status</p>
          <h2 className="mt-2 text-2xl font-black text-ink">Control this posting</h2>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-black ${tone}`}>{status}</span>
      </div>
      <p className="mt-3 text-sm font-bold leading-6 text-slate-600">{statusCopy[status]}</p>
      {isInactive && (
        <p className="mt-3 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-bold leading-6 text-viz-800">
          This role no longer shows as actively hiring, but the applicant history stays available.
        </p>
      )}
      <label className="mt-5 block">
        <span className="text-sm font-black text-ink">Update status</span>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as JobStatus)}
          className="mt-2 w-full rounded-xl border border-viz-100 bg-white px-4 py-3 text-sm font-black text-ink outline-viz-500"
        >
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      {isInactive && (
        <button
          type="button"
          onClick={() => setStatus("Live")}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white shadow-glow"
        >
          <RotateCcw className="h-4 w-4" /> Reopen job
        </button>
      )}
    </div>
  );
}
