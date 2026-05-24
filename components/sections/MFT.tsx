/**
 * セクション④MFT（口腔筋機能療法）とは
 * - 「お口のまわりの筋トレ」と言い換える、保護者と子どもの両方に届くトーン。
 * - カバのポコちゃんが「正しい舌の位置」を実演する図解。
 * - 保険適用条件（口腔機能発達不全症の診断 / 18歳未満）にも言及。
 * - 効果保証表現を避ける言い換え：「働きかけます」「サポートします」を採用。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HippoPoko } from '@/components/icons/HippoPoko';
import { MouthDiagram } from '@/components/icons/MouthDiagram';
import { LeafCluster } from '@/components/icons/LeafDeco';

const STEPS = [
  {
    title: '舌を正しい位置に置く練習',
    body: '上顎の少しふくらんだ「スポット」に、舌の先をぴたっと。普段の呼吸と飲み込みの土台になります。',
  },
  {
    title: '唇を閉じる力を育てる',
    body: '口を閉じて鼻で呼吸する習慣に近づけていきます。ボタンプルなど、遊びの延長のトレーニングです。',
  },
  {
    title: '飲み込み方を見直す',
    body: '舌が前に出る飲み込みのクセを整えていきます。歯並びの「後戻り」をしにくいお口に。',
  },
];

export function MFT() {
  return (
    <section
      id="mft"
      className="relative overflow-hidden bg-sunshine-50 py-14 dark:bg-jungle-900/60 sm:py-20"
      aria-labelledby="mft-heading"
    >
      <LeafCluster className="pointer-events-none absolute -left-6 top-6 h-16 w-24 opacity-70 sm:h-24 sm:w-32" />
      <LeafCluster className="pointer-events-none absolute -right-6 bottom-6 h-16 w-24 rotate-180 opacity-70 sm:h-24 sm:w-32" />

      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 3 ｜ MFTって？"
            title={
              <span id="mft-heading">
                MFTは、ひとことで言うと
                <br className="sm:hidden" />
                <span className="text-jungle-700 dark:text-sunshine-200">「お口のまわりの筋トレ」</span>
              </span>
            }
            lead="舌・唇・頬の筋肉を整えるトレーニング。口呼吸や舌の癖に働きかけ、矯正と並行することで歯並びの後戻りをしにくいお口づくりをサポートします。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-5 rounded-3xl bg-white p-5 shadow-leaf dark:bg-jungle-900 sm:grid-cols-2 sm:p-8">
            {/* 図解 */}
            <div className="flex flex-col items-center gap-3">
              <MouthDiagram className="h-auto w-full" />
              <div className="flex items-center gap-3">
                <HippoPoko decorative className="h-20 w-20 animate-floaty" />
                <p className="text-xs text-earth-700 dark:text-earth-200">
                  カバの<strong>ポコちゃん</strong>と一緒に、舌の正しい位置を見つけよう。
                </p>
              </div>
            </div>
            {/* ステップ */}
            <ol className="flex flex-col gap-3">
              {STEPS.map((s, i) => (
                <li key={s.title} className="rounded-2xl border-2 border-jungle-100 bg-jungle-50 p-4 dark:border-jungle-700 dark:bg-jungle-800">
                  <div className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-jungle-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-jungle-800 dark:text-sunshine-100">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-earth-700 dark:text-earth-100">{s.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* 保険適用について */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border-2 border-dashed border-jungle-300 bg-white p-4 text-sm leading-relaxed text-earth-800 dark:bg-jungle-900 dark:text-earth-100 sm:p-5">
            <p className="font-bold text-jungle-700 dark:text-sunshine-200">保険適用について</p>
            <p className="mt-1">
              18歳未満で「口腔機能発達不全症」の診断要件を満たす場合、保険診療の対象となるケースがあります。診断・適用の可否は診察にて個別に判断いたします。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
