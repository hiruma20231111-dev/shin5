/**
 * PlaceholderImage
 * - Unsplash等の外部画像が取得失敗した時、または初期から外部画像を使わない場合の
 *   ジャングルテーマSVGプレースホルダー。
 * - constraints の onError 差し替え要件に対応（本実装は全アセットをSVG/インライン構成に
 *   寄せたため、本コンポーネントを「最終的に画面に出る図」として直接使用する）。
 */
import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  /** 図の上に小さく入れるテキスト */
  label?: string;
};

export function PlaceholderImage({ label = '画像準備中', ...rest }: Props) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <defs>
        <linearGradient id="ph-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dcf2dc" />
          <stop offset="100%" stopColor="#bbe5bb" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" rx="14" fill="url(#ph-bg)" />
      <path d="M0 230 Q200 200 400 230 L400 300 L0 300 Z" fill="#329e3a" />
      <path d="M0 250 Q200 230 400 250 L400 300 L0 300 Z" fill="#23802c" />
      <circle cx="320" cy="60" r="30" fill="#fcd34d" />
      <g className="origin-bottom animate-sway">
        <path d="M70 280 Q40 220 100 180 Q120 230 110 280 Z" fill="#23802c" />
      </g>
      <text x="200" y="160" fontSize="14" textAnchor="middle" fill="#1a5022" fontWeight="600">
        {label}
      </text>
    </svg>
  );
}
