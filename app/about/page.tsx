import Image from 'next/image';
import { PrimaryButton } from '@/components/PrimaryButton';
import { siteMeta } from '@/data/siteData';

export default function AboutPage() {
  return (
    <section className="container py-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">About E-Parivahan</p>
          <h1 className="section-title">Indian EV manufacturing with a strong local footprint</h1>
          <p className="section-subtitle">MALI ENTERPRISES PVT. LTD. is a business-focused e-rickshaw and e-auto manufacturer from Haryana, committed to quality, safety and long-term customer success.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-panel rounded-[32px] p-8">
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
              <p className="mt-4 text-slate-300">Build reliable electric mobility solutions that empower drivers, dealers and communities.</p>
            </div>
            <div className="card-panel rounded-[32px] p-8">
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
              <p className="mt-4 text-slate-300">Create a trusted brand for sustainable transport across small cities and townships in India.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] bg-white/5 p-8 text-slate-300">
              <h3 className="text-xl font-semibold text-white">Manufacturing Quality</h3>
              <p className="mt-4">Designed in Haryana with a focus on robust frame construction, premium assembly and certified testing for Indian roads.</p>
            </div>
            <div className="rounded-[32px] bg-white/5 p-8 text-slate-300">
              <h3 className="text-xl font-semibold text-white">Future of EV in India</h3>
              <p className="mt-4">We believe electric mobility is the future of last-mile transport, and our products are built to accelerate the transition.</p>
            </div>
          </div>
          <PrimaryButton href="/contact" label="Contact our team" />
        </div>
        <div className="relative overflow-hidden rounded-[36px] bg-surface p-2 shadow-soft">
          <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="E-Parivahan manufacturing" width={900} height={900} className="h-full w-full rounded-[32px] object-cover" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-200 backdrop-blur-xl">
            <p className="font-semibold">India Ready EV</p>
            <p className="mt-1 text-slate-400">Built for sustainability, durability and ROI.</p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="card-panel rounded-[32px] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Location</p>
          <p className="mt-4 text-white">{siteMeta.address}</p>
        </div>
        <div className="card-panel rounded-[32px] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Dealers</p>
          <p className="mt-4 text-white">Pan-India partner network with focus on Haryana, Punjab, Rajasthan and Delhi NCR.</p>
        </div>
        <div className="card-panel rounded-[32px] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Support</p>
          <p className="mt-4 text-white">After-sales service, spare parts and onboarding assistance for every dealer partner.</p>
        </div>
      </div>
    </section>
  );
}
