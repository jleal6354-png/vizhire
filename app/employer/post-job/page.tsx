import Link from "next/link";
import { BarChart3, BriefcaseBusiness, CalendarDays, EyeOff, Lightbulb, MapPin, MessageCircle, Play, Rocket, Sparkles, UsersRound, Video } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { JobDescriptionAI } from "@/components/job-description-ai";
import { JobPublishAssist } from "@/components/publish-assist";
import { SkillSuggestionInput } from "@/components/skill-suggestion-input";
import { jobs } from "@/data/demo";

const salaryRanges = [
  "$20k-30k",
  "$30k-40k",
  "$40k-50k",
  "$50k-70k",
  "$70k-90k",
  "$90k-120k",
  "$120k-150k",
  "$150k+"
];

const premiumRecruitingTools = [
  ["Boosted jobs", "Increase visibility for roles that need more qualified attention.", Rocket],
  ["Advanced sourcing", "Explore deeper candidate inventory and unlock more outreach.", UsersRound],
  ["Premium analytics", "See which roles, videos, and candidate signals are gaining traction.", BarChart3],
  ["AI candidate ranking", "Prioritize stronger-fit candidates once applicants start coming in.", Sparkles]
];

const responsePreview = [
  ["Communication clarity", "Explains experience with calm confidence.", MessageCircle],
  ["Problem-solving signal", "Shows how they think through real situations.", Lightbulb],
  ["Professional presence", "Reveals tone, energy, and customer-facing polish.", Sparkles]
];

