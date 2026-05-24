/**
 * 葉っぱの装飾 SVG（複数バリアント）
 * - セクション余白や見出し横に配置する用
 * - 全部 decorative 前提（aria-hidden）
 */
import type { SVGProps } from 'react';

export function LeafSingle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 56 Q4 24 32 8 Q60 24 56 56 Q40 40 32 56 Q24 40 8 56 Z" fill="#329e3a" />
      <path d="M32 14 L32 50" stroke="#1a5022" strokeWidth="2" />
      <path d="M32 22 L20 30 M32 30 L22 38 M32 38 L24 44 M32 22 L44 30 M32 30 L42 38 M32 38 L40 44" stroke="#1a5022" strokeWidth="1.5" />
    </svg>
  );
}

export function LeafCluster(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g className="origin-bottom-left animate-sway">
        <path d="M10 70 Q-5 30 35 10 Q55 30 50 70 Z" fill="#23802c" />
      </g>
      <g className="origin-bottom animate-sway" style={{ animationDelay: '0.7s' }}>
        <path d="M55 75 Q40 25 80 5 Q100 35 95 75 Z" fill="#329e3a" />
      </g>
      <g className="origin-bottom-right animate-sway" style={{ animationDelay: '1.4s' }}>
        <path d="M85 70 Q75 40 115 25 Q125 50 115 75 Z" fill="#58b85b" />
      </g>
    </svg>
  );
}

export function MonsteraLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 72 Q4 36 24 16 Q44 4 64 16 Q76 32 72 56 Q60 70 48 60 Q44 70 32 64 Q20 72 8 72 Z"
        fill="#23802c"
      />
      <path d="M32 16 L36 70" stroke="#1a5022" strokeWidth="2" />
      <path d="M32 28 L16 36 M34 38 L18 50 M36 50 L22 60 M34 28 L52 30 M36 38 L60 36 M40 50 L62 50" stroke="#1a5022" strokeWidth="1.5" />
    </svg>
  );
}
