"use client";

import { useState } from "react";
import { CheckCircle2, Clock3, Play, RefreshCw, Video } from "lucide-react";

const coachingNotes = [
  "Start with who you are professionally.",
  "Speak naturally.",
  "Employers want clarity, not perfection."
];

const exampleOpenings = [
  "Hi, I'm Maya. I help healthcare teams create calmer patient experiences.",
  "Hi, I'm Jordan. I'm a software engineer who explains complex systems clearly and builds tools people actually use.",
  "Hi, I'm Elena. I help restaurants create better guest experiences through strong team leadership."
];

export function ProfileIntroStudio() {
  const [state, setState] = useState<"prepare" | "countdown" | "recording" | "review">("prepare");

  return (
    <div className="overflow-hidden rounded-[2rem] border border-viz-100 bg-white text-ink shadow-soft">
      <div className="p-4 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-viz-600">
              <Video className="h-4 w-4" /> Intro studio
            </p>
            <h3 className="mt-2 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Create a first 10 seconds employers remember.
            </h3>
          </div>
          <span className="w-fit rounded-full bg-viz-50 px-4 py-2 text-xs font-black text-viz-700">30 sec intro</span>
        </div>

        <div className="relative overflow-hidden rounded-[1.7rem] bg-midnight shadow-glow">
          <div className="aspect-[4/5] sm:aspect-video">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.22),transparent_20%),linear-gradient(145deg,#080d28,#351285_52%,#12072c)]" />
            <div className="absolute inset-x-5 top-5 flex items-center justify-between">
              <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-black text-white/80 backdrop-blur">Camera preview</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/16 px-3 py-1 text-xs font-black text-emerald-200">
                <Clock3 className="h-3.5 w-3.5" /> 00:{state === "recording" ? "18" : "30"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setState(state === "prepare" ? "countdown" : state === "countdown" ? "recording" : "review")}
              className="absolute inset-0 m-auto grid h-20 w-20 place-items-center rounded-full bg-white text-viz-700 shadow-glow transition hover:scale-105 sm:h-24 sm:w-24"
              aria-label="Start profile intro recording"
            >
              {state === "review" ? <CheckCircle2 className="h-10 w-10" /> : <Play className="ml-1 h-10 w-10 fill-current" />}
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/84 via-black/34 to-transparent p-5 text-white sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-viz-100">
                {state === "prepare" && "Introduce yourself professionally."}
                {state === "countdown" && "3... 2... 1... breathe."}
                {state === "recording" && "Recording your intro."}
                {state === "review" && "Preview. Retry if it does not feel like you."}
              </p>
              <h4 className="mt-2 max-w-2xl text-2xl font-black sm:text-4xl">
                This is your moment to help employers understand you.
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {coachingNotes.map((note) => (
                  <span key={note} className="rounded-full bg-white/12 px-3 py-1.5 text-xs font-black text-white/82 backdrop-blur">
                    {note}
                  </span>
                ))}
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/16">
                <div className={`h-full rounded-full bg-white transition-all duration-500 ${state === "recording" ? "w-3/5" : state === "review" ? "w-full" : "w-1/5"}`} />
              </div>
            </div>
          </div>
        </div>

        <details className="mt-4 rounded-2xl bg-viz-50 px-4 py-3 text-sm text-slate-700">
          <summary className="cursor-pointer font-black text-ink">Need a starting line?</summary>
          <div className="mt-3 grid gap-2">
            {exampleOpenings.map((opening) => (
              <p key={opening} className="rounded-xl bg-white px-3 py-2 font-bold leading-6 shadow-soft">{opening}</p>
            ))}
          </div>
        </details>

        <div className="mt-4 grid gap-2 sm:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <button type="button" onClick={() => setState("countdown")} className="min-h-14 rounded-2xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
            Record My Professional Intro
          </button>
          <button type="button" onClick={() => setState("review")} className="min-h-14 rounded-2xl border border-viz-200 bg-white px-5 text-sm font-black text-viz-700 transition hover:-translate-y-0.5 hover:bg-viz-50">
            Preview Intro
          </button>
          <button type="button" onClick={() => setState("prepare")} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-viz-200 bg-white px-5 text-sm font-black text-viz-700 transition hover:-translate-y-0.5 hover:bg-viz-50">
            <RefreshCw className="h-4 w-4" /> Record Again
          </button>
        </div>
      </div>
    </div>
  );
}

export function JobVideoResponseStudio({ questions }: { questions: string[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const question = questions[currentQuestion] ?? questions[0];

  function markAnswered() {
    setAnswered((items) => (items.includes(currentQuestion) ? items : [...items, currentQuestion]));
  }

  return (
    <section className="overflow-hidden rounded-[2rem] border border-viz-100 bg-white p-4 shadow-soft sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Video response studio</p>
          <h2 className="mt-2 text-3xl font-black text-ink">Answer with calm confidence.</h2>
        </div>
        <span className="w-fit rounded-full bg-viz-50 px-4 py-2 text-xs font-black text-viz-700">
          {answered.length}/{questions.length} complete
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[1.7rem] bg-midnight shadow-glow">
        <div className="aspect-[4/5] sm:aspect-video">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.2),transparent_20%),linear-gradient(145deg,#070b24,#3b1793_52%,#13072d)]" />
          <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-black text-white/80 backdrop-blur">Question {currentQuestion + 1}</span>
            <span className="rounded-full bg-emerald-400/16 px-3 py-1 text-xs font-black text-emerald-200">
              {answered.includes(currentQuestion) ? "Saved" : "Ready"}
            </span>
          </div>

          <button type="button" onClick={markAnswered} className="absolute inset-0 m-auto grid h-20 w-20 place-items-center rounded-full bg-white text-viz-700 shadow-glow transition hover:scale-105 sm:h-24 sm:w-24" aria-label="Record answer">
            {answered.includes(currentQuestion) ? <CheckCircle2 className="h-10 w-10" /> : <Play className="ml-1 h-10 w-10 fill-current" />}
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/84 via-black/34 to-transparent p-5 text-white sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-viz-100">Speak naturally. Clarity beats perfection.</p>
            <h3 className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:text-4xl">{question}</h3>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/16">
              <div className={`h-full rounded-full bg-white transition-all duration-500 ${answered.includes(currentQuestion) ? "w-full" : "w-1/4"}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {questions.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => setCurrentQuestion(index)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-black transition ${
              index === currentQuestion ? "bg-viz-700 text-white shadow-glow" : "bg-viz-50 text-viz-700"
            }`}
          >
            Q{index + 1}
            {answered.includes(index) && " ✓"}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <button type="button" onClick={markAnswered} className="min-h-14 rounded-2xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
          Start Recording
        </button>
        <button type="button" onClick={markAnswered} className="min-h-14 rounded-2xl border border-viz-200 bg-white px-5 text-sm font-black text-viz-700 transition hover:-translate-y-0.5 hover:bg-viz-50">
          Preview Answer
        </button>
        <button type="button" onClick={() => setCurrentQuestion(Math.min(currentQuestion + 1, questions.length - 1))} className="min-h-14 rounded-2xl border border-viz-200 bg-white px-5 text-sm font-black text-viz-700 transition hover:-translate-y-0.5 hover:bg-viz-50">
          Next Question
        </button>
      </div>
    </section>
  );
}
