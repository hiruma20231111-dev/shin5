/**
 * ライオンの「リオくん」
 * - 役割: 応援役 / CTA・手招きセクションで保護者と子の背中を押す
 */
import type { AnimalIconProps } from './types';

export function LionRio({ decorative, title = 'ライオンの「リオくん」', className, ...rest }: AnimalIconProps) {
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
      <ellipse cx="100" cy="180" rx="55" ry="6" fill="#553720" opacity="0.25" />
      {/* たてがみ（外側） */}
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const cx = 100 + Math.cos(angle) * 52;
          const cy = 90 + Math.sin(angle) * 52;
          return <circle key={i} cx={cx} cy={cy} r="18" fill="#b45309" />;
        })}
      </g>
      {/* たてがみ（内側） */}
      <circle cx="100" cy="90" r="48" fill="#d97706" />
      {/* 顔 */}
      <circle cx="100" cy="90" r="38" fill="#fde68a" />
      {/* 体 */}
      <ellipse cx="100" cy="155" rx="40" ry="25" fill="#fde68a" />
      {/* 耳 */}
      <circle cx="72" cy="58" r="9" fill="#d97706" />
      <circle cx="128" cy="58" r="9" fill="#d97706" />
      {/* 目 */}
      <g>
        <circle cx="88" cy="84" r="4" fill="#3e281a" />
        <circle cx="112" cy="84" r="4" fill="#3e281a" />
        <rect x="82" y="77" width="12" height="8" rx="3" fill="#fde68a" className="origin-bottom animate-blink" />
        <rect x="106" y="77" width="12" height="8" rx="3" fill="#fde68a" className="origin-bottom animate-blink" />
      </g>
      {/* 鼻 */}
      <path d="M94 96 L106 96 L100 104 Z" fill="#3e281a" />
      {/* 口（笑顔） */}
      <path d="M88 108 Q100 118 112 108" stroke="#3e281a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="78" cy="100" r="4" fill="#fb7185" opacity="0.55" />
      <circle cx="122" cy="100" r="4" fill="#fb7185" opacity="0.55" />
      {/* 前足（手招き） */}
      <ellipse cx="70" cy="160" rx="10" ry="14" fill="#fde68a" transform="rotate(20 70 160)" />
      <ellipse cx="130" cy="160" rx="10" ry="14" fill="#fde68a" />
      {/* しっぽの先 */}
      <path d="M138 155 Q160 150 158 130" stroke="#fde68a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="158" cy="128" r="6" fill="#d97706" />
    </svg>
  );
}
