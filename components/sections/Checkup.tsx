/**
 * セクション⑥定期検診の役割
 * - 虫歯予防だけでなく、お口の発達チェックと「歯医者嫌いにさせない通院体験」を強調。
 * - 3つの柱をアイコン化＋短文で軽量に整理。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { ElephantHana } from '@/components/icons/ElephantHana';

const PILLARS = [
  {
    icon: '🦷',
    title: '虫歯と歯周病の予防',
    body: 'フッ素塗布・シーラント・クリーニング。',
    accent: 'jungle',
  },
  {
    icon: '🔍',
    title: 'お口の発達チェック',
    body: '噛み合わせ・舌・呼吸の習慣を継続観察。',
    accent: 'sun',
  },
  {
    icon: '😊',
    title: '通院に慣れる練習',
    body: '少しずつステップアップ。歯医者嫌いをつくらない。',
    accent: 'earth',
  },
] as const;

export function Checkup() {
  return (
    <section
      id="checkup"
      className="relative overflow-hidden bg-gradient-to-b from-jungle-50 to-white py-14 dark:from-jungle-900/60 dark:to-jungle-900 sm:py-20"
      aria-labelledby="checkup-heading"
    >
      <SceneDecor variant="soft" />

      <div className="relative mx-auto max-w-3xl px-4 lg:max-w-5xl">
        <Reveal>
          <SectionHeading
            step="STEP 5 ｜ 定期検診"
            title={<span id="checkup-heading">定期検診は「予防」だけじゃない</span>}
            lead="3〜4か月に一度の通院は、お口の発達と通院に慣れる練習の場でもあります。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border-2 border-earth-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-leaf dark:border-earth-700 dark:bg-jungle-900"
              >
                <div
                  className={`mx-auto mb-3 grid h-16 w-16 place-items-center rounded-2xl text-3xl ${
                    p.accent === 'jungle'
                      ? 'bg-jungle-100 dark:bg-jungle-800'
                      : p.accent === 'sun'
                      ? 'bg-sunshine-100 dark:bg-jungle-800'
                      : 'bg-earth-100 dark:bg-jungle-800'
                  }`}
                  aria-hidden
                >
                  {p.icon}
                </div>
                <h3 className="text-base font-extrabold text-jungle-800 dark:text-sunshine-100">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-earth-700 dark:text-earth-100">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex items-start gap-4 rounded-3xl bg-sunshine-100 p-5 dark:bg-jungle-800 sm:p-6">
            <ElephantHana decorative className="h-20 w-20 shrink-0 animate-floaty sm:h-24 sm:w-24" />
            <div>
              <div className="text-xs font-bold text-jungle-700 dark:text-sunshine-200">ハナちゃんからのおはなし</div>
              <p className="mt-1 text-base font-bold leading-relaxed text-jungle-900 dark:text-sunshine-100 sm:text-lg">
                「歯医者さん、こわくないよ」と
                <br className="sm:hidden" />
                言える経験を、小さいうちに。
              </p>
              <p className="mt-1 text-xs leading-relaxed text-earth-800 dark:text-earth-100">
                大人になってからの通院ハードルを下げる、いちばんの近道だと考えています。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