export default function JobsPage() {
  return (
    <AppShell title="Job Posting" subtitle="Create roles that invite better human signals.">
      <div className="grid gap-6 xl:grid-cols-[0.58fr_0.42fr]">
        <form className="glass rounded-3xl p-5 sm:p-6">
          <div className="rounded-2xl bg-gradient-to-br from-midnight to-viz-900 p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-200">Start with a free job post</p>
            <h2 className="mt-2 text-3xl font-black">Post your first job free.</h2>
            <p className="mt-2 text-sm leading-6 text-white/72">Try VizHire before you pay. Ask better video questions and stop guessing from resumes.</p>
          </div>
          <div className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black">Job title</span>
                <input id="job-title" className="mt-2 w-full scroll-mt-24 rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Growth Marketing Manager" />
              </label>
              <label className="block">
                <span className="text-sm font-black">Company name</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Northstar Health" />
              </label>
              <label className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft md:col-span-2">
                <input type="checkbox" className="mt-1 h-5 w-5 accent-viz-700" />
                <span>
                  <span className="block font-black text-ink">Hide company name</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">You can keep your company private until candidates apply.</span>
                </span>
              </label>
              <label className="block">
                <span className="text-sm font-black">Location</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Austin, TX or Remote" />
              </label>
              <label className="block">
                <span className="text-sm font-black">Work type</span>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500">
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                  <option>Work abroad</option>
                  <option>Travel required</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label id="salary-range" className="block scroll-mt-24">
                <span className="text-sm font-black">Salary range</span>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500">
                  <option value="">Select a range</option>
                  {salaryRanges.map((range) => (
                    <option key={range}>{range}</option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
                  <input type="radio" name="salary" defaultChecked className="h-5 w-5 accent-viz-700" />
                  <span className="font-black">Show salary</span>
                </label>
                <label className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
                  <input type="radio" name="salary" className="h-5 w-5 accent-viz-700" />
                  <span className="font-black">Hide salary</span>
                </label>
              </div>
              <label className="block md:col-span-2">
                <span className="text-sm font-black">Optional custom salary note</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Example: Base plus commission, equity, or location-adjusted range" />
              </label>
            </div>

            <JobDescriptionAI />

            <div className="grid gap-4 md:grid-cols-2">
              <SkillSuggestionInput label="Required skills" type="required" />
              <SkillSuggestionInput label="Preferred skills" type="preferred" />
            </div>

            <section id="video-questions" className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-viz-100 bg-white shadow-soft">
              <div className="bg-[radial-gradient(circle_at_20%_0%,rgba(109,59,255,0.16),transparent_34%),linear-gradient(135deg,#ffffff,#fbfaff)] p-5 sm:p-6">
                <div className="grid gap-6 xl:grid-cols-[1fr_0.78fr] xl:items-end">
                  <div>
                    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-viz-600">
                      <Video className="h-4 w-4" /> Human signal studio
                    </p>
                    <h3 className="mt-3 text-balance text-3xl font-black leading-tight text-ink sm:text-4xl">
                      Experience candidates before interviews.
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm font-bold leading-7 text-slate-600">
                      Candidates respond by video so you can understand communication, clarity, confidence, and expertise before deciding who moves forward.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-midnight p-3 text-white shadow-glow">
                    <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.2),transparent_24%),linear-gradient(145deg,#080b25,#3b1793_54%,#0c061d)]">
                      <div className="aspect-video">
                        <span className="absolute left-4 top-4 rounded-full bg-white/12 px-3 py-1 text-xs font-black text-white/80 backdrop-blur">Candidate response preview</span>
                        <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white text-viz-700 shadow-soft">
                          <Play className="ml-0.5 h-6 w-6 fill-current" />
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-lg font-black">“Here’s how I approach customer trust...”</p>
                          <p className="mt-1 text-xs font-bold text-white/68">Clear, calm, role-relevant communication before the interview.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {responsePreview.map(([title, copy, Icon]) => (
                    <div key={title as string} className="rounded-2xl bg-white p-4 shadow-soft">
                      <Icon className="h-5 w-5 text-viz-600" />
                      <p className="mt-3 text-sm font-black text-ink">{title as string}</p>
                      <p className="mt-1 text-xs font-bold leading-5 text-slate-600">{copy as string}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h4 className="text-xl font-black text-ink">Choose the moments you want to see</h4>
                    <p className="mt-1 text-sm font-bold leading-6 text-slate-600">Strong questions invite candidates to show judgment, presence, and how they think.</p>
                  </div>
                  <span className="w-fit rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">3 required · 2 optional</span>
                </div>
                <div className="grid gap-3">
                  {[
                    "Tell us about a moment where your communication helped a team or customer move forward.",
                    "Why does this opportunity fit the kind of work you do best?",
                    "Walk us through a problem you solved and how you thought through it.",
                    "What should we understand about how you work that a resume may not show?",
                    "Describe the professional presence you try to bring to teams or customers."
                  ].map((question, index) => (
                    <label key={question} className="block rounded-2xl border border-viz-100 bg-[#fbfafc] p-4 transition focus-within:border-viz-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-viz-50">
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-viz-600">Video prompt {index + 1}{index < 3 ? " *" : ""}</span>
                      <input defaultValue={question} className="mt-2 w-full border-0 bg-transparent text-sm font-bold leading-6 text-ink outline-none" />
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <JobPublishAssist />
          </div>
        </form>
        <section className="space-y-4">
          <div className="glass rounded-3xl p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">After your first post</p>
            <h2 className="mt-2 text-2xl font-black text-ink">Reach stronger candidates with premium sourcing.</h2>
            <p className="mt-3 leading-7 text-slate-600">Once a role is live, VizHire can help you promote it, surface stronger-fit talent, and understand candidate momentum faster.</p>
            <div className="mt-5 grid gap-3">
              {premiumRecruitingTools.map(([title, text, Icon]) => (
                <div key={title as string} className="flex gap-3 rounded-2xl bg-white p-3 shadow-soft">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-viz-50 text-viz-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-black text-ink">{title as string}</p>
                    <p className="mt-1 text-xs font-bold leading-5 text-slate-500">{text as string}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={`/employer/jobs/${jobs[0].id}/promote`} className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-viz-700 to-viz-500 px-5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
              <Rocket className="h-5 w-5" /> Promote this role
            </Link>
          </div>
          {jobs.map((job) => (
            <Link key={job.title} href={`/employer/jobs/${job.id}`} className="glass block rounded-2xl p-6 transition hover:-translate-y-0.5 hover:shadow-glow">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h2 className="text-2xl font-black text-ink">{job.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm font-bold text-slate-600">
                    <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {job.hideCompanyName ? "Company private" : job.company}</span>
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-viz-600" /> {job.location}</span>
                    <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-viz-600" /> {job.posted}</span>
                    {job.hideCompanyName && <span className="inline-flex items-center gap-2"><EyeOff className="h-4 w-4 text-viz-600" /> Hidden company</span>}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.requiredSkills.slice(0, 4).map((skill) => (
                      <span key={skill} className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{skill}</span>
                    ))}
                  </div>
                </div>
                <span className="h-fit rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{job.applicants} applicants</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
