/**
 * ジャングル背景イラスト
 * - FV や各セクションの背景帯に使う木漏れ日のジャングル
 * - 葉っぱはグループ単位で animate-sway を当てて控えめに揺れる
 * - 装飾なので decorative=true 前提
 */
import type { AnimalIconProps } from './types';

export function JungleScene({ className, ...rest }: AnimalIconProps) {
  return (
    <svg
      viewBox="0 0 800 450"
      role="presentation"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="60%" stopColor="#bbe5bb" />
          <stop offset="100%" stopColor="#58b85b" />
        </linearGradient>
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 空〜地面 */}
      <rect x="0" y="0" width="800" height="450" fill="url(#skyGrad)" />
      {/* 太陽 */}
      <circle cx="640" cy="80" r="60" fill="#fcd34d" />
      <circle cx="640" cy="80" r="140" fill="url(#sunGrad)" className="animate-shine" />

      {/* 遠景の山 */}
      <path d="M0 320 L120 220 L240 290 L360 200 L500 280 L620 210 L800 290 L800 450 L0 450 Z" fill="#329e3a" opacity="0.6" />
      {/* 中景の丘 */}
      <path d="M0 360 Q200 300 400 360 T800 360 L800 450 L0 450 Z" fill="#23802c" />
      {/* 草地 */}
      <path d="M0 400 Q200 380 400 400 T800 400 L800 450 L0 450 Z" fill="#1a5022" />

      {/* 左の大きな葉 */}
      <g className="origin-bottom animate-sway">
        <path d="M40 420 Q-30 320 70 240 Q90 320 110 420 Z" fill="#23802c" />
        <path d="M80 420 L40 290" stroke="#1a5022" strokeWidth="2" />
      </g>
      {/* 右のヤシ */}
      <g className="origin-bottom animate-sway" style={{ animationDelay: '1.5s' }}>
        <rect x="710" y="220" width="14" height="180" fill="#553720" rx="6" />
        <path d="M717 220 Q650 180 600 200 Q670 220 717 230 Z" fill="#23802c" />
        <path d="M717 220 Q780 170 820 210 Q760 220 717 235 Z" fill="#329e3a" />
        <path d="M717 220 Q690 150 650 130 Q700 180 717 230 Z" fill="#23802c" />
        <path d="M717 220 Q740 150 800 140 Q760 190 720 230 Z" fill="#329e3a" />
      </g>

      {/* 木漏れ日の粒 */}
      <g opacity="0.7">
        <circle cx="200" cy="120" r="6" fill="#fef3c7" />
        <circle cx="320" cy="80" r="4" fill="#fef3c7" />
        <circle cx="480" cy="140" r="5" fill="#fef3c7" />
        <circle cx="550" cy="60" r="3" fill="#fef3c7" />
      </g>
    </svg>
  );
}
