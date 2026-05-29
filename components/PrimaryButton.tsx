import Link from 'next/link';

interface PrimaryButtonProps {
  href?: string;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function PrimaryButton({ href, label, onClick, type = 'button' }: PrimaryButtonProps) {
  const className = 'inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white';

  return href ? (
    <Link href={href} className={className}>
      {label}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}
