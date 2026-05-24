/**
 * セクション③なぜ"いま"なのか
 * - 顎の成長期（5〜10歳）の意義をフェーズの違いとして解説。
 * - 「子どもの矯正」と「大人の矯正」を比較ではなく「フェーズの違い」として並べる
 *   （比較優位表現NGの回避）。
 * - テキスト密度を抑え、図解とキーフレーズで読み流せる構成に整理。
 * - 罪悪感を刺激しないトーンを徹底：「気づいた今が一番早いタイミング」で締める。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { GrowthDiagram } from '@/components/icons/GrowthDiagram';
import { ParrotKoko } from '@/components/icons/ParrotKoko';
import { MonkeyMaru } from '@/components/icons/MonkeyMaru';

export function WhyNow() {
  return (
    <section
      id="why-now"
      className="relative overflow-hidden bg-gradient-to-b from-white to-jungle-50 py-14 dark:from-jungle-900 dark:to-jungle-900/60 sm:py-20"
      aria-labelledby="why-now-heading"
    >
      <SceneDecor variant="soft" />

      <div className="relative mx-auto max-w-3xl px-4 lg:max-w-4xl">
        <Reveal>
          <SectionHeading
            step="STEP 2 ｜ 学ぶ"
            title={<span id="why-now-heading">なぜ&ldquo;いま&rdquo;なのか</span>}
            lead="5〜10歳は、お口の土台が育つ大切な時期。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-3xl bg-white p-5 shadow-leaf dark:bg-jungle-900 sm:p-8">
            {/* 図解 */}
            <GrowthDiagram className="h-auto w-full" />

            {/* キーフレーズの帯 */}
            <p className="mt-5 text-center text-base font-bold text-jungle-800 dark:text-sunshine-100 sm:text-lg">
              種が芽吹いて木に育つように、
              <br className="sm:hidden" />
              お口にも<span className="text-sunshine-600 dark:text-sunshine-300">「育てやすいフェーズ」</span>があります。
            </p>

            {/* フェーズ2枚 */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Phase
                label="子どもの矯正（1期）"
                color="jungle"
                tagline="成長の力が主役"
                summary="顎の発達そのものに働きかけ、永久歯のスペースを育てるフェーズ。"
              />
              <Phase
                label="大人の矯正（2期）"
                color="earth"
                tagline="歯の位置を整える"
                summary="永久歯が揃ったあと、歯並び自体を整えていくフェーズ。"
              />
            </div>

            {/* ココ博士の締めコメント */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sunshine-100 p-4 dark:bg-jungle-800">
              <ParrotKoko decorative className="h-16 w-16 shrink-0 animate-floaty" />
              <p className="text-sm leading-relaxed text-jungle-900 dark:text-sunshine-100">
                <span className="block font-bold text-jungle-700 dark:text-sunshine-200">ココ博士より</span>
                どちらが優れているという話ではなく、できることが変わるだけ。
                <strong className="font-bold text-jungle-700 underline decoration-sunshine-400 decoration-4 underline-offset-4 dark:text-sunshine-200">
                  気づいた今が、一番早いタイミング
                </strong>
                です。
              </p>
            </div>
          </div>
        </Reveal>

        {/* 装飾としてのマルくん（PC のみ右上にちょこんと） */}
        <MonkeyMaru
          decorative
          className="pointer-events-none absolute right-2 top-6 hidden h-20 w-20 animate-floaty lg:block xl:h-24 xl:w-24"
        />
      </div>
    </section>
  );
}

function Phase({
  label,
  tagline,
  summary,
  color,
}: {
  label: string;
  tagline: string;
  summary: string;
  color: 'jungle' | 'earth';
}) {
  const styles =
    color === 'jungle'
      ? 'border-jungle-300 bg-jungle-50 dark:border-jungle-700 dark:bg-jungle-800'
      : 'border-earth-300 bg-earth-50 dark:border-earth-700 dark:bg-earth-800/40';
  const accent = color === 'jungle' ? 'text-jungle-700 dark:text-sunshine-200' : 'text-earth-700 dark:text-earth-100';
  return (
    <div className={`rounded-2xl border-2 p-4 ${styles}`}>
      <div className={`text-xs font-bold ${accent}`}>{tagline}</div>
      <div className="mt-1 text-base font-extrabold text-jungle-900 dark:text-sunshine-100">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-earth-800 dark:text-earth-100">{summary}</p>
    </div>
  );
}
