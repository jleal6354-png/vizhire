import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video
} from "lucide-react";

export const brand = {
  name: "VizHire",
  tagline: "Beyond the resume.",
  headline: "Hiring should feel human again.",
  gradient: "from-viz-600 via-viz-500 to-[#8f46ff]"
};

export const candidates = [
  {
    id: "maya-johnson",
    name: "Maya Johnson",
    title: "Marketing Strategist",
    desiredRole: "Growth Marketing Manager",
    location: "New York, NY",
    match: 96,
    availability: "Available in 2 weeks",
    salary: "$105k - $125k",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&facepad=5&w=900&q=85",
    video:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&facepad=5&w=1400&q=88",
    summary:
      "A thoughtful growth marketer who blends brand storytelling, lifecycle strategy, and calm executive communication.",
    about:
      "I help teams turn customer insight into clear growth stories. My best work happens with collaborative leaders who care about trust, experimentation, and a customer experience that feels genuinely useful.",
    skills: ["Strategy", "Branding", "Lifecycle", "Customer Research", "Analytics"],
    topSkills: ["Growth Strategy", "Brand Storytelling", "Lifecycle Marketing", "Customer Research", "Analytics"],
    workPreferences: ["Remote", "Hybrid"],
    experience: "7 years across SaaS, marketplace, and consumer growth teams",
    experienceTimeline: [
      { role: "Senior Marketing Manager", company: "HubSpot", duration: "3 years" },
      { role: "Growth Strategist", company: "Salesforce", duration: "2 years" },
      { role: "Marketing Coordinator", company: "Shopify", duration: "2 years" }
    ],
    education: "B.A. Marketing, NYU",
    certifications: ["Google Analytics", "HubSpot Inbound", "Product Marketing Core"],
    portfolio: ["mayajohnson.com", "Growth teardown library", "Campaign case studies"],
    recommendations: [
      "Maya is the rare marketer who can simplify noisy problems and bring the whole room with her.",
      "Her video intro matched exactly how she showed up in interviews: prepared, warm, and precise."
    ],
    references: 4
  },
  {
    id: "ethan-miller",
    name: "Ethan Miller",
    title: "Business Analyst",
    desiredRole: "Revenue Operations Analyst",
    location: "Austin, TX",
    match: 92,
    availability: "Immediate",
    salary: "$88k - $104k",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&facepad=5&w=900&q=85",
    video:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&facepad=5&w=1400&q=88",
    summary:
      "Analytical, steady, and strong at explaining complex revenue patterns to non-technical teams.",
    about:
      "I love finding the friction hiding inside a process and turning it into a clear operating rhythm.",
    skills: ["SQL", "Revenue Ops", "Forecasting", "Dashboards", "Salesforce"],
    topSkills: ["SQL", "Revenue Ops", "Forecasting", "Dashboards", "Salesforce"],
    workPreferences: ["Remote", "On-site", "Hybrid"],
    experience: "5 years supporting sales and customer success teams",
    experienceTimeline: [
      { role: "Revenue Operations Analyst", company: "Stripe", duration: "2 years" },
      { role: "Sales Operations Specialist", company: "Dropbox", duration: "2 years" },
      { role: "Finance Analyst", company: "Austin Capital", duration: "1 year" }
    ],
    education: "B.S. Finance, UT Austin",
    certifications: ["Salesforce Admin", "dbt Fundamentals"],
    portfolio: ["Revenue dashboard sample", "Pipeline quality audit"],
    recommendations: ["Ethan makes data feel calm, credible, and actionable."],
    references: 3
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    title: "UX Researcher",
    desiredRole: "Senior UX Researcher",
    location: "San Diego, CA",
    match: 90,
    availability: "Open to interviews",
    salary: "$115k - $135k",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&facepad=5&w=900&q=85",
    video:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&facepad=5&w=1400&q=88",
    summary:
      "A curious researcher with a gift for surfacing the human reason behind product behavior.",
    about:
      "I build research programs that help product teams make sharper decisions without losing empathy.",
    skills: ["User Interviews", "Research Ops", "Figma", "Journey Maps", "Synthesis"],
    topSkills: ["User Interviews", "Research Ops", "Figma", "Journey Mapping", "Research Synthesis"],
    workPreferences: ["Remote", "Hybrid", "Flexible"],
    experience: "6 years in fintech and health tech",
    experienceTimeline: [
      { role: "Senior UX Researcher", company: "Teladoc Health", duration: "2 years" },
      { role: "UX Researcher", company: "Intuit", duration: "3 years" },
      { role: "Research Coordinator", company: "ASU Design Lab", duration: "1 year" }
    ],
    education: "M.S. Human Factors, ASU",
    certifications: ["NN/g UX Certification"],
    portfolio: ["Research repository model", "Insight sprint examples"],
    recommendations: ["Sophia helped our team stop guessing and start listening."],
    references: 5
  },
  {
    id: "derek-johnson",
    name: "Derek Johnson",
    title: "Customer Success Lead",
    desiredRole: "Customer Experience Manager",
    location: "Atlanta, GA",
    match: 88,
    availability: "30 days",
    salary: "$92k - $108k",
    avatar:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&crop=faces&facepad=5&w=900&q=85",
    video:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&crop=faces&facepad=5&w=1400&q=88",
    summary:
      "Empathetic operator who improves retention by making customer conversations more structured and useful.",
    about:
      "I believe customer success is a trust discipline. I build systems that make every promise easier to keep.",
    skills: ["Retention", "Enablement", "QBRs", "Onboarding", "Team Coaching"],
    topSkills: ["Customer Retention", "Team Coaching", "Onboarding", "QBRs", "Enablement"],
    workPreferences: ["Hybrid", "Travel required"],
    experience: "8 years leading post-sale teams",
    experienceTimeline: [
      { role: "Customer Success Lead", company: "Zendesk", duration: "3 years" },
      { role: "Senior CSM", company: "Intercom", duration: "3 years" },
      { role: "Onboarding Specialist", company: "Mailchimp", duration: "2 years" }
    ],
    education: "B.S. Communications, Georgia State",
    certifications: ["Gainsight NXT", "Customer Success Leadership"],
    portfolio: ["Onboarding playbook", "Renewal save plan"],
    recommendations: ["Derek brings warmth and operating discipline in equal measure."],
    references: 6
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    title: "Product Marketing Lead",
    desiredRole: "Growth Marketing Manager",
    location: "Chicago, IL",
    match: 91,
    availability: "Open to interviews",
    salary: "$108k - $128k",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&crop=faces&facepad=5&w=900&q=85",
    video:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&crop=faces&facepad=5&w=1400&q=88",
    summary:
      "A composed storyteller who connects product value, customer insight, and campaign strategy with clarity.",
    about:
      "I help teams explain why their product matters and turn customer learning into confident go-to-market motion.",
    skills: ["Positioning", "Customer Research", "Launch Strategy", "Messaging", "Analytics"],
    topSkills: ["Positioning", "Customer Research", "Launch Strategy", "Messaging", "Analytics"],
    workPreferences: ["Remote", "Hybrid"],
    experience: "6 years across SaaS product marketing and lifecycle campaigns",
    experienceTimeline: [
      { role: "Product Marketing Lead", company: "Atlassian", duration: "2 years" },
      { role: "Lifecycle Marketing Manager", company: "Asana", duration: "2 years" },
      { role: "Marketing Specialist", company: "Grubhub", duration: "2 years" }
    ],
    education: "B.A. Communications, Northwestern",
    certifications: ["Product Marketing Alliance", "Google Analytics"],
    portfolio: ["Launch narrative samples", "Messaging framework", "Customer research clips"],
    recommendations: ["Priya brings sharp thinking without losing warmth or customer empathy."],
    references: 4
  },
  {
    id: "jordan-eagle",
    name: "Jordan Eagle",
    title: "Digital Strategy Manager",
    desiredRole: "Growth Marketing Manager",
    location: "Denver, CO",
    match: 89,
    availability: "Available in 3 weeks",
    salary: "$98k - $118k",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&facepad=5&w=900&q=85",
    video:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&crop=faces&facepad=5&w=1400&q=88",
    summary:
      "A steady growth operator with strong communication, practical experimentation, and calm stakeholder presence.",
    about:
      "I like building growth systems that make teams more focused, more honest about data, and more useful to customers.",
    skills: ["Growth Strategy", "Experimentation", "Analytics", "SEO", "Stakeholder Communication"],
    topSkills: ["Growth Strategy", "Experimentation", "Analytics", "SEO", "Stakeholder Communication"],
    workPreferences: ["Remote", "Flexible"],
    experience: "7 years in digital strategy, growth testing, and performance marketing",
    experienceTimeline: [
      { role: "Digital Strategy Manager", company: "Adobe", duration: "3 years" },
      { role: "Growth Marketing Analyst", company: "Guild", duration: "2 years" },
      { role: "SEO Strategist", company: "Moz", duration: "2 years" }
    ],
    education: "B.S. Business, University of Colorado",
    certifications: ["GA4 Certification", "HubSpot Marketing"],
    portfolio: ["Experiment roadmap", "SEO growth brief", "Performance dashboard"],
    recommendations: ["Jordan communicates tradeoffs clearly and earns trust quickly."],
    references: 3
  }
];

