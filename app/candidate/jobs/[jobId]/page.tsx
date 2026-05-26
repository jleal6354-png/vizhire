import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Eye,
  EyeOff,
  ListChecks,
  MapPin,
  Share2,
  Sparkles
} from "lucide-react";
import { ApplyButton } from "@/components/apply-button";
import { AppShell } from "@/components/app-shell";
import { ShareActions } from "@/components/share-actions";
import { JobVideoResponseStudio } from "@/components/video-studio";
import { candidates, getCandidateMatch, jobs } from "@/data/demo";

const candidate = candidates[0];

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

export default async function CandidateJobDetailPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const job = jobs.find((item) => item.id === jobId) ?? jobs[0];
  const match = getCandidateMatch(candidate, job);
  const companyName = job.hideCompanyName ? "Company private" : job.company;
  const responsibilities = [
    "Own meaningful work tied to the role and communicate progress clearly.",
    "Collaborate with cross-functional teammates and bring thoughtful judgment to decisions.",
    "Use customer, team, or operational insight to improve outcomes with confidence."
  ];
  const hiringProcess = ["Apply with VizHire profile", "Employer reviews video and experience", "Focused interview conversation"];

  return (
    <AppShell role="candidate" title={job.title} subtitle="Review the opportunity, apply, or share it with someone who may be a strong fit.">
      <Link href="/candidate/jobs" className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to job recommendations
      </Link>

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">VizHire opportunity</p>
            <h1 className="mt-3 text-balance text-4xl font-black sm:text-5xl">{job.title}</h1>
            <p className="mt-4 text-lg text-white/76">
              {companyName} · {job.workType} · {job.location}
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-white/74">
              A modern hiring experience where candidates can show communication, professionalism, trust, and fit beyond the resume.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur">
            <p className="text-sm font-bold text-white/70">Your fit signal</p>
            <p className="mt-2 text-4xl font-black">{match.score}%</p>
            <p className="mt-1 text-sm text-white/68">Suggested match</p>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.62fr_0.38fr]">
        <section className="space-y-6">
          <article className="glass rounded-3xl p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">Role overview</h2>
                <p className="mt-3 leading-8 text-slate-600">{job.description}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-viz-50 px-4 py-2 text-xs font-black text-viz-700">
                <Share2 className="h-4 w-4" />
                Shareable opportunity
              </span>
            </div>
            <div className="mt-5 grid gap-3 text-sm font-bold text-slate-600 sm:grid-cols-2">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {companyName}</span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft"><MapPin className="h-4 w-4 text-viz-600" /> {job.location}</span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft"><Sparkles className="h-4 w-4 text-viz-600" /> {job.workType}</span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft">
                {job.showSalary ? <Eye className="h-4 w-4 text-viz-600" /> : <EyeOff className="h-4 w-4 text-viz-600" />}
                {job.showSalary ? job.salaryRange : "Salary hidden"}
              </span>
            </div>
          </article>

          <article className="glass rounded-3xl p-6">
            <h2 className="inline-flex items-center gap-2 text-2xl font-black text-ink">
              <ListChecks className="h-6 w-6 text-viz-700" />
              Responsibilities
            </h2>
            <div className="mt-5 grid gap-3">
              {responsibilities.map((item) => (
                <p key={item} className="rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-slate-700 shadow-soft">{item}</p>
              ))}
            </div>
          </article>

          <article className="glass rounded-3xl p-6">
            <h2 className="inline-flex items-center gap-2 text-2xl font-black text-ink">
              <ClipboardCheck className="h-6 w-6 text-viz-700" />
              Requirements
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-black text-slate-500">Required</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.requiredSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-black text-slate-500">Preferred</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.preferredSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-soft">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Why VizHire matched you</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Match signals are a starting point, not a decision. Review the role carefully before applying.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {match.reasons.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-viz-700" />
                  <p className="mt-3 text-sm font-black leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <JobVideoResponseStudio questions={job.videoQuestions} />

          <article className="glass rounded-3xl p-6">
            <h2 className="inline-flex items-center gap-2 text-2xl font-black text-ink">
              <Clock3 className="h-6 w-6 text-viz-700" />
              Hiring process
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {hiringProcess.map((step, index) => (
                <div key={step} className="rounded-2xl bg-white p-4 shadow-soft">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-full bg-viz-50 text-xs font-black text-viz-700">{index + 1}</span>
                  <p className="mt-3 text-sm font-black leading-6 text-ink">{step}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <aside className="space-y-6 xl:sticky xl:top-28">
          <div className="glass rounded-3xl p-5">
            <h2 className="text-xl font-black text-ink">Apply with your VizHire profile</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Send your profile, video intro, work history, skills, references, and recommendations in one polished application.
            </p>
            <div className="mt-5">
              <ApplyButton jobTitle={job.title} />
            </div>
          </div>

          <ShareActions
            mode="job"
            label="Share this opportunity"
            title={`${job.title} at ${companyName}`}
            url={`/candidate/jobs/${job.id}`}
            name={job.title}
            role={`${companyName} · ${job.workType} · ${job.location}`}
            introLabel="Opportunity"
            trustStatement="A human-first opportunity where candidates can apply with a VizHire profile and help employers understand more than a resume."
          />
        </aside>
      </div>
    </AppShell>
  );
}
