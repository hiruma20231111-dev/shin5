/**
 * ゾウの「ハナちゃん」
 * - 役割: やさしい案内役 / 定期検診・院長メッセージなど安心セクション担当
 */
import type { AnimalIconProps } from './types';

export function ElephantHana({ decorative, title = 'ゾウの「ハナちゃん」', className, ...rest }: AnimalIconProps) {
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
      <ellipse cx="100" cy="182" rx="60" ry="6" fill="#15411d" opacity="0.2" />
      {/* 体 */}
      <ellipse cx="100" cy="140" rx="55" ry="42" fill="#bae6fd" />
      <ellipse cx="100" cy="150" rx="40" ry="30" fill="#e0f2fe" />
      {/* 頭 */}
      <ellipse cx="100" cy="85" rx="46" ry="42" fill="#7dd3fc" />
      {/* 耳 */}
      <ellipse cx="55" cy="80" rx="20" ry="28" fill="#7dd3fc" />
      <ellipse cx="55" cy="80" rx="12" ry="20" fill="#fb7185" opacity="0.3" />
      <ellipse cx="145" cy="80" rx="20" ry="28" fill="#7dd3fc" />
      <ellipse cx="145" cy="80" rx="12" ry="20" fill="#fb7185" opacity="0.3" />
      {/* 鼻（カールしたトランク） */}
      <path
        d="M100 100 Q100 130 90 145 Q80 158 95 165 Q105 168 108 160"
        stroke="#7dd3fc"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
      />
      {/* 目 */}
      <g>
        <circle cx="86" cy="80" r="4" fill="#15411d" />
        <circle cx="114" cy="80" r="4" fill="#15411d" />
        <rect x="80" y="73" width="12" height="8" rx="3" fill="#7dd3fc" className="origin-bottom animate-blink" />
        <rect x="108" y="73" width="12" height="8" rx="3" fill="#7dd3fc" className="origin-bottom animate-blink" />
      </g>
      {/* ほっぺ */}
      <circle cx="72" cy="95" r="4" fill="#fb7185" opacity="0.55" />
      <circle cx="128" cy="95" r="4" fill="#fb7185" opacity="0.55" />
      {/* 足 */}
      <rect x="65" y="165" width="16" height="18" rx="6" fill="#7dd3fc" />
      <rect x="119" y="165" width="16" height="18" rx="6" fill="#7dd3fc" />
    </svg>
  );
}