export const jobs = [
  {
    id: "growth-marketing-manager",
    title: "Growth Marketing Manager",
    company: "Northstar Health",
    location: "Remote",
    workType: "Remote",
    salaryRange: "$105k - $130k",
    showSalary: true,
    hideCompanyName: false,
    description:
      "Lead lifecycle and brand growth programs for a mission-driven health platform. You will translate customer insight into campaigns, experiments, and stories that build trust and measurable pipeline.",
    requiredSkills: ["Growth Strategy", "Lifecycle Marketing", "Analytics", "Customer Research", "Brand Storytelling"],
    preferredSkills: ["Healthcare", "Product Marketing", "HubSpot"],
    videoQuestions: [
      "Tell us about your experience related to this role.",
      "Why are you interested in this opportunity?",
      "What makes you a strong fit?",
      "Describe a challenge you solved.",
      "What should we know about you beyond your resume?"
    ],
    applicants: 48,
    stage: "Interviewing",
    posted: "4 days ago"
  },
  {
    id: "revenue-operations-analyst",
    title: "Revenue Operations Analyst",
    company: "BrightLedger",
    location: "Austin, TX",
    workType: "Hybrid",
    salaryRange: "$88k - $110k",
    showSalary: true,
    hideCompanyName: false,
    description:
      "Improve forecasting, pipeline visibility, and revenue team workflows. This role turns operational signals into dashboards and decisions that help teams move with clarity.",
    requiredSkills: ["SQL", "Revenue Ops", "Forecasting", "Dashboards", "Salesforce"],
    preferredSkills: ["dbt", "B2B SaaS", "Enablement"],
    videoQuestions: [
      "Tell us about your experience related to this role.",
      "Why are you interested in this opportunity?",
      "What makes you a strong fit?"
    ],
    applicants: 31,
    stage: "Reviewed",
    posted: "1 week ago"
  },
  {
    id: "senior-ux-researcher",
    title: "Senior UX Researcher",
    company: "CareNest",
    location: "Hybrid",
    workType: "Hybrid",
    salaryRange: "$115k - $140k",
    showSalary: false,
    hideCompanyName: true,
    description:
      "Guide product teams with research that clarifies customer needs, reduces risk, and keeps human insight close to every decision.",
    requiredSkills: ["User Interviews", "Research Ops", "Figma", "Journey Mapping", "Research Synthesis"],
    preferredSkills: ["Healthcare", "Mixed Methods", "Repository Design"],
    videoQuestions: [
      "Tell us about your experience related to this role.",
      "Why are you interested in this opportunity?",
      "What makes you a strong fit?",
      "Describe a challenge you solved."
    ],
    applicants: 27,
    stage: "Shortlisted",
    posted: "2 weeks ago"
  }
];

