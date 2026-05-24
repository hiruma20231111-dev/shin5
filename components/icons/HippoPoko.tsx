/**
 * カバの「ポコちゃん」
 * - 役割: お口チェック役 / お口を大きく開けてMFT解説を担当
 * - 大きな口で「正しい舌の位置」を見せる用途に向く
 */
import type { AnimalIconProps } from './types';

export function HippoPoko({ decorative, title = 'カバの「ポコちゃん」', className, ...rest }: AnimalIconProps) {
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
      <ellipse cx="100" cy="180" rx="60" ry="6" fill="#15411d" opacity="0.2" />
      {/* 体 */}
      <ellipse cx="100" cy="135" rx="55" ry="45" fill="#bbe5bb" />
      {/* お腹 */}
      <ellipse cx="100" cy="145" rx="35" ry="28" fill="#dcf2dc" />
      {/* 頭 */}
      <ellipse cx="100" cy="80" rx="55" ry="48" fill="#8cd28c" />
      {/* 耳 */}
      <circle cx="62" cy="45" r="10" fill="#8cd28c" />
      <circle cx="62" cy="45" r="5" fill="#fb7185" opacity="0.7" />
      <circle cx="138" cy="45" r="10" fill="#8cd28c" />
      <circle cx="138" cy="45" r="5" fill="#fb7185" opacity="0.7" />
      {/* 鼻先（マズル） */}
      <ellipse cx="100" cy="105" rx="42" ry="28" fill="#dcf2dc" />
      {/* 鼻の穴 */}
      <ellipse cx="88" cy="98" rx="3" ry="4" fill="#1a5022" />
      <ellipse cx="112" cy="98" rx="3" ry="4" fill="#1a5022" />
      {/* 口（大きく開いている＝MFT図解の土台） */}
      <ellipse cx="100" cy="120" rx="22" ry="12" fill="#1a5022" />
      <ellipse cx="100" cy="118" rx="18" ry="8" fill="#f43f5e" opacity="0.9" />
      {/* 上の歯 */}
      <rect x="84" y="110" width="6" height="6" fill="#ffffff" />
      <rect x="92" y="110" width="6" height="6" fill="#ffffff" />
      <rect x="102" y="110" width="6" height="6" fill="#ffffff" />
      <rect x="110" y="110" width="6" height="6" fill="#ffffff" />
      {/* 目 */}
      <g>
        <circle cx="82" cy="62" r="6" fill="#ffffff" />
        <circle cx="82" cy="62" r="3" fill="#15411d" />
        <circle cx="118" cy="62" r="6" fill="#ffffff" />
        <circle cx="118" cy="62" r="3" fill="#15411d" />
      </g>
      {/* 足 */}
      <ellipse cx="70" cy="178" rx="14" ry="6" fill="#58b85b" />
      <ellipse cx="130" cy="178" rx="14" ry="6" fill="#58b85b" />
    </svg>
  );
}
