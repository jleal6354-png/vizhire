"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, BriefcaseBusiness, Building2, MapPin, Search, Sparkles, Video } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { candidates, jobs } from "@/data/demo";

const candidate = candidates[0];

const interestChips = ["Marketing", "Healthcare", "Remote", "Customer-facing", "Growth", "Operations"];

const quickFilters = ["Recently posted", "Remote-friendly", "Healthcare", "Growth", "Customer-facing", "Adjacent paths"];

const opportunityRows = [
  { category: "Healthcare", label: "Featured Opportunity", note: "Roles close to your current profile interests.", job: jobs[0], signal: "Clear communication, customer insight, and visible growth impact", promoted: true, promotionTier: "Priority Visibility" },
  { category: "Growth", label: "Growth path", note: "Marketing work with visible business impact.", job: jobs[0], signal: "Lifecycle strategy, customer research, and growth storytelling" },
  { category: "Remote-friendly", label: "Remote-friendly", note: "Flexible teams where presentation and clarity still matter.", job: jobs[0], signal: "Remote team, strong storytelling expectations, healthcare context" },
  { category: "Recently posted", label: "Recently posted", note: "Fresh opportunity with clear expectations.", job: jobs[1], signal: "Hybrid team, data clarity, revenue process ownership" },
  { category: "Customer-facing", label: "Customer-facing", note: "A structured role that supports revenue and customer clarity.", job: jobs[1], signal: "Turns complex operating signals into clear team decisions" },
  { category: "Adjacent paths", label: "Adjacent path", note: "A human-insight role with strong transferable overlap.", job: jobs[2], signal: "Research, empathy, and professional explanation matter early" }
];

const discoveryLanes = [
  {
    title: "Opportunity lanes",
    text: "Browse fast, compare quickly, then open the roles that feel worth your time.",
    items: ["Healthcare growth", "Remote teams", "Customer insight", "Marketing operations"]
  },
  {
    title: "Transferable paths",
    text: "When exact matches are limited, VizHire keeps momentum with adjacent opportunities.",
    items: ["Communications Manager", "Brand Support Lead", "Customer Engagement", "Growth Operations"]
  }
];