export const applicationActivity = [
  { jobTitle: "Growth Marketing Manager", company: "Northstar Health", status: "Interviewing", applied: "Today" },
  { jobTitle: "Lifecycle Marketing Lead", company: "BrightPath", status: "Reviewed", applied: "2 days ago" },
  { jobTitle: "Brand Strategy Manager", company: "Luma Labs", status: "Applied", applied: "1 week ago" }
];

export const freePlanLimits = {
  candidateShares: { used: 8, limit: 20 },
  fullProfileViews: { used: 18, limit: 25 },
  candidateSharesEmployer: { used: 4, limit: 5 },
  jobPosts: { used: 0, limit: 1 }
};

export const pipelineStages = [
  { name: "Applied", count: 24 },
  { name: "Reviewed", count: 16 },
  { name: "Shortlisted", count: 9 },
  { name: "Interviewing", count: 6 },
  { name: "Offer", count: 2 },
  { name: "Rejected", count: 8 },
  { name: "Hired", count: 3 }
];

export const applicantStages = ["Applied", "Reviewed", "Shortlisted", "Interviewing", "Offer", "Rejected", "Hired"];

export const jobApplicants = {
  "growth-marketing-manager": [
    { candidateId: "maya-johnson", status: "Interviewing" },
    { candidateId: "sophia-martinez", status: "Shortlisted" },
    { candidateId: "derek-johnson", status: "Reviewed" }
  ],
  "revenue-operations-analyst": [
    { candidateId: "ethan-miller", status: "Reviewed" },
    { candidateId: "maya-johnson", status: "Applied" },
    { candidateId: "derek-johnson", status: "Shortlisted" }
  ],
  "senior-ux-researcher": [
    { candidateId: "sophia-martinez", status: "Shortlisted" },
    { candidateId: "maya-johnson", status: "Reviewed" },
    { candidateId: "ethan-miller", status: "Applied" }
  ]
} as const;

