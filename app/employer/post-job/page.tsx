import Link from "next/link";
import { BriefcaseBusiness, CalendarDays, EyeOff, MapPin, Video } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { JobDescriptionAI } from "@/components/job-description-ai";
import { JobPublishAssist } from "@/components/publish-assist";
import { SkillSuggestionInput } from "@/components/skill-suggestion-input";
import { jobs } from "@/data/demo";

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
              <label className="block">
                <span className="text-sm font-black">Salary range</span>
                <input id="salary-range" className="mt-2 w-full scroll-mt-24 rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="$90k - $120k" />
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
            </div>

            <JobDescriptionAI />

            <div className="grid gap-4 md:grid-cols-2">
              <SkillSuggestionInput label="Required skills" type="required" />
              <SkillSuggestionInput label="Preferred skills" type="preferred" />
            </div>

            <section id="video-questions" className="scroll-mt-24 rounded-2xl border border-viz-100 bg-white p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <Video className="h-7 w-7 text-viz-600" />
                <div>
                  <h3 className="text-xl font-black text-ink">Candidate Video Questions</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Ask candidates 3-5 short questions they can answer by video.</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  "Tell us about your experience related to this role.",
                  "Why are you interested in this opportunity?",
                  "What makes you a strong fit?",
                  "Describe a challenge you solved.",
                  "What should we know about you beyond your resume?"
                ].map((question, index) => (
                  <label key={question} className="block">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Question {index + 1}{index < 3 ? " *" : ""}</span>
                    <input defaultValue={question} className="mt-2 w-full rounded-xl border border-slate-200 bg-viz-50 px-4 py-3 outline-viz-500" />
                  </label>
                ))}
              </div>
            </section>

            <JobPublishAssist />
          </div>
        </form>
        <section className="space-y-4">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Find candidates beyond the resume.</h2>
            <p className="mt-3 leading-7 text-slate-600">Post a job free for 30 days, then review applicants by video, Top 5 Skills, references, and match reasons.</p>
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
