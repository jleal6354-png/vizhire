import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, Download, Mail, MapPin, MessageSquare, Share2, Star } from "lucide-react";
import { candidates, getCandidateMatch, jobs } from "@/data/demo";
import { AppShell } from "@/components/app-shell";
import { ComingSoonButton } from "@/components/coming-soon";
import { VideoFrame } from "@/components/ui";
import { ShareActions } from "@/components/share-actions";

export function generateStaticParams() {
  return candidates.map((candidate) => ({ id: candidate.id }));
}

export default async function EmployerCandidateDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ job?: string }>;
}) {
  const { id } = await params;
  const query = searchParams ? await searchParams : {};
  const candidate = candidates.find((item) => item.id === id) ?? candidates[0];
  const job = jobs.find((item) => item.id === query.job) ?? jobs[0];
  const match = getCandidateMatch(candidate, job);

  return (
    <AppShell title={candidate.name} subtitle="Candidate detail view with notes, references, and decision context.">
      <Link href={query.job ? `/employer/jobs/${query.job}` : "/employer/candidates"} className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> {query.job ? `Back to ${job.title}` : "Back to search"}
      </Link>
      <div className="grid gap-6 xl:grid-cols-[0.68fr_0.32fr]">
        <section className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr_auto]">
              <img src={candidate.avatar} alt={candidate.name} className="vh-candidate-thumb h-24 w-24 rounded-3xl" />
              <div>
                <h1 className="text-4xl font-black text-ink">{candidate.name}</h1>
                <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
                  <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {candidate.desiredRole}</span>
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-viz-600" /> {candidate.location}</span>
                  <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-viz-600" /> {match.score}% match for {job.title}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`mailto:?subject=${encodeURIComponent(`VizHire candidate: ${candidate.name}`)}&body=${encodeURIComponent(`Review ${candidate.name}: /employer/candidates/${candidate.id}?job=${job.id}`)}`} className="rounded-xl border border-viz-200 bg-white p-3 text-viz-700" aria-label={`Share ${candidate.name}`}>
                  <Share2 className="h-5 w-5" />
                </Link>
                <Link href={`/employer/jobs/${job.id}/review?stage=Shortlisted`} className="rounded-xl bg-viz-700 px-4 py-3 text-sm font-black text-white">Shortlist</Link>
              </div>
            </div>
          </div>
          <section className="glass rounded-2xl p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">{match.label} for {job.title}</h2>
                <p className="mt-1 text-slate-600">Matching foundation uses Top 5 Skills, desired role, location, job description, required skills, and work type.</p>
              </div>
              <span className="h-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">{match.score}% match</span>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-3">
              {[...match.reasons, "Video intro completed", "References available"].map((reason) => (
                <p key={reason} className="rounded-xl bg-viz-50 px-3 py-2 text-sm font-bold text-viz-700">{reason}</p>
              ))}
            </div>
          </section>
          <VideoFrame image={candidate.video} name={candidate.name} title={candidate.title} match={candidate.match} />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-black text-ink">About</h2>
              <p className="mt-4 leading-8 text-slate-600">{candidate.about}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-black text-ink">Top 5 Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {candidate.topSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <section id="resume" className="glass scroll-mt-24 rounded-2xl p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">Experience</h2>
                <p className="mt-2 text-sm font-bold text-slate-500">{candidate.experience}</p>
              </div>
              <ComingSoonButton className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700" title="Resume preview" message="Resume file previews are coming soon. The experience section below shows the extracted resume history for now.">
                <Download className="h-4 w-4" /> View Resume
              </ComingSoonButton>
            </div>
            <div className="mt-6 space-y-4">
              {candidate.experienceTimeline.map((item) => (
                <div key={`${item.role}-${item.company}`} className="relative border-l border-viz-100 pl-5">
                  <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-viz-600 shadow-soft" />
                  <p className="font-black text-ink">{item.role}</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">{item.company} · {item.duration}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
        <aside className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-ink">Recruiter actions</h2>
            <div className="mt-5 space-y-3">
              <Link href={`mailto:?subject=${encodeURIComponent(`VizHire candidate outreach: ${candidate.name}`)}`} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 py-3 font-black text-white"><Mail className="h-4 w-4" /> Contact Candidate</Link>
              <a href="#resume" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 py-3 font-black text-viz-700"><Download className="h-4 w-4" /> View Resume</a>
            </div>
          </div>
          <ShareActions
            employerMode
            label="Share Candidate"
            title={`${candidate.name} on VizHire`}
            url={`/employer/candidates/${candidate.id}`}
          />
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-ink">Notes</h2>
            <textarea className="mt-4 min-h-36 w-full rounded-xl border border-slate-200 bg-white p-4 outline-viz-500" placeholder="Add private hiring team notes..." />
            <ComingSoonButton className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-viz-300 px-4 py-3 font-black text-viz-700" title="Note saved" message="Persistent hiring notes are coming soon. This will save private feedback for your hiring team.">
              <MessageSquare className="h-4 w-4" /> Save note
            </ComingSoonButton>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-ink">References & Recommendations</h2>
            <div className="mt-4 space-y-3">
              {candidate.recommendations.map((item) => (
                <p key={item} className="rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600 shadow-soft">“{item}”</p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