export const valueProps = [
  {
    title: "See the real person",
    text: "Understand communication style, confidence, and presence before the first interview.",
    icon: Video
  },
  {
    title: "Hire with confidence",
    text: "Reduce guesswork with human context that makes every interview decision feel clearer.",
    icon: ShieldCheck
  },
  {
    title: "Move faster",
    text: "Know who is worth your time sooner, before calendars fill with low-fit interviews.",
    icon: Clock3
  },
  {
    title: "Build stronger teams",
    text: "Align hiring teams around trust, professionalism, and fit instead of keywords alone.",
    icon: UsersRound
  }
];

export const adminStats = [
  { label: "Total users", value: "2,840", icon: UsersRound },
  { label: "Employer reviews", value: "18", icon: BriefcaseBusiness },
  { label: "Candidate reviews", value: "42", icon: FileCheck2 },
  { label: "Reported content", value: "5", icon: ShieldCheck },
  { label: "MRR", value: "$42.8k", icon: BarChart3 },
  { label: "Healthy profiles", value: "94%", icon: CheckCircle2 }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "A simple way to enter the VizHire ecosystem and start seeing human-first candidate profiles.",
    cta: "Start free",
    features: [
      "1 active job",
      "Browse candidates",
      "Limited outreach",
      "Basic candidate review flow",
      "Limited pipeline usage",
      "Human-first profile previews"
    ]
  },
  {
    name: "Growth",
    price: "$149",
    annualPrice: "$129/month annually",
    description: "For small businesses and growing teams that want to hire better humans faster.",
    cta: "Start hiring",
    popular: true,
    features: [
      "5 active jobs",
      "Unlimited candidate browsing",
      "Full review flow",
      "Video interview questions",
      "Outreach tools",
      "Candidate saves and hiring notes",
      "Advanced matching and analytics"
    ]
  },
  {
    name: "Scale",
    price: "$399",
    annualPrice: "$349/month annually",
    description: "For recruiters and active hiring teams running multiple searches at once.",
    cta: "Scale hiring",
    features: [
      "Unlimited jobs",
      "Advanced sourcing",
      "Team collaboration",
      "Recruiter seats",
      "Advanced pipeline",
      "Featured job promotion",
      "Advanced analytics",
      "Priority support"
    ]
  }
];

export const onboardingSteps = [
  { title: "Tell your story", text: "Add the role you want, the work you love, and what makes you distinct.", icon: Sparkles },
  { title: "Record your intro", text: "A warm 30-second video gives employers the human context resumes miss.", icon: Video },
  { title: "Add proof", text: "Upload your resume, portfolio, references, and written recommendations.", icon: FileCheck2 },
  { title: "Share anywhere", text: "Use your VizHire profile link in applications, emails, and signatures.", icon: HeartHandshake }
];

export function getCandidateMatch(candidate: (typeof candidates)[number], job = jobs[0]) {
  const candidateSkills = new Set(candidate.topSkills.map((skill) => skill.toLowerCase()));
  const matchedSkills = job.requiredSkills.filter((skill) => candidateSkills.has(skill.toLowerCase()));
  const roleAligned =
    candidate.desiredRole.toLowerCase().includes(job.title.toLowerCase().split(" ")[0]) ||
    job.title.toLowerCase().includes(candidate.desiredRole.toLowerCase().split(" ")[0]);
  const workAligned = candidate.workPreferences.includes(job.workType) || job.workType === "Remote";
  const score = Math.min(98, 58 + matchedSkills.length * 7 + (roleAligned ? 12 : 0) + (workAligned ? 8 : 0));

  return {
    score,
    matchedSkills,
    label: score >= 88 ? "Suggested Match" : "Potential Match",
    reasons: [
      `Matches ${matchedSkills.length} of ${job.requiredSkills.length} required skills`,
      roleAligned ? "Desired role aligns with job title" : "Role direction is adjacent",
      workAligned ? `Open to ${job.workType.toLowerCase()} work` : "Work preference may need review"
    ]
  };
}
