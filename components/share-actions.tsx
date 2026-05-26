"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Check, Copy, Linkedin, Mail, Play, QrCode, Share2 } from "lucide-react";

type ShareMode = "profile" | "job";

export function ShareActions({
  title,
  url,
  employerMode = false,
  mode = "profile",
  name = "Maya Johnson",
  role = "Marketing Strategist",
  image,
  trustStatement = "A polished professional identity that helps employers understand communication, confidence, and presence.",
  introLabel = "30-sec intro"
}: {
  label?: string;
  title: string;
  url: string;
  employerMode?: boolean;
  mode?: ShareMode;
  name?: string;
  role?: string;
  image?: string;
  trustStatement?: string;
  introLabel?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [absoluteUrl, setAbsoluteUrl] = useState(url);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setAbsoluteUrl(url.startsWith("http") ? url : `${window.location.origin}${url}`);
    setClientReady(true);
  }, [url]);

  const shareUrl = clientReady ? absoluteUrl : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);
  const emailHref = clientReady
    ? `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(
        mode === "job" ? `This opportunity may be worth a look: ${shareUrl}` : `View my VizHire profile: ${shareUrl}`
      )}`
    : "#";
  const linkedInHref = clientReady ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` : "#";
  const xHref = clientReady ? `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` : "#";

  async function copyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      if (typeof window !== "undefined") window.setTimeout(() => setCopied(false), 1800);
    }
  }

  async function nativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      await navigator.share({
        title,
        text: mode === "job" ? "A VizHire opportunity worth reviewing." : "My VizHire professional profile.",
        url: shareUrl
      });
      return;
    }
    await copyLink();
  }

  function preventUntilReady(event: MouseEvent<HTMLAnchorElement>) {
    if (!clientReady) event.preventDefault();
  }

  return (
    <section className="rounded-[1.75rem] border border-viz-100 bg-white p-4 shadow-soft sm:p-5">
      <div className="overflow-hidden rounded-[1.35rem] border border-viz-100 bg-white">
        <div className="relative min-h-52 bg-midnight">
          {image ? (
            <img src={image} alt={`${name} share preview`} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-viz-700 to-midnight" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-[11px] font-black text-viz-700 backdrop-blur">
              <Play className="h-3 w-3 fill-current" /> {introLabel}
            </span>
            <span className="rounded-full bg-black/34 px-2.5 py-1 text-[10px] font-black text-white/72 backdrop-blur">
              You on Viz yet?
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-2xl font-black">{name}</p>
            <p className="mt-1 text-sm font-bold text-white/76">{role}</p>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-viz-600">
            {mode === "job" ? "Opportunity preview" : "Profile preview"}
          </p>
          <h2 className="mt-2 text-xl font-black leading-tight text-ink">{title}</h2>
          <p className="mt-3 text-sm font-bold leading-6 text-slate-600">{trustStatement}</p>
          <div className="mt-4 inline-flex rounded-full bg-viz-50 px-3 py-1.5 text-[11px] font-black text-viz-700">
            {mode === "job" ? "Apply with your VizHire profile" : "View VizHire Profile"}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={nativeShare}
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-viz-700 px-4 font-black text-white shadow-glow transition hover:-translate-y-0.5"
      >
        <Share2 className="h-4 w-4" />
        {mode === "job" ? "Share Opportunity" : "Share Profile"}
      </button>

      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={copyLink}
          className="group relative grid h-10 w-10 place-items-center rounded-full border border-viz-100 bg-white text-viz-700 transition hover:border-viz-300 hover:bg-viz-50"
          aria-label="Copy link"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="pointer-events-none absolute top-full mt-2 hidden rounded-full bg-ink px-2 py-1 text-[10px] font-black text-white group-hover:block">
            {copied ? "Copied" : "Copy"}
          </span>
        </button>
        <a
          href={linkedInHref}
          aria-disabled={!clientReady}
          onClick={preventUntilReady}
          target="_blank"
          rel="noreferrer"
          className="group relative grid h-10 w-10 place-items-center rounded-full border border-viz-100 bg-white text-viz-700 transition hover:border-viz-300 hover:bg-viz-50"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
          <span className="pointer-events-none absolute top-full mt-2 hidden rounded-full bg-ink px-2 py-1 text-[10px] font-black text-white group-hover:block">
            LinkedIn
          </span>
        </a>
        <a
          href={emailHref}
          aria-disabled={!clientReady}
          onClick={preventUntilReady}
          className="group relative grid h-10 w-10 place-items-center rounded-full border border-viz-100 bg-white text-viz-700 transition hover:border-viz-300 hover:bg-viz-50"
          aria-label="Share by email"
        >
          <Mail className="h-4 w-4" />
          <span className="pointer-events-none absolute top-full mt-2 hidden rounded-full bg-ink px-2 py-1 text-[10px] font-black text-white group-hover:block">
            Email
          </span>
        </a>
        <a
          href={xHref}
          aria-disabled={!clientReady}
          onClick={preventUntilReady}
          target="_blank"
          rel="noreferrer"
          className="group relative grid h-10 w-10 place-items-center rounded-full border border-viz-100 bg-white text-xs font-black text-viz-700 transition hover:border-viz-300 hover:bg-viz-50"
          aria-label="Share on X"
        >
          X
          <span className="pointer-events-none absolute top-full mt-2 hidden rounded-full bg-ink px-2 py-1 text-[10px] font-black text-white group-hover:block">
            X
          </span>
        </a>
        <button
          type="button"
          onClick={() => setShowQr((value) => !value)}
          className="group relative grid h-10 w-10 place-items-center rounded-full border border-viz-100 bg-white text-viz-700 transition hover:border-viz-300 hover:bg-viz-50"
          aria-label="Show QR code"
        >
          <QrCode className="h-4 w-4" />
          <span className="pointer-events-none absolute top-full mt-2 hidden rounded-full bg-ink px-2 py-1 text-[10px] font-black text-white group-hover:block">
            QR
          </span>
        </button>
      </div>

      {showQr && (
        <div className="mx-auto mt-4 grid w-fit place-items-center rounded-2xl border border-viz-100 bg-viz-50 p-3">
          <div className="grid grid-cols-5 gap-1 rounded-xl bg-white p-3 shadow-soft" aria-label="QR code preview">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 rounded-[2px] ${
                  [0, 1, 3, 4, 5, 9, 10, 12, 14, 15, 19, 20, 21, 23, 24].includes(index)
                    ? "bg-viz-800"
                    : "bg-viz-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {employerMode && (
        <p className="mt-3 text-center text-xs leading-5 text-slate-500">
          Free plan preview: 4 of 5 candidate shares used.
        </p>
      )}
    </section>
  );
}
