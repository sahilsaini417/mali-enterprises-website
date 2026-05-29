import Image from 'next/image';
import { PrimaryButton } from '@/components/PrimaryButton';

const albums = [
  { title: 'Passenger Fleet', image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Cargo & Loader', image: 'https://images.unsplash.com/photo-1513650008853-58e72d48d4ec?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Dealer Events', image: 'https://images.unsplash.com/photo-1518118573789-5d6d2d0256eb?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Assembly Line', image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1200&q=80' }
];

export default function GalleryPage() {
  return (
    <section className="container py-20">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Gallery</p>
        <h1 className="section-title">Visual stories from our factory, partners and vehicles.</h1>
        <p className="section-subtitle mx-auto">A gallery designed for mobile, dealership presentations and brand trust with professionally captured EV images.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {albums.map((album) => (
          <div key={album.title} className="card-panel overflow-hidden rounded-[32px] p-0">
            <div className="relative h-72 w-full">
              <Image src={album.image} alt={album.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">{album.title}</h2>
              <p className="mt-3 text-slate-300">Explore real photos from manufacturing, field tests and dealer activations.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-10 text-slate-200 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">Admin media upload and albums</h2>
          <p className="mt-4 text-slate-300">Authorized staff can upload photos and videos directly from mobile camera or desktop with the admin dashboard. Each file is stored in secure gallery albums for dealer presentations.</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Secure upload feature</p>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Take Photo button for mobile camera access</li>
            <li>Drag-and-drop upload support on desktop</li>
            <li>Cloudinary storage for fast loading assets</li>
            <li>Admin login authentication with manager access</li>
          </ul>
          <PrimaryButton href="/admin" label="Go to admin panel" />
        </div>
      </div>
    </section>
  );
}
