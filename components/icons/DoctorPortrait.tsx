/**
 * 院長ポートレート（イラスト）
 * - 実写素材は本テスト用LPでは入手しないため、温度感のあるイラスト肖像で代替。
 * - ハンドガイドラインに従い「実在の人物」ではないと分かるイラストにする
 *   （医療広告ガイドライン上、写真でない図解は誤認リスクが低い）。
 * - 笑顔・聴診器なし・子どもと並ぶ穏やかな構図。
 */
import type { SVGProps } from 'react';

export function DoctorPortrait(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="dr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#bbe5bb" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="400" rx="20" fill="url(#dr-bg)" />

      {/* 背景の葉 */}
      <g opacity="0.45">
        <path d="M-10 380 Q-30 280 50 240 Q60 320 70 380 Z" fill="#329e3a" />
        <path d="M350 60 Q420 100 380 180 Q330 140 340 80 Z" fill="#58b85b" />
      </g>

      {/* 肩・白衣 */}
      <path d="M70 400 Q70 290 200 280 Q330 290 330 400 Z" fill="#ffffff" />
      <path d="M180 300 L200 360 L220 300 Z" fill="#dcf2dc" />
      {/* 緑のネクタイ風アクセント */}
      <path d="M195 300 L205 300 L210 340 L200 360 L190 340 Z" fill="#329e3a" />

      {/* 首 */}
      <rect x="185" y="240" width="30" height="50" rx="8" fill="#f1e6d4" />

      {/* 顔 */}
      <ellipse cx="200" cy="200" rx="65" ry="72" fill="#fef3c7" />
      {/* 髪 */}
      <path d="M135 200 Q135 130 200 120 Q265 130 265 200 Q260 165 230 160 Q200 175 170 160 Q140 165 135 200 Z" fill="#3e281a" />
      {/* 耳 */}
      <ellipse cx="135" cy="205" rx="8" ry="14" fill="#f1e6d4" />
      <ellipse cx="265" cy="205" rx="8" ry="14" fill="#f1e6d4" />

      {/* メガネ */}
      <circle cx="178" cy="200" r="18" fill="none" stroke="#3e281a" strokeWidth="2.5" />
      <circle cx="222" cy="200" r="18" fill="none" stroke="#3e281a" strokeWidth="2.5" />
      <line x1="196" y1="200" x2="204" y2="200" stroke="#3e281a" strokeWidth="2.5" />

      {/* 目（穏やかな笑顔の弓型） */}
      <path d="M170 198 Q178 192 186 198" stroke="#3e281a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M214 198 Q222 192 230 198" stroke="#3e281a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* 鼻 */}
      <path d="M200 215 Q198 225 200 232" stroke="#a36f3a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 口 */}
      <path d="M186 248 Q200 258 214 248" stroke="#a36f3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="160" cy="225" r="6" fill="#fb7185" opacity="0.4" />
      <circle cx="240" cy="225" r="6" fill="#fb7185" opacity="0.4" />

      {/* 名札 */}
      <rect x="260" y="330" width="60" height="22" rx="4" fill="#fde68a" stroke="#a36f3a" strokeWidth="1" />
      <text x="290" y="345" fontSize="11" textAnchor="middle" fill="#3e281a" fontWeight="700">院長</text>
    </svg>
  );
}
