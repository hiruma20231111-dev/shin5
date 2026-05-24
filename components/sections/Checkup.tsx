/**
 * セクション⑥定期検診の役割
 * - 虫歯予防だけでなく、お口の発達チェックと「歯医者嫌いにさせない通院体験」を強調。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ElephantHana } from '@/components/icons/ElephantHana';

const PILLARS = [
  {
    title: '虫歯と歯周病の予防',
    body: 'フッ素塗布・シーラント・クリーニングなど、年齢に応じた予防処置を行います。',
    accent: 'jungle',
  },
  {
    title: 'お口の発達チェック',
    body: '噛み合わせ・舌の使い方・呼吸の習慣を継続的に観察。小さな変化に早く気づける体制を整えます。',
    accent: 'sun',
  },
  {
    title: '歯医者嫌いにさせない通院',
    body: '初回は「お口を見せられたらOK」から。少しずつ慣れていくステップを設計しています。',
    accent: 'earth',
  },
] as const;

export function Checkup() {
  return (
    <section
      id="checkup"
      className="bg-gradient-to-b from-jungle-50 to-white py-14 dark:from-jungle-900/60 dark:to-jungle-900 sm:py-20"
      aria-labelledby="checkup-heading"
    >
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 5 ｜ 定期検診"
            title={<span id="checkup-heading">定期検診は「予防」だけじゃない</span>}
            lead="3〜4か月に一度の通院は、虫歯予防と同じくらい「お口の発達チェック」と「通院に慣れる練習」の場でもあります。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-earth-100 bg-white p-5 shadow-sm dark:border-earth-700 dark:bg-jungle-900"
              >
                <div
                  className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-white ${
                    p.accent === 'jungle'
                      ? 'bg-jungle-600'
                      : p.accent === 'sun'
                      ? 'bg-sunshine-500'
                      : 'bg-earth-600'
                  }`}
                  aria-hidden
                >
                  ✓
                </div>
                <h3 className="text-base font-bold text-jungle-800 dark:text-sunshine-100">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-earth-700 dark:text-earth-100">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex items-start gap-4 rounded-3xl bg-sunshine-100 p-5 dark:bg-jungle-800 sm:p-6">
            <ElephantHana decorative className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
            <div>
              <h3 className="text-base font-bold text-jungle-800 dark:text-sunshine-100">
                ハナちゃんからのおはなし
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-earth-800 dark:text-earth-100">
                「歯医者さん、こわくないよ」と言える経験を、小さいうちにつくる。
                それが大人になってからの通院ハードルを下げる、いちばんの近道だとわたしたちは考えています。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
