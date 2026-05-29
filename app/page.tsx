import Image from 'next/image';
import Link from 'next/link';
import { features, heroHighlights, products, testimonials } from '@/data/siteData';
import { PrimaryButton } from '@/components/PrimaryButton';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <section className="container pt-16 pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-accent">Electric Vehicle Manufacturer</span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Drive Smarter, Earn Faster with <span className="gradient-text">E-Parivahan</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              MALI ENTERPRISES PVT. LTD. brings modern electric rickshaws, autos and commercial EVs from Jind, Haryana to dealers and drivers across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact" label="Get Quote" />
              <PrimaryButton href="/dealership" label="Become Dealer" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div key={item} className="card-panel rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 p-6 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80"
              alt="E-Parivahan electric rickshaw"
              width={980}
              height={760}
              className="h-full w-full rounded-[32px] object-cover shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 rounded-3xl bg-slate-950/80 p-5 text-white shadow-xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured Model</p>
              <p className="mt-2 text-lg font-semibold">E-Parivahan Journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Why choose us</p>
          <h2 className="section-title">Premium electric vehicles built for India</h2>
          <p className="section-subtitle mx-auto">A trusted manufacturing partner for dealer networks, drivers and fleet operators seeking a reliable EV solution.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card-panel rounded-[32px] p-8">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Featured vehicles</p>
          <h2 className="section-title">High-converting E-Rickshaw and E-Auto models</h2>
          <p className="section-subtitle mx-auto">A balanced lineup for passenger transport, cargo delivery, and municipal applications.</p>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {products.slice(0, 2).map((product) => (
            <div key={product.id} className="card-panel rounded-[32px] overflow-hidden">
              <div className="relative h-72 w-full">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-accent">{product.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{product.name}</h3>
                <p className="mt-4 text-slate-300">{product.short}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200">Battery: {product.battery}</div>
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200">Mileage: {product.mileage}</div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryButton href="/products" label="View details" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Trusted by partners</p>
          <h2 className="section-title">Dealer network and customer trust</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card-panel rounded-[32px] p-8">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-3xl bg-white/10">
                  <Image src={item.image} alt={item.name} width={64} height={64} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
              <p className="mt-6 text-slate-300">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-28">
        <div className="rounded-[32px] bg-white/5 p-12 shadow-soft backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Become a partner</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Create a high-growth dealership with E-Parivahan</h2>
              <p className="mt-5 max-w-2xl text-slate-300">We support dealers with inventory, marketing, training and live customer leads for regional expansion.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton href="/dealership" label="Dealer opportunity" />
                <PrimaryButton href="/contact" label="Get in touch" />
              </div>
            </div>
            <div className="space-y-4 rounded-[32px] bg-slate-950/70 p-8 text-slate-200">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Investment range</p>
                <p className="mt-3 text-3xl font-semibold text-white">₹10L – ₹25L*</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Average profit</p>
                <p className="mt-3 text-3xl font-semibold text-white">18% – 25%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
