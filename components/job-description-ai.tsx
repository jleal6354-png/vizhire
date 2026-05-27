"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

function buildDescription(context: string) {
  const roleContext = context.trim() || "this role";

  return `Role Summary
We are hiring for ${roleContext}. This person will help the team move faster, communicate clearly, and create meaningful impact through thoughtful execution and strong professional judgment.

Key Responsibilities
- Own core responsibilities tied to the role and communicate progress with clarity.
- Collaborate with cross-functional teammates, managers, and stakeholders.
- Turn priorities into focused action while maintaining high standards.
- Use data, customer context, or operational insight to improve outcomes.
- Bring a professional, constructive presence to team conversations.

What Success Looks Like
- You explain your thinking clearly and make work easier for others to understand.
- You follow through on commitments and raise risks early.
- You balance speed, quality, and collaboration.
- You contribute to a team environment built on trust, accountability, and momentum.

Qualifications
- Relevant experience connected to the responsibilities of this role.
- Strong communication skills and a professional presence.
- Ability to prioritize, solve problems, and learn quickly.
- Evidence of impact through previous work, projects, or measurable outcomes.

Work Environment
This role is designed for someone who works well with ownership, clarity, and collaboration. The team values thoughtful communication, practical execution, and people who can build trust before decisions become urgent.

Why This Role Matters
The right candidate will help the organization make stronger decisions, move with more confidence, and create better outcomes for the people the business serves.`;
}

export function JobDescriptionAI() {
  const [context, setContext] = useState("");
  const [description, setDescription] = useState("");
  const [generated, setGenerated] = useState(false);

  function generate() {
    setGenerated(true);
    setDescription(buildDescription(context));
  }

  return (
    <section id="job-description" className="scroll-mt-24 rounded-2xl border border-viz-100 bg-viz-50 p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-viz-700 text-white">
          <Sparkles className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-black text-ink">Job description assist</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Tell VizHire about the position, then generate a polished recruiter-ready draft you can edit before posting.
          </p>
        </div>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-black text-ink">Describe the role</span>
        <textarea
          value={context}
          onChange={(event) => setContext(event.target.value)}
          className="mt-2 min-h-24 w-full rounded-xl border border-viz-100 bg-white px-4 py-3 outline-viz-500"
          placeholder="Example: growth marketer for healthcare SaaS, lifecycle campaigns, strong customer research, remote team, clear communicator..."
        />
      </label>
      <button
        type="button"
        onClick={generate}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 py-3 text-sm font-black text-white"
      >
        <Sparkles className="h-4 w-4" />
        Help Me Write This Job Description
      </button>
      <label className="mt-4 block">
        <span className="text-sm font-black text-ink">Job Description *</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          className="mt-2 min-h-72 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 font-medium leading-7 outline-viz-500"
          placeholder="Describe the opportunity, responsibilities, team, impact, expectations, and what makes someone successful here."
        />
      </label>
      {generated && (
        <p className="mt-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-viz-700 shadow-soft">
          Draft generated. Review the expectations, qualifications, and communication standards before publishing.
        </p>
      )}
    </section>
  );
}
