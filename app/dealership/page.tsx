import { dealerBenefits, faqs } from '@/data/siteData';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function DealershipPage() {
  return (
    <section className="container py-20">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Dealership</p>
        <h1 className="section-title">Power your business with an EV dealership</h1>
        <p className="section-subtitle mx-auto">Join the E-Parivahan dealer network and take advantage of strong margins, support, and a premium EV brand for Indian last-mile transport.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="card-panel rounded-[32px] p-8">
            <h2 className="text-3xl font-semibold text-white">Why become a dealer?</h2>
            <p className="mt-4 text-slate-300">Our dealership model is crafted for both new entrepreneurs and existing vehicle businesses. We deliver a premium EV brand, training, inventory planning and marketing support to help you win customers fast.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {dealerBenefits.map((item) => (
              <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                <p className="text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[32px] bg-slate-950/70 p-8 text-slate-200">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Investment details</p>
            <p className="mt-4 text-white">Dealer investment starts from ₹10 lakh and scales depending on inventory and showroom requirements. We offer flexible financing guidance and targeted local launches.</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="card-panel rounded-[32px] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Quick inquiry</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Start dealership enrollment</h2>
            <p className="mt-4 text-slate-300">Our team will contact you with the latest dealer pricing, support packages and lead generation services.</p>
            <PrimaryButton href="/contact" label="Request dealer details" />
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-slate-200">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Dealer success stories</p>
            <p className="mt-4 text-slate-300">Dealer partners in Haryana and Punjab are reporting strong customer interest thanks to the E-Parivahan brand and dependable after-sales service support.</p>
            <div className="mt-6 grid gap-4 text-slate-300">
              <div className="rounded-3xl bg-slate-900/90 p-4">High demand for passenger e-rickshaws in tier-II towns.</div>
              <div className="rounded-3xl bg-slate-900/90 p-4">Fast replenishment from our Jind manufacturing hub.</div>
              <div className="rounded-3xl bg-slate-900/90 p-4">Targeted marketing support for local showrooms.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Frequently asked questions</p>
        <div className="mt-8 space-y-4">
          {faqs.slice(0, 3).map((item) => (
            <div key={item.question} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
