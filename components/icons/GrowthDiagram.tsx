/**
 * 顎の成長フェーズ図解
 * - 「子どもの矯正」と「大人の矯正」のフェーズの違いを視覚化
 * - 木が育つメタファー：芽 → 苗木 → 大木
 */
import type { SVGProps } from 'react';

export function GrowthDiagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 360 220" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0" y="0" width="360" height="220" rx="16" fill="#f1faf1" />
      {/* 地面 */}
      <path d="M0 190 Q180 175 360 190 L360 220 L0 220 Z" fill="#85572f" />
      <path d="M0 195 Q180 188 360 195" stroke="#553720" strokeWidth="2" fill="none" />

      {/* 芽（〜5歳） */}
      <g>
        <circle cx="60" cy="190" r="14" fill="#329e3a" />
        <path d="M60 185 Q55 175 50 178 M60 185 Q65 175 70 178" stroke="#1a5022" strokeWidth="2" />
        <text x="60" y="215" fontSize="11" textAnchor="middle" fill="#1a5022" fontWeight="700">〜5歳</text>
      </g>

      {/* 苗木（5-10歳：1期治療の適期） */}
      <g>
        <rect x="172" y="130" width="8" height="60" fill="#85572f" />
        <ellipse cx="176" cy="120" rx="40" ry="32" fill="#329e3a" />
        <ellipse cx="155" cy="110" rx="22" ry="18" fill="#58b85b" />
        <ellipse cx="197" cy="110" rx="22" ry="18" fill="#58b85b" />
        <text x="176" y="215" fontSize="11" textAnchor="middle" fill="#1a5022" fontWeight="700">5〜10歳</text>
        {/* ハイライト */}
        <rect x="120" y="60" width="112" height="135" rx="8" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
        <text x="176" y="55" fontSize="11" textAnchor="middle" fill="#b45309" fontWeight="700">★1期治療の適期</text>
      </g>

      {/* 大木（永久歯期：2期治療） */}
      <g>
        <rect x="296" y="100" width="12" height="90" fill="#553720" />
        <ellipse cx="302" cy="90" rx="50" ry="46" fill="#23802c" />
        <ellipse cx="280" cy="70" rx="22" ry="18" fill="#329e3a" />
        <ellipse cx="324" cy="78" rx="22" ry="18" fill="#329e3a" />
        <text x="302" y="215" fontSize="11" textAnchor="middle" fill="#1a5022" fontWeight="700">永久歯期</text>
      </g>

      {/* 矢印 */}
      <path d="M85 195 L150 195" stroke="#85572f" strokeWidth="2" markerEnd="url(#ar)" />
      <path d="M225 195 L290 195" stroke="#85572f" strokeWidth="2" markerEnd="url(#ar)" />
      <defs>
        <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#85572f" />
        </marker>
      </defs>
    </svg>
  );
}
