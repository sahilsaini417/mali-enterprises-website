'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { PrimaryButton } from '@/components/PrimaryButton';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

interface ProductInput {
  category: string;
  name: string;
  short: string;
  battery: string;
  mileage: string;
  chargeTime: string;
  price: string;
  features: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('admin@eparivahanindia.com');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [productInput, setProductInput] = useState<ProductInput>({
    category: 'Passenger E-Rickshaw',
    name: '',
    short: '',
    battery: '',
    mileage: '',
    chargeTime: '',
    price: '',
    features: ''
  });
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle');

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
      if (data.session) {
        loadInquiries();
      }
    }
    checkSession();
  }, []);

  const featureList = useMemo(() => productInput.features.split(',').map((item) => item.trim()).filter(Boolean), [productInput.features]);

  async function loadInquiries() {
    const { data, error } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false }).limit(20);
    if (error) {
      console.error(error);
      return;
    }
    setInquiries(data as Inquiry[]);
  }

  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }
    setIsLoggedIn(true);
    setMessage('Logged in successfully. Loading dashboard...');
    setLoading(false);
    loadInquiries();
  }

  async function handleAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('products').insert({
      category: productInput.category,
      name: productInput.name,
      short: productInput.short,
      battery: productInput.battery,
      mileage: productInput.mileage,
      chargeTime: productInput.chargeTime,
      price: productInput.price,
      features: featureList,
      images: []
    });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Product added successfully.');
      setProductInput({ ...productInput, name: '', short: '', battery: '', mileage: '', chargeTime: '', price: '', features: '' });
    }
    setLoading(false);
  }

  async function handleUploadMedia(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!mediaFile) {
      setUploadStatus('error');
      return;
    }
    setUploadStatus('uploading');
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!preset || !cloudName) {
      setUploadStatus('error');
      setMessage('Cloudinary configuration is missing.');
      return;
    }
    const data = new FormData();
    data.append('file', mediaFile);
    data.append('upload_preset', preset);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: data
    });
    const json = await response.json();
    if (!response.ok) {
      setUploadStatus('error');
      setMessage(json.error?.message || 'Upload failed.');
      return;
    }
    const insert = await supabase.from('gallery').insert([{ asset_url: json.secure_url, type: json.resource_type, caption: mediaFile.name }]);
    if (insert.error) {
      setUploadStatus('error');
      setMessage(insert.error.message);
      return;
    }
    setUploadStatus('done');
    setMediaFile(null);
    setMessage('Media uploaded and saved to gallery.');
  }

  if (!isLoggedIn) {
    return (
      <section className="container py-20">
        <div className="mx-auto max-w-xl rounded-[36px] bg-white/5 p-10 shadow-soft">
          <h1 className="section-title">Admin Sign in</h1>
          <p className="section-subtitle">Secure access for authorized staff to manage uploads, inquiries and product catalog.</p>
          <div className="mt-10 space-y-5">
            <label className="block text-sm font-medium text-slate-200">Email</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="input-field" />
            <label className="block text-sm font-medium text-slate-200">Password</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="input-field" />
            <PrimaryButton type="button" label={loading ? 'Signing in…' : 'Sign In'} onClick={handleLogin} />
            {message && <p className="text-sm text-rose-300">{message}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="card-panel rounded-[32px] p-8">
            <h1 className="section-title">Admin Dashboard</h1>
            <p className="section-subtitle">Manage leads, upload gallery media, and add new products directly from your mobile or desktop.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-panel rounded-[32px] p-8">
              <h2 className="text-xl font-semibold text-white">Latest inquiries</h2>
              {inquiries.length === 0 ? (
                <p className="mt-4 text-slate-300">No new inquiries yet.</p>
              ) : (
                <div className="mt-6 space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="font-semibold text-white">{inquiry.name}</p>
                      <p className="text-sm text-slate-400">{inquiry.email} | {inquiry.phone}</p>
                      <p className="mt-2 text-slate-300">{inquiry.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="card-panel rounded-[32px] p-8">
              <h2 className="text-xl font-semibold text-white">Quick actions</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                <p>Use the upload form to add photos and videos from your mobile camera.</p>
                <p>Products added here appear on the products page immediately.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] bg-white/5 p-8">
              <h2 className="text-xl font-semibold text-white">Add a new product</h2>
              <form className="mt-6 space-y-4" onSubmit={handleAddProduct}>
                <select className="input-field" value={productInput.category} onChange={(event) => setProductInput({ ...productInput, category: event.target.value })}>
                  <option>Passenger E-Rickshaw</option>
                  <option>Loader E-Rickshaw</option>
                  <option>Electric Auto</option>
                  <option>Garbage E-Vehicle</option>
                </select>
                <input type="text" className="input-field" placeholder="Model name" value={productInput.name} onChange={(event) => setProductInput({ ...productInput, name: event.target.value })} required />
                <input type="text" className="input-field" placeholder="Short description" value={productInput.short} onChange={(event) => setProductInput({ ...productInput, short: event.target.value })} required />
                <input type="text" className="input-field" placeholder="Battery details" value={productInput.battery} onChange={(event) => setProductInput({ ...productInput, battery: event.target.value })} required />
                <input type="text" className="input-field" placeholder="Mileage" value={productInput.mileage} onChange={(event) => setProductInput({ ...productInput, mileage: event.target.value })} required />
                <input type="text" className="input-field" placeholder="Charging time" value={productInput.chargeTime} onChange={(event) => setProductInput({ ...productInput, chargeTime: event.target.value })} required />
                <input type="text" className="input-field" placeholder="Price" value={productInput.price} onChange={(event) => setProductInput({ ...productInput, price: event.target.value })} required />
                <textarea className="input-field" placeholder="Features (comma separated)" value={productInput.features} onChange={(event) => setProductInput({ ...productInput, features: event.target.value })} rows={3} />
                <PrimaryButton type="submit" label={loading ? 'Saving…' : 'Add product'} />
                {message && <p className="text-sm text-slate-300">{message}</p>}
              </form>
            </div>
            <div className="rounded-[32px] bg-white/5 p-8">
              <h2 className="text-xl font-semibold text-white">Upload gallery asset</h2>
              <form className="mt-6 space-y-4" onSubmit={handleUploadMedia}>
                <input
                  type="file"
                  accept="image/*,video/*"
                  capture="environment"
                  onChange={(event) => setMediaFile(event.target.files?.[0] || null)}
                  className="input-field"
                />
                <PrimaryButton type="submit" label={uploadStatus === 'uploading' ? 'Uploading…' : 'Upload from camera'} />
                {message && <p className="text-sm text-slate-300">{message}</p>}
              </form>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] bg-white/5 p-8">
          <h2 className="text-xl font-semibold text-white">Admin resources</h2>
          <div className="mt-6 space-y-4 text-slate-300">
            <p>Admin login uses Supabase authentication. Configure a secure admin user in your Supabase dashboard.</p>
            <p>Cloudinary direct upload requires <code className="rounded-md bg-slate-900 px-2 py-1 text-xs text-green-300">NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME</code> and <code className="rounded-md bg-slate-900 px-2 py-1 text-xs text-green-300">NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET</code>.</p>
            <p>Use the latest mobile browser for camera upload support and gallery management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
