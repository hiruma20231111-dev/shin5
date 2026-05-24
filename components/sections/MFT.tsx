/**
 * セクション④MFT（口腔筋機能療法）とは
 * - 「お口のまわりの筋トレ」と言い換える、保護者と子どもの両方に届くトーン。
 * - カバのポコちゃんが「正しい舌の位置」を実演する図解。
 * - 保険適用条件（口腔機能発達不全症の診断 / 18歳未満）にも言及。
 * - 効果保証表現を避ける言い換え：「働きかけます」「サポートします」を採用。
 * - 各ステップは短いキーフレーズ + 短文に圧縮し、読み流しやすく。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { HippoPoko } from '@/components/icons/HippoPoko';
import { MouthDiagram } from '@/components/icons/MouthDiagram';

const STEPS = [
  {
    emoji: '👅',
    title: '舌を正しい位置に',
    body: '上顎の「スポット」に舌先をぴたっと。',
  },
  {
    emoji: '👄',
    title: '唇を閉じる力を育てる',
    body: '口を閉じて鼻で呼吸する習慣に。',
  },
  {
    emoji: '🫗',
    title: '飲み込み方を見直す',
    body: '舌が前に出るクセを整え、後戻りしにくいお口に。',
  },
];

export function MFT() {
  return (
    <section
      id="mft"
      className="relative overflow-hidden bg-sunshine-50 py-14 dark:bg-jungle-900/60 sm:py-20"
      aria-labelledby="mft-heading"
    >
      <SceneDecor variant="lush" />

      <div className="relative mx-auto max-w-3xl px-4 lg:max-w-5xl">
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
            lead="舌・唇・頬の筋肉を整えるトレーニング。矯正と並行することで、歯並びの後戻りをしにくいお口づくりをサポートします。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-5 rounded-3xl bg-white p-5 shadow-leaf dark:bg-jungle-900 sm:p-8 lg:grid-cols-[1fr_1.1fr]">
            {/* 図解 */}
            <div className="flex flex-col items-center gap-3">
              <MouthDiagram className="h-auto w-full" />
              <div className="flex items-center gap-3 rounded-2xl bg-jungle-50 p-3 dark:bg-jungle-800">
                <HippoPoko decorative className="h-20 w-20 animate-floaty" />
                <p className="text-xs leading-relaxed text-earth-700 dark:text-earth-100">
                  カバの<strong className="font-bold text-jungle-700 dark:text-sunshine-200">ポコちゃん</strong>と一緒に、
                  舌の正しい位置をマスター！
                </p>
              </div>
            </div>

            {/* ステップ */}
            <ol className="flex flex-col gap-3">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="flex items-center gap-3 rounded-2xl border-2 border-jungle-100 bg-jungle-50 p-3 dark:border-jungle-700 dark:bg-jungle-800 sm:p-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-2xl shadow-sm dark:bg-jungle-900" aria-hidden>
                    {s.emoji}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-jungle-600 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="text-base font-extrabold text-jungle-800 dark:text-sunshine-100">{s.title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-earth-700 dark:text-earth-100">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* 保険適用について（コンパクト化） */}
        <Reveal className="mt-6">
          <div className="flex items-start gap-3 rounded-2xl border-2 border-dashed border-jungle-300 bg-white p-4 dark:bg-jungle-900 sm:p-5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-jungle-600 text-sm font-bold text-white">保</span>
            <div className="text-sm leading-relaxed text-earth-800 dark:text-earth-100">
              <p className="font-bold text-jungle-700 dark:text-sunshine-200">保険適用について</p>
              <p>
                18歳未満で「口腔機能発達不全症」の診断要件を満たすケースでは、
                <strong>保険診療の対象となる場合があります</strong>。診断・適用の可否は診察にて個別に判断いたします。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
