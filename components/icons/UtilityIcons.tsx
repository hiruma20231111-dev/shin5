/**
 * UI 用の小さなアイコン集
 * - チェックマーク・吹き出し・ハートなど、各セクションで使い回す軽量SVG
 * - すべて decorative 前提
 */
import type { SVGProps } from 'react';

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="11" fill="#329e3a" />
      <path d="M7 12.5 L10.5 16 L17 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function LineIcon(props: SVGProps<SVGSVGElement>) {
  // LINEを連想させる吹き出し型（商標を直接模倣せず、汎用チャット風）
  return (
    <svg viewBox="0 0 24 24" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 3C6.5 3 2 6.5 2 10.8c0 2.6 1.7 4.9 4.2 6.3-.2.7-.8 2.6-.9 3-.1.5.2.5.5.4.2-.1 2.7-1.8 3.7-2.5.8.1 1.6.2 2.5.2 5.5 0 10-3.5 10-7.8S17.5 3 12 3z"
        fill="currentColor"
      />
      <circle cx="8" cy="10.5" r="1.2" fill="#ffffff" />
      <circle cx="12" cy="10.5" r="1.2" fill="#ffffff" />
      <circle cx="16" cy="10.5" r="1.2" fill="#ffffff" />
    </svg>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="currentColor" />
      <path d="M14 2v6h6" fill="#ffffff" opacity="0.4" />
      <path d="M8 13h8M8 17h6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" fill="currentColor" />
      <rect x="3" y="5" width="18" height="5" fill="#ffffff" opacity="0.2" />
      <path d="M8 3v4M16 3v4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="14" r="1.5" fill="#ffffff" />
      <circle cx="14" cy="14" r="1.5" fill="#ffffff" />
    </svg>
  );
}

export function ChevronIcon({ open, ...rest }: SVGProps<SVGSVGElement> & { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}
      {...rest}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z" fill="currentColor" />
      <circle cx="12" cy="10" r="3" fill="#ffffff" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2C11 21 3 13 3 5a2 2 0 0 1 2-2z"
        fill="currentColor"
      />
    </svg>
  );
}
