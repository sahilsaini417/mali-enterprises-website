import type { Metadata } from 'next';
import type { ReactNode } from 'react';
// @ts-ignore: CSS module type declarations unavailable in this project setup
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'MALI ENTERPRISES PVT. LTD. | E-Parivahan',
  description: 'Premium electric rickshaw and auto manufacturing from MALI ENTERPRISES PVT. LTD. | E-Parivahan',
  keywords: ['Electric Rickshaw', 'E-Auto', 'EV Manufacturer', 'E-Parivahan India', 'EV Dealer Haryana'],
  metadataBase: new URL('https://www.eparivahanindia.com'),
  alternates: {
    canonical: '/' 
  },
  openGraph: {
    title: 'MALI ENTERPRISES PVT. LTD. | E-Parivahan',
    description: 'Premium electric rickshaw and auto manufacturing from MALI ENTERPRISES PVT. LTD. | E-Parivahan',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-white selection:bg-accent selection:text-surface">
        <div className="min-h-screen bg-hero bg-cover bg-center text-white">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