function JobRow({ row }: { row: (typeof opportunityRows)[number] }) {
  const { job } = row;
  const company = job.hideCompanyName ? "Company private" : job.company;
  const isPromoted = "promoted" in row && row.promoted;

  return (
    <article className={`group rounded-2xl border bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-viz-200 hover:shadow-glow sm:p-5 ${
      isPromoted ? "border-viz-300 ring-1 ring-viz-100" : "border-viz-100"
    }`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{row.label}</span>
            {isPromoted && <span className="rounded-full bg-gradient-to-r from-viz-700 to-viz-500 px-3 py-1 text-xs font-black text-white">{row.promotionTier}</span>}
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Open</span>
            <span className="text-xs font-bold text-slate-400">{job.posted}</span>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-black leading-tight text-ink">{job.title}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold text-slate-500">
                <span className="inline-flex items-center gap-1.5"><Building2 className="h-4 w-4" /> {company}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness className="h-4 w-4" /> {job.workType}</span>
                {job.showSalary && <span>{job.salaryRange}</span>}
              </div>
            </div>
            <button type="button" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-viz-100 bg-white text-viz-700 transition hover:bg-viz-50" aria-label={`Save ${job.title}`}>
              <Bookmark className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-3 max-w-4xl text-sm font-bold leading-6 text-slate-600">{row.signal}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {job.requiredSkills.slice(0, 3).map((skill) => (
              <span key={`${job.id}-${skill}`} className="rounded-full bg-[#fbfafc] px-3 py-1 text-xs font-black text-slate-600">
                {skill}
              </span>
            ))}
            <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-viz-700 shadow-soft">Human-fit context</span>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
          <Link href={`/candidate/jobs/${job.id}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
            Review role <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={`/candidate/jobs/${job.id}`} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-viz-200 bg-white px-5 text-sm font-black text-viz-700 transition hover:bg-viz-50">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function CandidateJobsPage() {
  const [selectedFilter, setSelectedFilter] = useState("Recently posted");
  const [isSwitching, setIsSwitching] = useState(false);
  const handleFilterSelect = (filter: string) => {
    if (filter === selectedFilter) return;

    const currentScroll = window.scrollY;
    setIsSwitching(true);
    setSelectedFilter(filter);
    window.requestAnimationFrame(() => {
      window.scrollTo(0, currentScroll);
      window.setTimeout(() => window.scrollTo(0, currentScroll), 0);
      window.setTimeout(() => window.scrollTo(0, currentScroll), 80);
      window.setTimeout(() => window.scrollTo(0, currentScroll), 180);
      window.setTimeout(() => setIsSwitching(false), 220);
    });
  };
  const visibleRows = selectedFilter === "Recently posted"
    ? opportunityRows
    : opportunityRows.filter((row) => row.category === selectedFilter);

  return (
    <AppShell role="candidate" title="Browse Jobs" subtitle="Find opportunities quickly, then open the roles that feel worth pursuing.">
      <div className="space-y-5 [overflow-anchor:none]">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-5 text-white shadow-glow sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Opportunity discovery</p>
              <h1 className="mt-3 max-w-4xl text-balance text-4xl font-black leading-tight sm:text-5xl">
                Real roles you can scan fast and pursue with confidence.
              </h1>
              <p className="mt-4 max-w-2xl leading-7 text-white/74">
                Browse with the speed of a familiar job board, with human context that helps you understand team fit before applying.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-black text-viz-100">Profile direction</p>
              <h2 className="mt-2 text-2xl font-black">{candidate.desiredRole}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {interestChips.map((interest) => (
                  <span key={interest} className="rounded-full bg-white/12 px-3 py-1 text-xs font-black text-white/82">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-viz-100 bg-white p-3 shadow-soft">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex min-h-13 items-center gap-3 rounded-2xl bg-[#fbfafc] px-4">
              <Search className="h-5 w-5 text-slate-400" />
              <input className="w-full border-0 bg-transparent text-sm font-bold outline-none" placeholder="Search roles, companies, industries, or skills..." />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {quickFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleFilterSelect(filter)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black transition ${
                    selectedFilter === filter ? "bg-viz-700 text-white shadow-soft" : "bg-white text-viz-700 ring-1 ring-viz-100 hover:bg-viz-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_0.34fr]">
          <div className={`min-h-[980px] space-y-3 transition-opacity duration-200 ${isSwitching ? "opacity-70" : "opacity-100"}`}>
            {selectedFilter === "Recently posted" && (
              <section className="rounded-[2rem] border border-viz-200 bg-[radial-gradient(circle_at_0%_0%,rgba(109,59,255,0.12),transparent_32%),linear-gradient(180deg,#ffffff,#fbfaff)] p-5 shadow-soft">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Featured opportunities</p>
                    <h2 className="mt-2 text-2xl font-black text-ink">{jobs[0].title}</h2>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
                      Priority visibility for candidates exploring healthcare growth and remote-friendly roles.
                    </p>
                  </div>
                  <Link href={`/candidate/jobs/${jobs[0].id}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow">
                    Review featured role <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            )}
            <div className="flex items-end justify-between gap-3 px-1">
              <div>
                <h2 className="text-2xl font-black text-ink">Recommended to explore</h2>
                <p className="mt-1 text-sm font-bold text-slate-500">Open the full role before applying with your VizHire profile.</p>
              </div>
              <span className="hidden rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700 sm:inline-flex">{visibleRows.length} roles</span>
            </div>
            {visibleRows.map((row, index) => (
              <JobRow key={`${row.job.id}-${row.label}-${index}`} row={row} />
            ))}
          </div>

          <aside className="space-y-4">
            {discoveryLanes.map((lane) => (
              <div key={lane.title} className="rounded-3xl border border-viz-100 bg-white p-5 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                  {lane.title === "Opportunity lanes" ? <Video className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 text-xl font-black text-ink">{lane.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{lane.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lane.items.map((item) => (
                    <span key={item} className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </aside>
        </section>
      </div>
    </AppShell>
  );
}
