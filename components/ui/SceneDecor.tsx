/**
 * SceneDecor
 * - FV のジャングルテイストを他セクションへ控えめに繋ぐ装飾レイヤー。
 * - 葉群（sway アニメ）と木漏れ日（shine アニメ）をセクション四隅に薄く配置。
 * - くどくならないよう opacity 30〜50%、ピクセルサイズも小ぶりに固定。
 * - すべて pointer-events-none / aria-hidden（装飾目的）。
 */
import { LeafCluster, LeafSingle, MonsteraLeaf } from '@/components/icons/LeafDeco';

type Variant = 'soft' | 'lush' | 'minimal';

export function SceneDecor({ variant = 'soft' }: { variant?: Variant }) {
  if (variant === 'minimal') {
    return (
      <>
        <LeafSingle
          aria-hidden
          className="pointer-events-none absolute -left-3 top-8 h-10 w-10 origin-bottom-left animate-sway opacity-40 sm:h-14 sm:w-14"
        />
        <LeafSingle
          aria-hidden
          className="pointer-events-none absolute -right-3 bottom-8 h-10 w-10 origin-bottom-right animate-sway opacity-40 sm:h-14 sm:w-14"
          style={{ animationDelay: '1.5s', transform: 'scaleX(-1)' }}
        />
      </>
    );
  }

  if (variant === 'lush') {
    return (
      <>
        <LeafCluster
          aria-hidden
          className="pointer-events-none absolute -left-6 top-2 h-16 w-24 opacity-60 sm:h-24 sm:w-32 lg:h-28 lg:w-40"
        />
        <MonsteraLeaf
          aria-hidden
          className="pointer-events-none absolute -right-4 top-12 h-12 w-12 origin-bottom-right animate-sway opacity-40 sm:h-16 sm:w-16"
          style={{ animationDelay: '0.6s' }}
        />
        <LeafCluster
          aria-hidden
          className="pointer-events-none absolute -right-6 bottom-2 h-16 w-24 rotate-180 opacity-60 sm:h-24 sm:w-32 lg:h-28 lg:w-40"
          style={{ animationDelay: '1.2s' }}
        />
        <SunSparkle className="pointer-events-none absolute right-8 top-10 h-3 w-3 opacity-70" />
        <SunSparkle className="pointer-events-none absolute left-10 bottom-12 h-2 w-2 opacity-60" style={{ animationDelay: '1.4s' }} />
      </>
    );
  }

  // soft（既定）：葉1組 + 小さなスパークル
  return (
    <>
      <LeafCluster
        aria-hidden
        className="pointer-events-none absolute -left-4 top-2 h-12 w-20 opacity-50 sm:h-16 sm:w-24 lg:h-20 lg:w-32"
      />
      <LeafCluster
        aria-hidden
        className="pointer-events-none absolute -right-4 bottom-2 h-12 w-20 rotate-180 opacity-50 sm:h-16 sm:w-24 lg:h-20 lg:w-32"
        style={{ animationDelay: '1s' }}
      />
      <SunSparkle className="pointer-events-none absolute left-12 top-12 h-2 w-2" />
    </>
  );
}

/**
 * 小さな木漏れ日スパークル
 * - shine アニメで明滅。FV の sun と統一感を出すための小道具。
 */
function SunSparkle({ className = '', ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      role="presentation"
      className={`animate-shine ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="12" cy="12" r="4" fill="#fde68a" />
      <path
        d="M12 1 L13 8 L20 12 L13 16 L12 23 L11 16 L4 12 L11 8 Z"
        fill="#fcd34d"
        opacity="0.7"
      />
    </svg>
  );
}
