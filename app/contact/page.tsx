'use client';

import { FormEvent, useState } from 'react';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');
    const body = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message')
    };
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      setStatus('success');
      setMessage('Your inquiry has been sent successfully. We will contact you soon.');
      event.currentTarget.reset();
    } else {
      setStatus('error');
      setMessage('Unable to send inquiry. Please try again or call us directly.');
    }
  }

  return (
    <section className="container py-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="section-title">Connect with MALI ENTERPRISES PVT. LTD.</h1>
          <p className="section-subtitle">Send us your inquiry for products, dealership opportunities or a customized EV solution for your fleet.</p>
          <div className="grid gap-5 rounded-[32px] bg-white/5 p-8 text-slate-300 shadow-soft">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Phone</p>
              <p className="mt-3">+91 88180 24600 | +91 92204 05742</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Email</p>
              <p className="mt-3">malienterprisespvt@gmail.com</p>
              <p className="mt-1">info@eparivahanindia.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Address</p>
              <p className="mt-3">OLD HANSI ROAD, PLOT NO. 66, INDUSTRIAL ESTATE, JIND, HARYANA – 126102, INDIA</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] bg-white/5 p-8 shadow-soft">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-200">Name</label>
              <input type="text" name="name" required className="input-field" placeholder="Your full name" />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-200">Email</label>
              <input type="email" name="email" required className="input-field" placeholder="Email address" />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-200">Phone</label>
              <input type="tel" name="phone" required className="input-field" placeholder="Mobile number" />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-200">Message</label>
              <textarea name="message" rows={5} required className="input-field" placeholder="Tell us about your requirement" />
            </div>
            <div className="space-y-3">
              <PrimaryButton type="submit" label={status === 'sending' ? 'Sending…' : 'Submit Inquiry'} />
              {status !== 'idle' && <p className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>{message}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="mt-16 rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
        <p className="text-lg font-semibold text-white">Find us on Google Maps</p>
        <div className="mt-6 aspect-[16/7] w-full overflow-hidden rounded-[28px] border border-white/10">
          <iframe
            title="E-Parivahan location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34805.30911637968!2d76.30122080739574!3d29.32462511076031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efa5b34afd6f5%3A0x75333714759b4f0b!2sJind%2C%20Haryana%20126102!5e0!3m2!1sen!2sin!4v1716164244139!5m2!1sen!2sin"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
