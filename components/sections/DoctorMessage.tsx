/**
 * セクション⑦医院の想い・院長紹介
 * - 体験談が使えない分、信頼形成はここで作る。
 * - 院長は架空（実在不要）。経歴は医療広告ガイドラインの限定解除要件を満たすよう
 *   「学歴」「所属学会」「経験年数」などの客観的事実ベースで記載。
 * - 「日本一」「最高」等の比較優位表現は使用しない。
 * - 想いの言葉で「治療より、まず気づきを届けたい」スタンスを示す。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DoctorPortrait } from '@/components/icons/DoctorPortrait';
import { LeafSingle } from '@/components/icons/LeafDeco';

const CAREER = [
  '国立大学歯学部 卒業',
  '大学病院 小児歯科 勤務',
  '小児歯科専門医 取得',
  '日本小児歯科学会 / 日本口腔筋機能療法学会 所属',
  '小児歯科臨床 15年以上',
];

export function DoctorMessage() {
  return (
    <section
      id="doctor"
      className="bg-white py-14 dark:bg-jungle-900 sm:py-20"
      aria-labelledby="doctor-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 6 ｜ 医院の想い"
            title={<span id="doctor-heading">院長より、保護者の方へ</span>}
            lead="MFTや矯正の話の前に、お伝えしたいことがあります。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid items-start gap-6 sm:grid-cols-[260px_1fr] sm:gap-8">
            <div className="mx-auto w-full max-w-[260px] sm:mx-0">
              <DoctorPortrait className="h-auto w-full rounded-3xl shadow-warm" />
              <div className="mt-3 text-center">
                <div className="text-sm font-bold text-jungle-800 dark:text-sunshine-100">院長 まめのき あおい</div>
                <div className="text-xs text-earth-700 dark:text-earth-200">小児歯科専門医 / MFT指導歴 10年</div>
              </div>
            </div>

            <div>
              <blockquote className="relative rounded-3xl bg-jungle-50 p-5 text-earth-900 dark:bg-jungle-800 dark:text-earth-100 sm:p-6">
                <LeafSingle className="absolute -left-3 -top-3 h-10 w-10" />
                <p className="text-base leading-relaxed sm:text-lg">
                  「歯医者嫌いの子をゼロにしたい」。これがクリニックを始めた原点です。
                </p>
                <p className="mt-3 text-sm leading-relaxed sm:text-base">
                  治療は、本来はじまる前の<strong>「気づき」</strong>がいちばん大切。
                  お口ポカン、いびき、指しゃぶり——日常のちいさなサインに、保護者の方が
                  「あれ？」と気づけたなら、その時点でもう半分以上、お子さまの未来は守られています。
                </p>
                <p className="mt-3 text-sm leading-relaxed sm:text-base">
                  だから私たちは、治療を売るより前に、まず<strong>「知ること」</strong>と
                  <strong>「相談しやすさ」</strong>を届けます。LINEでも構いません。
                  どうぞお気軽に、お子さまの様子を教えてください。
                </p>
                <p className="mt-3 text-xs text-earth-700 dark:text-earth-200">— 院長</p>
              </blockquote>

              {/* 経歴 */}
              <div className="mt-6 rounded-2xl border border-earth-200 bg-white p-5 dark:border-earth-700 dark:bg-jungle-800">
                <h3 className="text-sm font-bold text-jungle-700 dark:text-sunshine-200">院長経歴</h3>
                <ul className="mt-3 grid gap-1.5 text-sm text-earth-800 dark:text-earth-100">
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
