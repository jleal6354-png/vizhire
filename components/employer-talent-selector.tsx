"use client";

import { useEffect, useState } from "react";

const storageKey = "vizhire-employer-industries";

export const employerTalentAreas = [
  "Healthcare",
  "Engineering & Technical",
  "Hospitality",
  "Customer Service",
  "Leadership",
  "Operations",
  "Sales",
  "Retail",
  "Education",
  "Finance"
];

export function EmployerTalentSelector() {
  const [selected, setSelected] = useState<string[]>(["Healthcare", "Hospitality"]);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        const valid = parsed.filter((area) => employerTalentAreas.includes(area));
        if (valid.length > 0) setSelected(valid);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(selected));
  }, [selected]);

  function toggle(area: string) {
    setSelected((current) => {
      if (current.includes(area)) {
        return current.length === 1 ? current : current.filter((item) => item !== area);
      }
      return [...current, area];
    });
  }

  return (
    <div className="rounded-2xl border border-viz-100 bg-viz-50/80 p-4">
      <p className="text-sm font-black text-ink">What type of talent are you hiring for?</p>
      <p className="mt-1 text-xs font-bold leading-5 text-slate-500">
        Choose a few areas so VizHire can prioritize candidate discovery after signup.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {employerTalentAreas.map((area) => {
          const isSelected = selected.includes(area);

          return (
            <button
              key={area}
              type="button"
              onClick={() => toggle(area)}
              aria-pressed={isSelected}
              className={`rounded-full px-3 py-2 text-xs font-black transition ${
                isSelected ? "bg-viz-700 text-white shadow-soft" : "bg-white text-viz-700 shadow-soft hover:bg-white/80"
              }`}
            >
              {area}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-xs font-bold text-viz-700">{selected.length} selected for your discovery experience.</p>
    </div>
  );
}
