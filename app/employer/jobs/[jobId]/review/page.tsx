import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Eye,
  FileText,
  MessageSquare,
  Play,
  Share2,
  ShieldCheck,
  Star,
  ThumbsUp,
  Video,
  X
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { candidates, getCandidateMatch, jobApplicants, jobs } from "@/data/demo";

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

const reviewStages = ["All", "Reviewed", "Shortlisted", "Interviewing", "Passed"] as const;

export default async function CandidateReviewExperiencePage({
  params,
  searchParams
}: {
  params: Promise<{ jobId: string }>;
  searchParams?: Promise<{ stage?: string }>;
}) {
  const { jobId } = await params;
  const { stage } = (await searchParams) ?? {};
  const job = jobs.find((item) => item.id === jobId) ?? jobs[0];
  const applicants = (jobApplicants[job.id as keyof typeof jobApplicants] ?? []).map((application) => ({
    ...application,
    candidate: candidates.find((candidate) => candidate.id === application.candidateId) ?? candidates[0]
  }));
  const activeStage = reviewStages.find((item) => item === stage) ?? "All";
  const stageApplicants = activeStage === "All"
    ? applicants
    : applicants.filter((item) => (activeStage === "Passed" ? String(item.status) === "Rejected" : item.status === activeStage));
  const visibleApplicants = activeStage === "All" ? applicants : stageApplicants;
  const featured = visibleApplicants[0];
  const boostedCandidateId = job.id === "growth-marketing-manager" ? "maya-johnson" : visibleApplicants[0]?.candidate.id;
  const match = featured ? getCandidateMatch(featured.candidate, job) : null;
  const upNext = visibleApplicants
    .filter((item) => item.candidate.id !== featured?.candidate.id)
    .slice(0, 5)
    .map((item) => ({
      candidate: item.candidate,
      status: item.status
    }));
  const stats = [
    { label: "Total Applicants", value: applicants.length || job.applicants, stage: "All" },
    { label: "Reviewed", value: applicants.filter((item) => item.status === "Reviewed").length, stage: "Reviewed" },
    { label: "Shortlisted", value: applicants.filter((item) => item.status === "Shortlisted").length, stage: "Shortlisted" },
    { label: "Interviewing", value: applicants.filter((item) => item.status === "Interviewing").length, stage: "Interviewing" },
    { label: "Passed", value: applicants.filter((item) => String(item.status) === "Rejected").length, stage: "Passed" }
  ];

  return (
    <AppShell title="Candidate Review" subtitle="Understand real candidates for this job.">
      <Link href={`/employer/jobs/${job.id}`} className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to job details
      </Link>

      <section className="mb-5 flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Reviewing candidates for</p>
          <h1 className="mt-2 text-2xl font-black text-ink sm:text-3xl">{job.title}</h1>
          <p className="mt-1 text-sm font-bold text-slate-500">{job.applicants} applicants · {job.location} · {job.hideCompanyName ? "Company private" : job.company}</p>
        </div>
        <Link href={`/employer/jobs/${job.id}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700">
          Job Details
        </Link>
      </section>

      <section className="mb-5 grid gap-2 sm:grid-cols-5">
        {stats.map((stat) => {
          const selected = activeStage === stat.stage;
          return (
            <Link
              key={stat.label}
              href={stat.stage === "All" ? `/employer/jobs/${job.id}/review` : `/employer/jobs/${job.id}/review?stage=${stat.stage}`}
              className={`rounded-2xl px-4 py-3 transition hover:-translate-y-0.5 ${
                selected ? "bg-viz-700 text-white shadow-glow" : "border border-viz-100 bg-white text-ink shadow-soft hover:bg-viz-50"
              }`}
            >
              <p className={`text-2xl font-black ${selected ? "text-white" : "text-ink"}`}>{stat.value}</p>
              <p className={`mt-1 text-xs font-black uppercase tracking-[0.14em] ${selected ? "text-viz-100" : "text-slate-500"}`}>{stat.label}</p>
            </Link>
          );
        })}
      </section>

      {!featured ? (
        <section className="rounded-[2rem] border border-viz-100 bg-white p-8 text-center shadow-soft">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">{activeStage}</p>
          <h2 className="mt-3 text-3xl font-black text-ink">No candidates in this stage yet.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-bold leading-6 text-slate-600">
            Choose another stage to continue reviewing applicants for this job.
          </p>
          <Link href={`/employer/jobs/${job.id}/review`} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow">
            Back to all applicants
          </Link>
        </section>
      ) : (
      <>
      <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          <article className="overflow-hidden rounded-3xl bg-midnight text-white shadow-glow">
            <div className="relative aspect-[4/5] min-h-[360px] max-h-[620px] sm:aspect-video sm:min-h-[280px]">
            <img src={featured.candidate.video} alt={`${featured.candidate.name} video introduction`} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/82 via-black/28 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/28 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-black/68 px-4 py-2 text-sm font-black text-emerald-300 backdrop-blur sm:left-5 sm:top-5">
              {match?.score}% Match
            </span>
            {featured.candidate.id === boostedCandidateId && (
              <span className="absolute left-4 top-16 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-viz-700 shadow-soft backdrop-blur sm:left-5 sm:top-16">
                Priority visibility
              </span>
            )}
            <span className="absolute right-4 top-4 hidden rounded-full bg-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/82 backdrop-blur sm:right-5 sm:top-5 sm:inline-flex">
              Professional intro
            </span>
            <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-viz-700 shadow-soft transition hover:scale-105 sm:h-18 sm:w-18" aria-label={`Play ${featured.candidate.name} intro video`}>
              <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="max-w-3xl">
                <div>
                  <h2 className="mt-2 text-3xl font-black sm:text-5xl">{featured.candidate.name}</h2>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-white/82 sm:gap-3 sm:text-sm">
                    <span>{featured.candidate.title}</span>
                    <span>·</span>
                    <span>{featured.candidate.location}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78">{featured.candidate.summary}</p>
                  <p className="mt-3 max-w-2xl text-xs font-black uppercase tracking-[0.16em] text-viz-100">
                    First impression for this role · {featured.status}
                  </p>
                  <div className="mt-4 hidden flex-wrap items-center gap-2 sm:flex">
                    {featured.candidate.topSkills.slice(0, 3).map((skill) => (
                      <span key={skill} className="rounded-full bg-white/12 px-3 py-1 text-[11px] font-black text-white backdrop-blur">{skill}</span>
                    ))}
                    <span className="rounded-full bg-emerald-400/16 px-3 py-1 text-[11px] font-black text-emerald-200 backdrop-blur">
                      {featured.candidate.references} references
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </article>

          <div className="hidden rounded-3xl bg-white p-4 shadow-soft sm:block">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[1.25fr_0.9fr_0.95fr_0.65fr]">
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow"><Video className="h-4 w-4" /> Move to Interview</button>
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-50 px-5 text-sm font-black text-viz-700"><ThumbsUp className="h-4 w-4" /> Shortlist</button>
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-viz-100 bg-white px-5 text-sm font-black text-slate-700">Next Candidate <ArrowRight className="h-4 w-4" /></button>
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 text-sm font-black text-red-600"><X className="h-4 w-4" /> Pass</button>
            </div>
          </div>

          <section className="glass rounded-3xl p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Up Next</p>
                <h2 className="text-2xl font-black text-ink">Review one more candidate</h2>
              </div>
              <Link href={`/employer/jobs/${job.id}`} className="text-sm font-black text-viz-700">See All</Link>
            </div>
            <div className="-mx-1 flex scroll-smooth gap-3 overflow-x-auto px-1 pb-2">
              {upNext.map(({ candidate, status }) => {
                const candidateMatch = getCandidateMatch(candidate, job);

                return (
                  <Link key={candidate.id} href={`/employer/candidates/${candidate.id}?job=${job.id}`} className="group w-[190px] shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-soft transition hover:-translate-y-1 hover:shadow-glow lg:w-[205px]">
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={candidate.video} alt={`${candidate.name} video preview`} className="h-28 w-full object-cover transition group-hover:scale-105" />
                      <span className="absolute inset-0 m-auto grid h-9 w-9 place-items-center rounded-full bg-white/94 text-viz-700 shadow-soft" aria-label={`Play ${candidate.name} intro video`}>
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>
                      <span className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-[11px] font-black text-emerald-700">{candidateMatch.score}%</span>
                    </div>
                    <div className="pt-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-black text-ink">{candidate.name}</h3>
                        <p className="truncate text-xs font-bold text-slate-500">{candidate.title}</p>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {candidate.topSkills.slice(0, 2).map((skill) => (
                          <span key={skill} className="rounded-full bg-viz-50 px-2 py-1 text-[11px] font-bold text-viz-700">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-28">
          <div className="glass rounded-3xl p-5">
            <h2 className="text-xl font-black text-ink">Recruiter confidence</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Human video context paired with resume credibility, work history, and trust signals.</p>
            {featured.candidate.id === boostedCandidateId && (
              <p className="mt-3 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-bold leading-6 text-viz-800">
                This application has priority visibility. Fit, experience, and team judgment still drive the hiring decision.
              </p>
            )}
            <div className="mt-4 rounded-2xl bg-viz-50 p-4">
              <p className="inline-flex items-center gap-2 text-sm font-black text-ink"><MessageSquare className="h-4 w-4 text-viz-700" /> First 15 seconds</p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-700">{featured.candidate.summary}</p>
            </div>
            <div className="mt-4 grid gap-2.5">
              <Link href={`/employer/candidates/${featured.candidate.id}?job=${job.id}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-midnight px-4 text-sm font-black text-white">
                <Eye className="h-4 w-4" /> View Full Profile
              </Link>
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-viz-100 bg-white px-4 text-sm font-black text-slate-600"><Download className="h-4 w-4" /> Resume</button>
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-viz-100 bg-white px-4 text-sm font-black text-slate-600"><Share2 className="h-4 w-4" /> Share Candidate</button>
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-viz-100 bg-white px-4 text-sm font-black text-slate-600"><Star className="h-4 w-4" /> Save Candidate</button>
            </div>
          </div>

          <div className="glass rounded-3xl p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-black text-ink"><Video className="h-5 w-5 text-viz-600" /> Job-specific video answers</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Answers submitted with this application for {job.title}.</p>
            <div className="mt-4 space-y-3">
              {job.videoQuestions.slice(0, 3).map((question, index) => (
                <Link
                  key={question}
                  href={`/employer/candidates/${featured.candidate.id}?job=${job.id}`}
                  className="flex gap-3 rounded-2xl bg-white p-3 shadow-soft transition hover:bg-viz-50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-viz-50 text-viz-700">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.14em] text-viz-600">Answer {index + 1}</span>
                    <span className="mt-1 block text-sm font-bold leading-5 text-slate-700">{question}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-black text-ink"><BriefcaseBusiness className="h-5 w-5 text-viz-600" /> Experience</h2>
            <p className="mt-2 text-sm font-bold text-slate-500">{featured.candidate.experience}</p>
            <div className="mt-5 space-y-4">
              {featured.candidate.experienceTimeline.map((item) => (
                <div key={`${item.role}-${item.company}`} className="relative border-l border-viz-100 pl-4">
                  <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-viz-600 shadow-soft" />
                  <p className="font-black text-ink">{item.role}</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">{item.company} · {item.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-black text-ink"><ShieldCheck className="h-5 w-5 text-viz-600" /> References</h2>
            <p className="mt-3 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-slate-700 shadow-soft">
              {featured.candidate.references} references and {featured.candidate.recommendations.length} recommendations available for this candidate.
            </p>
          </div>

          <div className="glass rounded-3xl p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-black text-ink"><FileText className="h-5 w-5 text-viz-600" /> Match reasons</h2>
            <div className="mt-4 space-y-2">
              {[...(match?.reasons ?? []), "Video intro completed", "References available"].slice(0, 5).map((reason) => (
                <p key={reason} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-soft">{reason}</p>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-5">
            <h2 className="inline-flex items-center gap-2 text-xl font-black text-ink"><MessageSquare className="h-5 w-5 text-viz-600" /> Notes</h2>
            <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-viz-100 bg-white p-4 text-sm outline-viz-500" placeholder="Capture first impressions, communication notes, or team feedback..." />
            <button className="mt-3 w-full rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700">Save note</button>
          </div>
        </aside>
      </section>
      <div className="fixed inset-x-0 bottom-[76px] z-30 grid grid-cols-3 gap-2 border-t border-viz-100 bg-white/95 p-3 shadow-glow backdrop-blur sm:hidden">
        <button className="min-h-12 rounded-xl bg-viz-700 px-3 text-xs font-black text-white">Interview</button>
        <button className="min-h-12 rounded-xl bg-viz-50 px-3 text-xs font-black text-viz-700">Next</button>
        <button className="min-h-12 rounded-xl border border-red-100 bg-red-50 px-3 text-xs font-black text-red-600">Pass</button>
      </div>
      </>
      )}
    </AppShell>
  );
}
