"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, BriefcaseBusiness, Filter, Mail, MapPin, Play, Search, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { candidates } from "@/data/demo";

const industries = ["Healthcare", "Engineering & Technical", "Hospitality", "Customer Service", "Leadership", "Operations", "Sales", "Retail", "Education", "Finance"];

const marketplaceByIndustry = {
  Healthcare: {
    label: "Healthcare talent",
    roles: "Nurse managers, clinic coordinators, medical assistants",
    candidates: [
      {
        id: "maya-johnson",
        name: "Amara Lewis",
        title: "Nurse Manager",
        location: "Phoenix, AZ",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Calm patient communication",
        references: 5,
        skills: ["Patient Care", "Team Leadership"]
      },
      {
        id: "sophia-martinez",
        name: "Priya Nair",
        title: "Clinic Coordinator",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Front-desk trust builder",
        references: 4,
        skills: ["Scheduling", "Patient Experience"]
      },
      {
        id: "derek-johnson",
        name: "Marcus Reed",
        title: "Medical Assistant",
        location: "Atlanta, GA",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Warm clinical presence",
        references: 3,
        skills: ["Vitals", "Care Support"]
      },
      {
        id: "ethan-miller",
        name: "Elena Torres",
        title: "Patient Services Lead",
        location: "San Diego, CA",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Clear under pressure",
        references: 6,
        skills: ["Intake", "Service Recovery"]
      },
      {
        id: "priya-patel",
        name: "Jordan Kim",
        title: "Clinic Operations Lead",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Organized care operations",
        references: 4,
        skills: ["Operations", "Compliance"]
      }
    ]
  },
  "Engineering & Technical": {
    label: "Engineering & technical",
    roles: "Software engineers, analysts, IT specialists, technical leads",
    candidates: [
      {
        id: "ethan-miller",
        name: "Jordan Price",
        title: "Software Engineer",
        location: "Seattle, WA",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Explains systems clearly",
        references: 3,
        skills: ["React", "APIs"]
      },
      {
        id: "sophia-martinez",
        name: "Nia Brooks",
        title: "Technical Lead",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Strong tradeoff clarity",
        references: 5,
        skills: ["Architecture", "Mentoring"]
      },
      {
        id: "maya-johnson",
        name: "Leo Chen",
        title: "Data Analyst",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Calm data storytelling",
        references: 4,
        skills: ["SQL", "Dashboards"]
      },
      {
        id: "derek-johnson",
        name: "Avery Patel",
        title: "IT Specialist",
        location: "Dallas, TX",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Patient support style",
        references: 2,
        skills: ["Systems", "Support"]
      },
      {
        id: "jordan-eagle",
        name: "Sam Rivera",
        title: "Solutions Architect",
        location: "Denver, CO",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Client-ready communicator",
        references: 5,
        skills: ["Cloud", "Discovery"]
      }
    ]
  },
  Hospitality: {
    label: "Hospitality talent",
    roles: "Restaurant managers, front desk leaders, guest experience professionals",
    candidates: [
      {
        id: "priya-patel",
        name: "Mina Flores",
        title: "Restaurant Manager",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Warm team leadership",
        references: 4,
        skills: ["Service", "Training"]
      },
      {
        id: "maya-johnson",
        name: "Chris Morgan",
        title: "Front Desk Supervisor",
        location: "Las Vegas, NV",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Guest-first presence",
        references: 3,
        skills: ["Guest Care", "Scheduling"]
      },
      {
        id: "derek-johnson",
        name: "Talia Brooks",
        title: "Guest Experience Lead",
        location: "Orlando, FL",
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "High-energy service presence",
        references: 4,
        skills: ["Guest Recovery", "Team Energy"]
      },
      {
        id: "jordan-eagle",
        name: "Noah Singh",
        title: "Hotel Operations Lead",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Polished guest communication",
        references: 5,
        skills: ["Operations", "Hospitality"]
      },
      {
        id: "ethan-miller",
        name: "Ari Coleman",
        title: "Event Services Manager",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Calm under pressure",
        references: 3,
        skills: ["Events", "Service"]
      }
    ]
  },
  "Customer Service": {
    label: "Customer service talent",
    roles: "Support leads, client success, front desk, and call center professionals",
    candidates: [
      {
        id: "derek-johnson",
        name: "Derek Johnson",
        title: "Customer Success Lead",
        location: "Atlanta, GA",
        image: candidates[3].video,
        signal: "Empathetic operator",
        references: 6,
        skills: ["Retention", "Coaching"]
      },
      {
        id: "ethan-miller",
        name: "Renee Carter",
        title: "Client Support Lead",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Patient problem solver",
        references: 5,
        skills: ["Support", "Escalations"]
      },
      {
        id: "maya-johnson",
        name: "Alina Park",
        title: "Patient Support Specialist",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Warm, clear tone",
        references: 4,
        skills: ["Empathy", "Resolution"]
      },
      {
        id: "priya-patel",
        name: "Mateo Cruz",
        title: "Client Services Lead",
        location: "Dallas, TX",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Trusted client presence",
        references: 3,
        skills: ["Client Care", "QBRs"]
      },
      {
        id: "sophia-martinez",
        name: "Grace Hill",
        title: "Front Desk Manager",
        location: "Denver, CO",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Professional first impression",
        references: 5,
        skills: ["Scheduling", "Service"]
      }
    ]
  },
  Leadership: {
    label: "Leadership talent",
    roles: "Managers, directors, team leads, and operators",
    candidates: [
      {
        id: "jordan-eagle",
        name: "Jordan Eagle",
        title: "Digital Strategy Manager",
        location: "Denver, CO",
        image: candidates[5].video,
        signal: "Calm executive presence",
        references: 3,
        skills: ["Strategy", "Stakeholders"]
      },
      {
        id: "priya-patel",
        name: "Priya Patel",
        title: "Product Marketing Lead",
        location: "Chicago, IL",
        image: candidates[4].video,
        signal: "Clear team alignment",
        references: 4,
        skills: ["Positioning", "Leadership"]
      },
      {
        id: "maya-johnson",
        name: "Maya Johnson",
        title: "Senior Marketing Manager",
        location: "New York, NY",
        image: candidates[0].video,
        signal: "Thoughtful growth leader",
        references: 4,
        skills: ["Growth", "Team Trust"]
      },
      {
        id: "derek-johnson",
        name: "Derek Johnson",
        title: "Customer Experience Manager",
        location: "Atlanta, GA",
        image: candidates[3].video,
        signal: "Empathetic team coach",
        references: 6,
        skills: ["Coaching", "Retention"]
      },
      {
        id: "sophia-martinez",
        name: "Sophia Martinez",
        title: "Research Program Lead",
        location: "San Diego, CA",
        image: candidates[2].video,
        signal: "Strong decision clarity",
        references: 5,
        skills: ["Research Ops", "Influence"]
      }
    ]
  },
  Sales: {
    label: "Sales talent",
    roles: "Account executives, SDRs, account managers, and revenue leaders",
    candidates: [
      {
        id: "ethan-miller",
        name: "Caleb Wright",
        title: "Account Executive",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Confident first pitch",
        references: 4,
        skills: ["Discovery", "Closing"]
      },
      {
        id: "maya-johnson",
        name: "Sofia Ramirez",
        title: "SDR Team Lead",
        location: "Phoenix, AZ",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "High-trust outreach style",
        references: 3,
        skills: ["Outbound", "Coaching"]
      },
      {
        id: "derek-johnson",
        name: "Evan Stone",
        title: "Account Manager",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Steady customer presence",
        references: 5,
        skills: ["Renewals", "Relationships"]
      },
      {
        id: "priya-patel",
        name: "Lena Brooks",
        title: "Sales Manager",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Clear revenue leadership",
        references: 4,
        skills: ["Pipeline", "Enablement"]
      },
      {
        id: "sophia-martinez",
        name: "Andre Lewis",
        title: "Business Development Rep",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Strong discovery questions",
        references: 2,
        skills: ["Prospecting", "Listening"]
      }
    ]
  },
  Operations: {
    label: "Operations talent",
    roles: "Operations leads, coordinators, and process-minded managers",
    candidates: [
      {
        id: "ethan-miller",
        name: "Ethan Miller",
        title: "Revenue Operations Analyst",
        location: "Austin, TX",
        image: candidates[1].video,
        signal: "Makes process feel clear",
        references: 3,
        skills: ["Forecasting", "Dashboards"]
      },
      {
        id: "priya-patel",
        name: "Jordan Kim",
        title: "Clinic Operations Lead",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Organized operating rhythm",
        references: 4,
        skills: ["Operations", "Compliance"]
      },
      {
        id: "derek-johnson",
        name: "Owen Blake",
        title: "Retail Operations Lead",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Reliable floor leader",
        references: 3,
        skills: ["Training", "Scheduling"]
      },
      {
        id: "maya-johnson",
        name: "Mina Flores",
        title: "Restaurant Operations Manager",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Service-minded operator",
        references: 4,
        skills: ["Service", "Process"]
      },
      {
        id: "jordan-eagle",
        name: "Noah Singh",
        title: "Hotel Operations Lead",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Polished operations presence",
        references: 5,
        skills: ["Hospitality", "Quality"]
      }
    ]
  },
  Retail: {
    label: "Retail talent",
    roles: "Store managers, sales associates, shift leads, and operations supervisors",
    candidates: [
      {
        id: "sophia-martinez",
        name: "Owen Blake",
        title: "Retail Operations Lead",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Reliable floor leader",
        references: 3,
        skills: ["Operations", "Training"]
      },
      {
        id: "maya-johnson",
        name: "Jada Cole",
        title: "Store Manager",
        location: "Atlanta, GA",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Warm customer presence",
        references: 5,
        skills: ["Sales Floor", "Coaching"]
      },
      {
        id: "ethan-miller",
        name: "Tyler Stone",
        title: "Shift Supervisor",
        location: "Dallas, TX",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Calm team direction",
        references: 2,
        skills: ["Scheduling", "Service"]
      },
      {
        id: "derek-johnson",
        name: "Lena Brooks",
        title: "Customer Experience Lead",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Clear guest recovery",
        references: 4,
        skills: ["Service", "Merchandising"]
      },
      {
        id: "priya-patel",
        name: "Chris Morgan",
        title: "Sales Floor Lead",
        location: "Las Vegas, NV",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Confident customer support",
        references: 3,
        skills: ["Sales", "Teamwork"]
      }
    ]
  },
  Education: {
    label: "Education talent",
    roles: "Teachers, tutors, administrators, and program coordinators",
    candidates: [
      {
        id: "sophia-martinez",
        name: "Sophia Martinez",
        title: "Program Coordinator",
        location: "San Diego, CA",
        image: candidates[2].video,
        signal: "Patient explanation style",
        references: 5,
        skills: ["Research", "Facilitation"]
      },
      {
        id: "maya-johnson",
        name: "Elena Torres",
        title: "Learning Coordinator",
        location: "San Diego, CA",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Clear learner support",
        references: 6,
        skills: ["Programs", "Communication"]
      },
      {
        id: "derek-johnson",
        name: "Andre Lewis",
        title: "Career Coach",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Encouraging presence",
        references: 2,
        skills: ["Coaching", "Advising"]
      },
      {
        id: "ethan-miller",
        name: "Priya Nair",
        title: "School Administrator",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Organized family communication",
        references: 4,
        skills: ["Admin", "Scheduling"]
      },
      {
        id: "jordan-eagle",
        name: "Caleb Wright",
        title: "Training Specialist",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Explains ideas simply",
        references: 4,
        skills: ["Training", "Enablement"]
      }
    ]
  },
  Finance: {
    label: "Finance talent",
    roles: "Analysts, operations specialists, and finance managers",
    candidates: [
      {
        id: "ethan-miller",
        name: "Ethan Miller",
        title: "Finance Analyst",
        location: "Austin, TX",
        image: candidates[1].video,
        signal: "Calm data storytelling",
        references: 3,
        skills: ["Forecasting", "SQL"]
      },
      {
        id: "maya-johnson",
        name: "Leo Chen",
        title: "Business Analyst",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Clear financial context",
        references: 4,
        skills: ["Dashboards", "Analysis"]
      },
      {
        id: "priya-patel",
        name: "Avery Patel",
        title: "Operations Analyst",
        location: "Dallas, TX",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Steady detail orientation",
        references: 2,
        skills: ["Reporting", "Systems"]
      },
      {
        id: "jordan-eagle",
        name: "Sam Rivera",
        title: "FP&A Associate",
        location: "Denver, CO",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Executive-ready summaries",
        references: 5,
        skills: ["Planning", "Models"]
      },
      {
        id: "derek-johnson",
        name: "Grace Hill",
        title: "Client Finance Coordinator",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&w=700&q=85",
        signal: "Client-friendly clarity",
        references: 5,
        skills: ["Billing", "Support"]
      }
    ]
  }
};

