import Link from "next/link";
import { BriefcaseBusiness, Download, Edit3, Link2, Mail, MapPin, MessageCircle, ShieldCheck, Star, Video } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ComingSoonButton } from "@/components/coming-soon";
import { candidates } from "@/data/demo";
import { VideoFrame } from "@/components/ui";
import { ShareActions } from "@/components/share-actions";

const candidate = candidates[0];

export default function CandidateProfilePage() {
  return (
    <main className="min-h-screen bg-[#fbfafc]">
      <header className="border-b border-viz-100 bg-white/88 px-4 py-4 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <BrandLogo />
          <div className="flex gap-2">
            <Link href="/candidate/edit" className="inline-flex items-center gap-2 rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700 shadow-soft">
              <Edit3 className="h-4 w-4" /> Edit
            </Link>
            <Link href="mailto:?subject=VizHire profile inquiry" className="hidden items-center gap-2 rounded-xl bg-viz-700 px-4 py-3 text-sm font-black text-white sm:inline-flex">
              <Mail className="h-4 w-4" /> Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="space-y-6">
          <div className="glass rounded-3xl p-5 sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
              <img src={candidate.avatar} alt={candidate.name} className="vh-candidate-thumb h-32 w-32 rounded-3xl shadow-soft" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Public VizHire Profile</p>
                <h1 className="mt-2 text-4xl font-black text-ink sm:text-6xl">{candidate.name}</h1>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
                  <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {candidate.desiredRole}</span>
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-viz-600" /> {candidate.location}</span>
                  <span className="inline-flex items-center gap-2"><Video className="h-4 w-4 text-viz-600" /> 30-sec intro</span>
                </div>
              </div>
            </div>
          </div>

          <VideoFrame image={candidate.video} name={candidate.name} title={candidate.title} match={candidate.match} />

          <section className="grid gap-4 md:grid-cols-3">
            {[
              ["Communication", "Clear, calm, and executive-ready"],
              ["Expertise", candidate.summary],
              ["Trust", `${candidate.references} references and resume-backed work history`]
            ].map(([label, text], index) => (
              <div key={label} className="glass rounded-2xl p-5">
                {index === 0 ? <MessageCircle className="h-6 w-6 text-viz-600" /> : <ShieldCheck className="h-6 w-6 text-viz-600" />}
                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-viz-600">{label}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-black text-ink">About</h2>
              <p className="mt-4 leading-8 text-slate-600">{candidate.about}</p>
            </section>
            <section className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-black text-ink">Top 5 Skills</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">The key skills Maya wants employers to see first.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {candidate.topSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{skill}</span>
                ))}
              </div>
            </section>
          </div>

          <section className="glass rounded-2xl p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">Experience</h2>
                <p className="mt-2 text-sm font-bold text-slate-500">{candidate.experience}</p>
              </div>
              <span className="text-sm font-black text-viz-700">Resume-backed work history</span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {candidate.experienceTimeline.map((item) => (
                <div key={`${item.role}-${item.company}`} className="rounded-2xl border border-viz-100 bg-white p-5 shadow-soft">
                  <p className="font-black text-ink">{item.role}</p>
                  <p className="mt-2 text-sm font-bold text-slate-500">{item.company} · {item.duration}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              ["Education", candidate.education],
              ["Availability", candidate.availability]
            ].map(([label, value]) => (
              <section key={label} className="glass rounded-2xl p-6">
                <h2 className="font-black text-ink">{label}</h2>
                <p className="mt-3 leading-7 text-slate-600">{value}</p>
              </section>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <ShareActions
            title="Maya Johnson on VizHire"
            url="/profile/maya-johnson"
            name={candidate.name}
            role={candidate.title}
            image={candidate.video}
            trustStatement="Maya's VizHire profile shows her intro video, work history, communication style, references, and professional story in one polished link."
          />
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black">Profile actions</h2>
            <div className="mt-5 space-y-3">
              <Link href="mailto:?subject=VizHire profile inquiry" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 py-3 font-black text-white"><Mail className="h-4 w-4" /> Contact Candidate</Link>
              <ComingSoonButton className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 py-3 font-black text-viz-700" title="Resume preview" message="Resume file previews are coming soon. The public profile already shows resume-backed work history."><Download className="h-4 w-4" /> View Resume</ComingSoonButton>
              <ComingSoonButton className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 py-3 font-black text-viz-700" title="Link copied" message="Copy-to-clipboard feedback is coming soon. Use the share panel above for profile sharing options."><Link2 className="h-4 w-4" /> Copy Link</ComingSoonButton>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black">References & Recommendations</h2>
            <div className="mt-4 space-y-4">
              {candidate.recommendations.map((text) => (
                <blockquote key={text} className="rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600 shadow-soft">
                  <Star className="mb-3 h-5 w-5 fill-viz-600 text-viz-600" />
                  “{text}”
                </blockquote>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black">Portfolio</h2>
            <div className="mt-4 space-y-3">
              {candidate.portfolio.map((item) => (
                <ComingSoonButton key={item} className="block w-full rounded-xl bg-viz-50 px-4 py-3 text-left text-sm font-black text-viz-700" title="Portfolio preview" message="Portfolio links are sample placeholders in this preview. Full portfolio linking is coming soon.">{item}</ComingSoonButton>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
