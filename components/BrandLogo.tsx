import Link from 'next/link';

export function BrandLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 text-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black text-accent shadow-soft">
        M
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">E-Parivahan</p>
        <p className="text-lg font-semibold">MALI ENTERPRISES</p>
      </div>
    </Link>
  );
}
