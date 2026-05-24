/**
 * オウムの「ココ博士」
 * - 役割: 博士役 / 教育パートの解説担当
 * - 目元のまぶたに animate-blink を付与して瞬きを表現
 * - 装飾目的のときは decorative=true で aria-hidden
 */
import type { AnimalIconProps } from './types';

export function ParrotKoko({ decorative, title = 'オウムの博士「ココ博士」', className, ...rest }: AnimalIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {!decorative && <title>{title}</title>}
      {/* 葉っぱの台座 */}
      <ellipse cx="100" cy="175" rx="60" ry="8" fill="#1e6526" opacity="0.25" />

      {/* お腹（黄） */}
      <ellipse cx="100" cy="120" rx="48" ry="55" fill="#fde68a" />
      {/* 体（緑） */}
      <path
        d="M55 95 Q55 50 100 50 Q145 50 145 95 Q145 130 130 145 Q100 110 70 145 Q55 130 55 95 Z"
        fill="#329e3a"
      />
      {/* 羽 */}
      <path d="M55 95 Q40 110 50 140 Q65 130 70 110 Z" fill="#23802c" />
      <path d="M145 95 Q160 110 150 140 Q135 130 130 110 Z" fill="#23802c" />
      {/* 頭の赤いトサカ */}
      <path d="M85 45 Q90 25 100 30 Q110 25 115 45 Q105 40 100 45 Q95 40 85 45 Z" fill="#f43f5e" />
      {/* 顔 */}
      <circle cx="100" cy="78" r="38" fill="#dcf2dc" />
      {/* メガネ（博士らしさ） */}
      <circle cx="86" cy="82" r="11" fill="none" stroke="#1a5022" strokeWidth="2.5" />
      <circle cx="114" cy="82" r="11" fill="none" stroke="#1a5022" strokeWidth="2.5" />
      <line x1="97" y1="82" x2="103" y2="82" stroke="#1a5022" strokeWidth="2.5" />
      {/* 目 + 瞬きまぶた */}
      <g>
        <circle cx="86" cy="82" r="4" fill="#15411d" />
        <circle cx="114" cy="82" r="4" fill="#15411d" />
        <rect
          x="78"
          y="74"
          width="16"
          height="9"
          rx="3"
          fill="#dcf2dc"
          className="origin-bottom animate-blink"
        />
        <rect
          x="106"
          y="74"
          width="16"
          height="9"
          rx="3"
          fill="#dcf2dc"
          className="origin-bottom animate-blink"
        />
      </g>
      {/* くちばし */}
      <path d="M92 95 Q100 115 108 95 Q100 105 92 95 Z" fill="#f59e0b" />
      <path d="M92 95 Q100 100 108 95 L100 92 Z" fill="#d97706" />
      {/* ほっぺ */}
      <circle cx="74" cy="95" r="4" fill="#fb7185" opacity="0.6" />
      <circle cx="126" cy="95" r="4" fill="#fb7185" opacity="0.6" />
      {/* 足 */}
      <path d="M85 165 L80 178 M90 165 L92 178 M95 165 L100 178" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <path d="M110 165 L105 178 M115 165 L113 178 M120 165 L120 178" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
