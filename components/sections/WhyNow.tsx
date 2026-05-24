/**
 * セクション③なぜ"いま"なのか
 * - 顎の成長期（5〜10歳）の意義をフェーズの違いとして解説。
 * - 他院との比較ではなく、子どもの矯正と大人の矯正の「フェーズ」差として説明（比較優位表現NG回避）。
 * - 罪悪感を刺激しないトーンを徹底：「気づいた今が一番早いタイミング」で締める。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GrowthDiagram } from '@/components/icons/GrowthDiagram';
import { ParrotKoko } from '@/components/icons/ParrotKoko';

export function WhyNow() {
  return (
    <section
      id="why-now"
      className="bg-gradient-to-b from-white to-jungle-50 py-14 dark:from-jungle-900 dark:to-jungle-900/60 sm:py-20"
      aria-labelledby="why-now-heading"
    >
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 2 ｜ 学ぶ"
            title={<span id="why-now-heading">なぜ&ldquo;いま&rdquo;なのか</span>}
            lead="5〜10歳は、顎の骨が伸びやかに育つ時期。種が芽吹いて木に育つように、お口の土台も「育てやすいフェーズ」があります。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-3xl bg-white p-5 shadow-leaf dark:bg-jungle-900 sm:p-8">
            <GrowthDiagram className="h-auto w-full" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Phase
                label="子どもの矯正（1期）"
                color="jungle"
                description="顎の成長そのものに働きかけて、永久歯が並ぶスペースを育てていくフェーズ。装置よりも「成長の力」が主役です。"
              />
              <Phase
                label="大人の矯正（2期）"
                color="earth"
                description="永久歯が生え揃ったあとに、歯並び自体を整えるフェーズ。骨格はすでに固まっており、歯の位置を動かすアプローチが中心になります。"
              />
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sunshine-100 p-4 dark:bg-jungle-800">
              <ParrotKoko decorative className="h-14 w-14 shrink-0" />
              <p className="text-sm leading-relaxed text-jungle-900 dark:text-sunshine-100">
                <span className="font-bold">ココ博士より：</span>
                どちらが優れているという話ではなく、できることが変わるだけ。
                <span className="font-bold text-jungle-700 dark:text-sunshine-200">
                  気づいた今が、一番早いタイミング
                </span>
                です。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Phase({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: 'jungle' | 'earth';
}) {
  const styles =
    color === 'jungle'
      ? 'border-jungle-200 bg-jungle-50 text-jungle-900 dark:border-jungle-700 dark:bg-jungle-800 dark:text-sunshine-100'
      : 'border-earth-200 bg-earth-50 text-earth-900 dark:border-earth-700 dark:bg-earth-800/40 dark:text-earth-100';
  return (
    <div className={`rounded-2xl border-2 p-4 ${styles}`}>
      <div className="text-sm font-extrabold">{label}</div>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
