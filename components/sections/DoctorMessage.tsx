/**
 * セクション⑦医院の想い・院長紹介
 * - 体験談が使えない分、信頼形成はここで作る。
 * - 院長は架空（実在不要）。経歴は限定解除要件を満たす客観事実ベース。
 * - 「日本一」「最高」等の比較優位表現は使用しない。
 * - メッセージは長文ブロックではなく、3つのプルクオートに分割して
 *   「読み流せる/印象に残る」構成に整理。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { DoctorPortrait } from '@/components/icons/DoctorPortrait';
import { ElephantHana } from '@/components/icons/ElephantHana';

const CAREER = [
  '国立大学歯学部 卒業',
  '大学病院 小児歯科 勤務',
  '小児歯科専門医 取得',
  '日本小児歯科学会 / 日本口腔筋機能療法学会 所属',
  '小児歯科臨床 15年以上',
];

const PULL_QUOTES = [
  {
    headline: '「歯医者嫌いの子をゼロにしたい」',
    body: 'これがクリニックを始めた原点です。',
  },
  {
    headline: '治療より、まず「気づき」を。',
    body: '日常のちいさなサインに気づけたなら、その時点でもう半分以上、お子さまの未来は守られています。',
  },
  {
    headline: 'LINEでも、構いません。',
    body: '治療を決めなくて大丈夫。お気軽にお子さまの様子を教えてください。',
  },
];

export function DoctorMessage() {
  return (
    <section
      id="doctor"
      className="relative overflow-hidden bg-white py-14 dark:bg-jungle-900 sm:py-20"
      aria-labelledby="doctor-heading"
    >
      <SceneDecor variant="soft" />

      <div className="relative mx-auto max-w-4xl px-4 lg:max-w-5xl">
        <Reveal>
          <SectionHeading
            step="STEP 6 ｜ 医院の想い"
            title={<span id="doctor-heading">院長より、保護者の方へ</span>}
            lead="MFTや矯正の話の前に、お伝えしたいことがあります。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid items-start gap-6 sm:grid-cols-[260px_1fr] sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
            {/* 院長ポートレート */}
            <div className="mx-auto w-full max-w-[260px] sm:mx-0 lg:max-w-[300px]">
              <div className="relative">
                <DoctorPortrait className="h-auto w-full rounded-3xl shadow-warm" />
                <ElephantHana
                  decorative
                  className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 animate-floaty sm:h-20 sm:w-20"
                />
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm font-bold text-jungle-800 dark:text-sunshine-100">院長 まめのき あおい</div>
                <div className="text-xs text-earth-700 dark:text-earth-200">小児歯科専門医 / MFT指導歴 10年</div>
              </div>
            </div>

            {/* プルクオート×3 */}
            <div className="flex flex-col gap-4">
              {PULL_QUOTES.map((q, i) => (
                <blockquote
                  key={i}
                  className="relative rounded-3xl border-l-4 border-jungle-500 bg-jungle-50 p-5 dark:bg-jungle-800"
                >
                  <span
                    className="absolute -left-2 -top-3 grid h-7 w-7 place-items-center rounded-full bg-sunshine-400 text-xs font-bold text-jungle-900"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="text-base font-extrabold leading-snug text-jungle-800 dark:text-sunshine-100 sm:text-lg">
                    {q.headline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-earth-800 dark:text-earth-100">{q.body}</p>
                </blockquote>
              ))}

              {/* 経歴 */}
              <div className="mt-2 rounded-2xl border border-earth-200 bg-white p-5 dark:border-earth-700 dark:bg-jungle-800">
                <h3 className="flex items-center gap-2 text-sm font-bold text-jungle-700 dark:text-sunshine-200">
                  <span className="h-2 w-2 rounded-full bg-jungle-500" aria-hidden />
                  院長経歴
                </h3>
                <ul className="mt-3 grid gap-1.5 text-sm text-earth-800 dark:text-earth-100 sm:grid-cols-2">
                  {CAREER.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jungle-500" aria-hidden />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-earth-600 dark:text-earth-200">
                  ※専門医資格は所定の研修・試験を経て認定されたものです。
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
