/**
 * 院内ビジュアル（イラスト）
 * - キッズスペース・診療台・待合の3バリアントをジャングルテーマで描く
 * - 実写素材は本テスト用LPでは入手しないため、世界観を強めたイラストで代替
 */
import type { SVGProps } from 'react';

type Variant = 'kids' | 'chair' | 'lobby';
type Props = SVGProps<SVGSVGElement> & { variant: Variant };

export function ClinicInterior({ variant, ...rest }: Props) {
  if (variant === 'kids') return <KidsSpace {...rest} />;
  if (variant === 'chair') return <Chair {...rest} />;
  return <Lobby {...rest} />;
}

function KidsSpace(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 280" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="kids-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="280" rx="14" fill="url(#kids-wall)" />
      {/* 床 */}
      <path d="M0 200 L400 200 L400 280 L0 280 Z" fill="#85572f" />
      <path d="M0 200 L400 200" stroke="#553720" strokeWidth="2" />

      {/* 壁の大きな葉 */}
      <path d="M-10 200 Q-30 120 60 70 Q90 140 80 200 Z" fill="#329e3a" />
      <path d="M340 200 Q420 160 400 80 Q360 130 350 200 Z" fill="#23802c" />

      {/* ツリーハウス遊具 */}
      <rect x="150" y="160" width="100" height="40" fill="#85572f" rx="6" />
      <path d="M140 160 L260 160 L240 130 L160 130 Z" fill="#329e3a" />
      <rect x="190" y="170" width="20" height="30" fill="#fde68a" />
      <circle cx="200" cy="185" r="2" fill="#85572f" />

      {/* おもちゃの動物（小） */}
      <circle cx="100" cy="215" r="14" fill="#fb7185" />
      <circle cx="95" cy="212" r="2" fill="#15411d" />
      <circle cx="105" cy="212" r="2" fill="#15411d" />
      <ellipse cx="320" cy="218" rx="18" ry="12" fill="#fbbf24" />
      <circle cx="312" cy="215" r="2" fill="#15411d" />

      {/* 絵本ラック */}
      <rect x="40" y="160" width="50" height="40" fill="#a36f3a" />
      <rect x="44" y="165" width="8" height="32" fill="#f43f5e" />
      <rect x="54" y="165" width="8" height="32" fill="#329e3a" />
      <rect x="64" y="165" width="8" height="32" fill="#7dd3fc" />
      <rect x="74" y="165" width="8" height="32" fill="#fbbf24" />

      {/* キャプション帯 */}
      <rect x="0" y="245" width="400" height="35" fill="#23802c" opacity="0.85" />
      <text x="200" y="268" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="700">ジャングルキッズスペース</text>
    </svg>
  );
}

function Chair(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 280" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="chair-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dcf2dc" />
          <stop offset="100%" stopColor="#bbe5bb" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="280" rx="14" fill="url(#chair-wall)" />
      {/* 床 */}
      <rect x="0" y="220" width="400" height="60" fill="#f1e6d4" />

      {/* 天井ライト */}
      <rect x="180" y="0" width="40" height="14" fill="#a36f3a" />
      <ellipse cx="200" cy="50" rx="40" ry="20" fill="#fef3c7" stroke="#a36f3a" strokeWidth="2" />
      <ellipse cx="200" cy="48" rx="34" ry="14" fill="#ffffff" opacity="0.85" />

      {/* 診療台（動物モチーフ） */}
      <ellipse cx="200" cy="240" rx="120" ry="10" fill="#3e281a" opacity="0.3" />
      <rect x="120" y="180" width="160" height="60" rx="20" fill="#58b85b" />
      <rect x="100" y="120" width="60" height="80" rx="20" fill="#58b85b" />
      <rect x="240" y="120" width="60" height="80" rx="20" fill="#58b85b" />
      {/* 動物の顔（カバ風） */}
      <circle cx="130" cy="140" r="8" fill="#ffffff" />
      <circle cx="130" cy="140" r="3" fill="#15411d" />
      <circle cx="130" cy="160" r="3" fill="#1a5022" />
      <ellipse cx="200" cy="200" rx="35" ry="15" fill="#dcf2dc" />
      <text x="200" y="205" textAnchor="middle" fontSize="14" fill="#1a5022" fontWeight="700">JUNGLE</text>

      {/* キャプション */}
      <rect x="0" y="245" width="400" height="35" fill="#1e6526" opacity="0.85" />
      <text x="200" y="268" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="700">動物モチーフ診療台</text>
    </svg>
  );
}

function Lobby(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 280" aria-hidden role="presentation" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="lobby-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1faf1" />
          <stop offset="100%" stopColor="#dcf2dc" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="280" rx="14" fill="url(#lobby-wall)" />
      {/* 床 */}
      <rect x="0" y="210" width="400" height="70" fill="#e3cba6" />

      {/* 窓と外の景色 */}
      <rect x="40" y="40" width="140" height="120" fill="#bae6fd" stroke="#85572f" strokeWidth="4" />
      <line x1="110" y1="40" x2="110" y2="160" stroke="#85572f" strokeWidth="3" />
      <line x1="40" y1="100" x2="180" y2="100" stroke="#85572f" strokeWidth="3" />
      <circle cx="160" cy="65" r="14" fill="#fcd34d" />
      <path d="M40 130 L60 100 L80 130 L100 90 L130 130 L160 110 L180 130 Z" fill="#329e3a" />

      {/* 観葉植物（モンステラ） */}
      <rect x="230" y="155" width="36" height="50" rx="6" fill="#85572f" />
      <path d="M218 160 Q205 100 245 80 Q280 95 275 160 Z" fill="#23802c" />
      <path d="M255 75 L260 145" stroke="#1a5022" strokeWidth="1.5" />

      {/* ソファ */}
      <rect x="300" y="160" width="90" height="50" rx="10" fill="#a36f3a" />
      <rect x="300" y="145" width="90" height="20" rx="10" fill="#85572f" />
      <circle cx="320" cy="180" r="6" fill="#fde68a" />
      <circle cx="345" cy="180" r="6" fill="#fb7185" />

      {/* キャプション */}
      <rect x="0" y="245" width="400" height="35" fill="#85572f" opacity="0.9" />
      <text x="200" y="268" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="700">木のぬくもりの待合スペース</text>
    </svg>
  );
}
