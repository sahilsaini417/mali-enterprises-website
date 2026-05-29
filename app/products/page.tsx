import Image from 'next/image';
import { products } from '@/data/siteData';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function ProductsPage() {
  return (
    <section className="container py-20">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Our product lineup</p>
        <h1 className="section-title">Electric rickshaw and auto models for every fleet.</h1>
        <p className="section-subtitle mx-auto">Choose from passenger, loader, auto and municipal categories built for superior range and reliability.</p>
      </div>
      <div className="grid gap-8 xl:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="card-panel grid gap-6 rounded-[32px] p-8">
            <div className="relative h-80 w-full overflow-hidden rounded-[32px] bg-slate-900">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">{product.category}</p>
              <h2 className="text-3xl font-semibold text-white">{product.name}</h2>
              <p className="text-slate-300">{product.short}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200">Battery: {product.battery}</div>
                <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200">Mileage: {product.mileage}</div>
                <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-200">Charge: {product.chargeTime}</div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Features</p>
                <ul className="mt-4 grid gap-3 text-slate-300 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="rounded-3xl bg-slate-950/70 p-3">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton href="/contact" label="Inquiry" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
