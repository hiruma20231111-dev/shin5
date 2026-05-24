/**
 * CTAButtons
 * - LP内で繰り返し登場するCTAボタン群。
 * - メイン: LINEで気軽に相談 / サブ: チェックシートDL / サブ: 予約フォーム
 * - すべて href="#" のモック（要件通り）。
 * - 1タップで到達するため <a> をそのまま使い、スマホ可読サイズに最適化。
 */
import { LineIcon, DocumentIcon, CalendarIcon } from '@/components/icons/UtilityIcons';

type Variant = 'stacked' | 'inline';

export function CTAButtons({ variant = 'stacked' }: { variant?: Variant }) {
  const layout =
    variant === 'stacked'
      ? 'flex flex-col gap-3 w-full max-w-sm mx-auto'
      : 'flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center';

  return (
    <div className={layout}>
      <a
        href="#"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-jungle-600 px-6 py-4 text-base font-bold text-white shadow-leaf transition hover:-translate-y-0.5 hover:bg-jungle-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunshine-400 sm:text-lg"
        aria-label="LINEで気軽に相談する（無料）"
      >
        <LineIcon className="h-6 w-6 text-white" />
        <span>LINEで気軽に相談</span>
        <span className="rounded-full bg-sunshine-400 px-2 py-0.5 text-xs text-jungle-900">無料</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-jungle-600 bg-white px-6 py-3.5 text-base font-bold text-jungle-700 transition hover:bg-jungle-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunshine-400 dark:bg-jungle-900 dark:text-sunshine-100"
        aria-label="お口の発達チェックシートをダウンロードする（無料）"
      >
        <DocumentIcon className="h-5 w-5 text-jungle-600 dark:text-sunshine-200" />
        <span>お口の発達チェックシートDL</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-sunshine-400 px-6 py-3.5 text-base font-bold text-jungle-900 transition hover:-translate-y-0.5 hover:bg-sunshine-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jungle-600"
        aria-label="初回相談予約フォームへ進む"
      >
        <CalendarIcon className="h-5 w-5 text-jungle-900" />
        <span>初回相談を予約する</span>
      </a>
    </div>
  );
}
