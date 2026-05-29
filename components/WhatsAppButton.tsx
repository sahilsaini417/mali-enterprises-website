import { MessageCircle } from 'lucide-react';
import { siteMeta } from '../data/siteData';

const whatsappNumber = siteMeta.whatsapp.replace(/[^0-9]/g, '');

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:scale-[1.02] md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
