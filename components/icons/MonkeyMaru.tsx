/**
 * サルの「マルくん」
 * - 役割: ガイド役 / 各セクション間の案内・指差し担当
 */
import type { AnimalIconProps } from './types';

export function MonkeyMaru({ decorative, title = 'サルのガイド「マルくん」', className, ...rest }: AnimalIconProps) {
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
      <ellipse cx="100" cy="178" rx="55" ry="6" fill="#553720" opacity="0.25" />
      {/* 体 */}
      <ellipse cx="100" cy="125" rx="45" ry="48" fill="#85572f" />
      {/* お腹 */}
      <ellipse cx="100" cy="135" rx="30" ry="30" fill="#f1e6d4" />
      {/* しっぽ */}
      <path
        d="M140 130 Q170 130 170 95 Q170 70 150 70"
        stroke="#85572f"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {/* 頭 */}
      <circle cx="100" cy="75" r="42" fill="#85572f" />
      {/* 耳 */}
      <circle cx="63" cy="68" r="12" fill="#85572f" />
      <circle cx="63" cy="68" r="6" fill="#f1e6d4" />
      <circle cx="137" cy="68" r="12" fill="#85572f" />
      <circle cx="137" cy="68" r="6" fill="#f1e6d4" />
      {/* 顔の中央（白系） */}
      <ellipse cx="100" cy="85" rx="28" ry="26" fill="#f1e6d4" />
      {/* 目 */}
      <g>
        <circle cx="89" cy="78" r="4" fill="#15411d" />
        <circle cx="111" cy="78" r="4" fill="#15411d" />
        <rect
          x="83"
          y="71"
          width="12"
          height="8"
          rx="3"
          fill="#85572f"
          className="origin-bottom animate-blink"
        />
        <rect
          x="105"
          y="71"
          width="12"
          height="8"
          rx="3"
          fill="#85572f"
          className="origin-bottom animate-blink"
        />
      </g>
      {/* 鼻と口 */}
      <ellipse cx="100" cy="93" rx="3" ry="2" fill="#3e281a" />
      <path d="M88 100 Q100 110 112 100" stroke="#3e281a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="78" cy="92" r="4" fill="#fb7185" opacity="0.55" />
      <circle cx="122" cy="92" r="4" fill="#fb7185" opacity="0.55" />
      {/* 手（左：指差し） */}
      <g>
        <ellipse cx="60" cy="135" rx="14" ry="10" fill="#85572f" transform="rotate(-20 60 135)" />
        <circle cx="50" cy="128" r="6" fill="#f1e6d4" />
      </g>
      {/* 手（右） */}
      <ellipse cx="140" cy="150" rx="12" ry="9" fill="#85572f" />
      {/* 足 */}
      <ellipse cx="85" cy="170" rx="14" ry="8" fill="#85572f" />
      <ellipse cx="115" cy="170" rx="14" ry="8" fill="#85572f" />
    </svg>
  );
}
