import Link from 'next/link';
import { BrandLogo } from './BrandLogo';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/dealership', label: 'Dealership' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4 py-4">
        <BrandLogo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">
            Inquiry
          </Link>
          <Link href="/admin" className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10 md:inline-flex">
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