type MarketplaceCandidate = (typeof marketplaceByIndustry)["Healthcare"]["candidates"][number];
type Industry = keyof typeof marketplaceByIndustry;

function InventoryCandidateCard({ candidate }: { candidate: MarketplaceCandidate }) {
  return (
    <Link href={`/employer/candidates/${candidate.id}`} className="group block overflow-hidden rounded-2xl border border-viz-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-viz-200 hover:shadow-glow">
      <div className="relative overflow-hidden">
        <img src={candidate.image} alt={`${candidate.name} intro`} className="h-32 w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-2 top-2 rounded-full bg-white/94 px-2.5 py-1 text-[11px] font-black text-emerald-700">Active</span>
        <span className="absolute inset-0 m-auto grid h-10 w-10 place-items-center rounded-full bg-white/94 text-viz-700 shadow-soft">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-black text-ink">{candidate.name}</h3>
            <p className="mt-0.5 truncate text-xs font-bold text-slate-500">{candidate.title}</p>
          </div>
          <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-viz-50 text-viz-700" aria-label={`Save ${candidate.name}`}>
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-slate-500">
          <MapPin className="h-3.5 w-3.5" /> {candidate.location}
        </p>
        <p className="mt-3 line-clamp-1 text-xs font-black text-viz-700">{candidate.signal}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {candidate.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-viz-50 px-2.5 py-1 text-[11px] font-black text-viz-700">{skill}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-viz-50 pt-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-black text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> {candidate.references} refs
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-black text-viz-700">
            Review <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CandidateBrowsePage() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("Healthcare");
  const [isSwitching, setIsSwitching] = useState(false);
  const activeLane = marketplaceByIndustry[selectedIndustry];

  useEffect(() => {
    const saved = window.localStorage.getItem("vizhire-employer-industries");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as string[];
      const preferredIndustry = parsed.find((industry): industry is Industry => industry in marketplaceByIndustry);
      if (preferredIndustry) setSelectedIndustry(preferredIndustry);
    } catch {
      window.localStorage.removeItem("vizhire-employer-industries");
    }
  }, []);

  const handleIndustrySelect = (industry: Industry) => {
    if (industry === selectedIndustry) return;

    const currentScroll = window.scrollY;
    setIsSwitching(true);
    setSelectedIndustry(industry);
    window.localStorage.setItem("vizhire-employer-industries", JSON.stringify([industry]));
    window.requestAnimationFrame(() => {
      window.scrollTo(0, currentScroll);
      window.setTimeout(() => window.scrollTo(0, currentScroll), 0);
      window.setTimeout(() => window.scrollTo(0, currentScroll), 80);
      window.setTimeout(() => window.scrollTo(0, currentScroll), 180);
      window.setTimeout(() => setIsSwitching(false), 220);
    });
  };

  return (
    <AppShell title="Browse Candidates" subtitle="Explore available professionals, save promising people, and open deeper review when someone stands out.">
      <div className="space-y-5 [overflow-anchor:none]">
        <section className="rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-5 text-white shadow-glow sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Talent inventory</p>
              <h1 className="mt-2 text-balance text-3xl font-black leading-tight sm:text-4xl">Explore real video-first candidates.</h1>
              <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-white/72">
                Browse available professionals, watch intros, save candidates, and reach out when someone feels right.
              </p>
            </div>
            <Link href="/employer/post-job" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-viz-800">
              <BriefcaseBusiness className="h-4 w-4" /> Post a job
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-viz-100 bg-white p-3 shadow-soft">
          <div className="grid gap-3 xl:grid-cols-[1fr_auto] xl:items-center">
            <label className="flex min-h-13 items-center gap-3 rounded-2xl bg-[#fbfafc] px-4">
              <Search className="h-5 w-5 text-slate-400" />
              <input className="w-full border-0 bg-transparent text-sm font-bold outline-none" placeholder="Search by role, skill, industry, location, or name..." />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1 xl:pb-0">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleIndustrySelect(industry as Industry)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black transition ${
                    selectedIndustry === industry ? "bg-viz-700 text-white shadow-soft" : "bg-white text-viz-700 ring-1 ring-viz-100 hover:bg-viz-50"
                  }`}
                >
                  {industry}
                </button>
              ))}
              <button onMouseDown={(event) => event.preventDefault()} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-black text-viz-700 ring-1 ring-viz-100 transition hover:bg-viz-50">
                <Filter className="h-3.5 w-3.5" /> More filters
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className={`min-h-[760px] rounded-3xl border border-viz-100 bg-white p-4 shadow-soft transition-opacity duration-200 sm:p-5 xl:min-h-[430px] ${isSwitching ? "opacity-70" : "opacity-100"}`}>
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">{activeLane.label}</h2>
                <p className="mt-1 text-sm font-bold text-slate-500">{activeLane.roles}</p>
              </div>
              <Link href="/employer/post-job" className="inline-flex items-center gap-1 text-sm font-black text-viz-700">
                Create sourcing list <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {activeLane.candidates.map((candidate) => (
                <InventoryCandidateCard key={`${activeLane.label}-${candidate.name}`} candidate={candidate} />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-viz-100 bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-ink">Found someone promising?</h2>
              <p className="mt-1 text-sm font-bold text-slate-500">Save candidates now, then open a role when you are ready for focused matching.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/employer/post-job" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white shadow-glow">
                Open a role <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="mailto:?subject=VizHire candidate" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700">
                <Mail className="h-4 w-4" /> Share search
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
