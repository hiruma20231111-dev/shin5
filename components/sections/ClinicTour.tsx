/**
 * セクション⑧院内の世界観紹介
 * - LP最大の差別化ポイント。ジャングル風キッズスペース・診療台・待合のイラストで魅せる。
 * - 「行ってみたい」と子どもが言う＝親が動く構図を狙う。
 * - 実写素材は本テスト用途では入手しないため、世界観の強いイラスト構成で代替。
 *   将来クライアントが実写に差し替える際は ClinicInterior の各 variant を差し替え可能。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { ClinicInterior } from '@/components/icons/ClinicInterior';
import { MonkeyMaru } from '@/components/icons/MonkeyMaru';

const ROOMS = [
  {
    variant: 'kids' as const,
    title: 'ジャングル風キッズスペース',
    body: 'ツリーハウスの遊具、絵本ラック、ぬいぐるみの動物たち。「歯医者の待ち時間」を「冒険の準備時間」に。',
  },
  {
    variant: 'chair' as const,
    title: '動物モチーフの診療台',
    body: 'ちょっと座ってみたくなる、緑の診療チェア。お子さまの緊張を、視覚から少しでもほどきます。',
  },
  {
    variant: 'lobby' as const,
    title: '木のぬくもりの待合',
    body: '保護者の方がほっと一息つける、木と植物のラウンジ。窓から木漏れ日が入る穏やかな空間です。',
  },
];

export function ClinicTour() {
  return (
    <section
      id="clinic"
      className="relative overflow-hidden bg-jungle-50 py-14 dark:bg-jungle-900/40 sm:py-20"
      aria-labelledby="clinic-heading"
    >
      <SceneDecor variant="lush" />
      <MonkeyMaru
        decorative
        className="pointer-events-none absolute right-4 top-10 hidden h-20 w-20 animate-floaty sm:block lg:h-24 lg:w-24"
      />
      <div className="relative mx-auto max-w-5xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 7 ｜ 院内のご案内"
            title={<span id="clinic-heading">ジャングルへ、ようこそ。</span>}
            lead="「歯医者に行きたい」と、子どもが言う。それが私たちが目指す、いちばん自然な通院のかたちです。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {ROOMS.map((r) => (
              <figure
                key={r.variant}
                className="overflow-hidden rounded-3xl bg-white shadow-leaf dark:bg-jungle-900"
              >
                <ClinicInterior variant={r.variant} className="h-auto w-full" />
                <figcaption className="p-4">
                  <div className="text-sm font-bold text-jungle-800 dark:text-sunshine-100">{r.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-earth-700 dark:text-earth-100">{r.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-center text-xs text-earth-600 dark:text-earth-200">
            ※院内ビジュアルはコンセプトイメージです。実際の内装は院内案内ページにてご確認いただけます。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
