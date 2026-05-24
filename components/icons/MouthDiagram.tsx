/**
 * 「正しい舌の位置」イラスト
 * - MFTセクションで使う図解。ビフォーアフター写真NGの代替として採用。
 * - 口腔断面 + 舌の位置 + 上顎へのスポット
 */
import type { SVGProps } from 'react';

export function MouthDiagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 240" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="mouthBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="240" rx="20" fill="url(#mouthBg)" />
      {/* 顔の輪郭（横顔） */}
      <path
        d="M40 200 Q40 120 90 80 Q140 50 200 70 Q240 90 240 130 L240 160 Q220 175 200 180 L200 200 Z"
        fill="#fef3c7"
        stroke="#a36f3a"
        strokeWidth="2.5"
      />
      {/* 鼻 */}
      <path d="M210 100 Q220 110 230 115 Q220 122 210 122" stroke="#a36f3a" strokeWidth="2" fill="none" />
      {/* 唇 */}
      <path d="M170 158 Q200 162 220 160" stroke="#f43f5e" strokeWidth="3" fill="none" />
      {/* 口腔（半透明オーバーレイ） */}
      <path d="M150 130 Q190 130 220 140 L220 160 Q180 165 150 155 Z" fill="#ffffff" opacity="0.85" />
      {/* 上顎 */}
      <path d="M150 135 Q190 132 220 140" stroke="#1e6526" strokeWidth="3" fill="none" />
      {/* 上顎スポット（舌の正しい位置） */}
      <circle cx="175" cy="138" r="6" fill="#fbbf24" />
      <circle cx="175" cy="138" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      {/* 舌（正しい位置：上顎にぴったり） */}
      <path d="M155 142 Q175 132 200 140 Q215 148 200 158 Q175 162 155 156 Z" fill="#fb7185" />
      {/* 歯（上下それぞれ簡易表現） */}
      <g fill="#ffffff" stroke="#a36f3a" strokeWidth="0.8">
        <rect x="155" y="148" width="6" height="6" />
        <rect x="163" y="148" width="6" height="6" />
        <rect x="171" y="148" width="6" height="6" />
        <rect x="179" y="148" width="6" height="6" />
        <rect x="187" y="148" width="6" height="6" />
        <rect x="195" y="148" width="6" height="6" />
      </g>
      {/* キャプション */}
      <text x="20" y="30" fontSize="14" fill="#1e6526" fontWeight="700">正しい舌の位置（イラスト）</text>
      <text x="160" y="225" fontSize="11" fill="#85572f">★=スポット（上顎の少しふくらんだ場所）</text>
    </svg>
  );
}
