import { siteMeta } from '@/data/siteData';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/90 py-14 text-slate-300">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">E-Parivahan</p>
          <h3 className="mt-4 text-xl font-semibold text-white">MALI ENTERPRISES PVT. LTD.</h3>
          <p className="mt-4 max-w-md leading-7">A trusted electric vehicle manufacturer from Haryana offering range-leading e-rickshaws, e-autos and commercial EVs for dealer networks across India.</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <p>{siteMeta.address}</p>
            <p>GST: {siteMeta.gst}</p>
            <p>Phone: {siteMeta.phone.join(' | ')}</p>
            <p>Email: {siteMeta.email.join(' | ')}</p>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/products">Products</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/dealership">Dealership</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} MALI ENTERPRISES PVT. LTD. | Manufactured in Jind, Haryana.
      </div>
    </footer>
  );
}
