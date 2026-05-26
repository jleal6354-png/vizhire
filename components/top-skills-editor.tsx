"use client";

import { useState } from "react";
import { CheckCircle2, Plus, X } from "lucide-react";

export function TopSkillsEditor({ initialSkills }: { initialSkills: string[] }) {
  const [skills, setSkills] = useState(initialSkills.slice(0, 5));
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const canAdd = draft.trim().length > 1 && skills.length < 5;

  function addSkill() {
    if (!canAdd) return;
    setSkills([...skills, draft.trim()]);
    setDraft("");
    setSaved(false);
  }

  return (
    <section className="glass rounded-3xl p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-ink">Top 5 Skills</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">Choose up to 5 key skills employers in your field should notice first. Minimum 1 skill recommended.</p>
        </div>
        <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{skills.length}/5</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => setSkills(skills.filter((item) => item !== skill))}
            className="inline-flex items-center gap-2 rounded-full bg-viz-700 px-4 py-2 text-sm font-black text-white"
          >
            {skill}
            <X className="h-4 w-4" />
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              addSkill();
            }
          }}
          className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 outline-viz-500"
          placeholder={skills.length >= 5 ? "Maximum 5 skills reached" : "Add a key skill"}
        />
        <button
          type="button"
          onClick={addSkill}
          disabled={!canAdd}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          <Plus className="h-4 w-4" /> Add Skill
        </button>
      </div>
      <button
        type="button"
        onClick={() => setSaved(true)}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-viz-300 bg-white px-4 py-3 font-black text-viz-700"
      >
        <CheckCircle2 className="h-4 w-4" />
        Save Top 5 Skills
      </button>
      {saved && <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">Saved. Your profile is ready to share.</p>}
    </section>
  );
}
