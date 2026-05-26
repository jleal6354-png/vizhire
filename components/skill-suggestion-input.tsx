"use client";

import { useState } from "react";
import { CheckCircle2, Plus, X } from "lucide-react";

const roleSkills = {
  required: ["Growth Strategy", "Lifecycle Marketing", "Analytics", "Customer Research", "Brand Storytelling", "SQL", "Patient Communication", "Team Leadership"],
  preferred: ["Healthcare", "Product Marketing", "HubSpot", "Salesforce", "Figma", "Bilingual", "Hospitality", "Remote Collaboration"]
};

export function SkillSuggestionInput({ label, type }: { label: string; type: "required" | "preferred" }) {
  const suggestions = roleSkills[type];
  const [skills, setSkills] = useState<string[]>(suggestions.slice(0, type === "required" ? 3 : 2));
  const [draft, setDraft] = useState("");

  function addSkill(skill: string) {
    const clean = skill.trim();
    if (!clean || skills.includes(clean)) return;
    setSkills([...skills, clean]);
    setDraft("");
  }

  return (
    <div className="rounded-2xl border border-viz-100 bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-ink">{label}</p>
          <p className="mt-1 text-xs font-bold leading-5 text-slate-500">
            Standardized skills improve search, matching, and candidate recommendations.
          </p>
        </div>
        <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{skills.length}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => setSkills(skills.filter((item) => item !== skill))}
            className="inline-flex items-center gap-2 rounded-full bg-viz-50 px-3 py-2 text-xs font-black text-viz-700"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> {skill} <X className="h-3.5 w-3.5 opacity-60" />
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-viz-500"
          placeholder="Add standardized skill"
        />
        <button type="button" onClick={() => addSkill(draft)} className="grid h-12 w-12 place-items-center rounded-xl bg-viz-700 text-white">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.filter((skill) => !skills.includes(skill)).slice(0, 5).map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => addSkill(skill)}
            className="rounded-full border border-viz-100 bg-white px-3 py-1.5 text-xs font-black text-slate-600 transition hover:border-viz-300 hover:text-viz-700"
          >
            + {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
