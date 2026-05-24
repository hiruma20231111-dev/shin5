/**
 * 矯正装置の簡易アイコン3種
 * - 床装置 / 機能的矯正装置（マウスピース風）/ マルチブラケット
 * - 装置の説明テキストを最小化し、視覚で判別できるようにするためのアセット
 */
import type { SVGProps } from 'react';

export function FloorDeviceIcon(props: SVGProps<SVGSVGElement>) {
  // 床（しょう）装置：取り外しの拡大床
  return (
    <svg viewBox="0 0 80 80" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="6" width="68" height="68" rx="14" fill="#fef3c7" />
      <path d="M20 50 Q40 36 60 50 Q60 60 40 60 Q20 60 20 50 Z" fill="#fb7185" />
      <rect x="36" y="24" width="8" height="6" fill="#ffffff" />
      <rect x="46" y="26" width="6" height="6" fill="#ffffff" />
      <rect x="28" y="26" width="6" height="6" fill="#ffffff" />
      <line x1="20" y1="50" x2="60" y2="50" stroke="#a36f3a" strokeWidth="2" />
      <path d="M22 50 L20 56 M58 50 L60 56" stroke="#85572f" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FunctionalDeviceIcon(props: SVGProps<SVGSVGElement>) {
  // マウスピース型機能的矯正装置
  return (
    <svg viewBox="0 0 80 80" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="6" width="68" height="68" rx="14" fill="#dcf2dc" />
      <path d="M16 36 Q40 26 64 36 L60 50 Q40 56 20 50 Z" fill="#ffffff" stroke="#329e3a" strokeWidth="2" />
      <path d="M22 38 Q40 32 58 38" stroke="#329e3a" strokeWidth="1.5" fill="none" />
      <path d="M22 46 Q40 50 58 46" stroke="#329e3a" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function BracketDeviceIcon(props: SVGProps<SVGSVGElement>) {
  // マルチブラケット
  return (
    <svg viewBox="0 0 80 80" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="6" width="68" height="68" rx="14" fill="#fde68a" />
      <line x1="12" y1="40" x2="68" y2="40" stroke="#a36f3a" strokeWidth="2" />
      {/* 歯 */}
      {[18, 28, 38, 48, 58].map((x) => (
        <g key={x}>
          <rect x={x - 4} y={32} width="8" height="14" rx="2" fill="#ffffff" stroke="#a36f3a" strokeWidth="1" />
          <rect x={x - 3} y={36} width="6" height="4" rx="1" fill="#58b85b" />
          <circle cx={x} cy="38" r="1" fill="#ffffff" />
        </g>
      ))}
    </svg>
  );
}
