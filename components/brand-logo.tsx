import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="VizHire home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-viz-600 to-viz-400 shadow-glow">
        <span className="ml-0.5 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white" />
      </span>
      {!compact && (
        <span className="text-2xl font-black tracking-normal text-ink">
          Viz<span className="font-medium">Hire</span>
        </span>
      )}
    </Link>
  );
}
