/**
 * セクション⑤小児矯正とは
 * - 1期/2期治療の違い、装置の種類を簡潔に。
 * - 【MUST】リスク・副作用・期間・費用の個人差を明記。
 * - 医療広告ガイドライン: 「必ず治る」「短期間で完了」等の効果保証は使用しない。
 *   個人差ありきの言い回しに統一。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ParrotKoko } from '@/components/icons/ParrotKoko';

const DEVICES = [
  {
    name: '床（しょう）装置',
    body: '取り外しのできる装置で、顎の幅を広げる方向に働きかけます。',
  },
  {
    name: '機能的矯正装置',
    body: '上下の顎の位置関係に働きかけるタイプ。マウスピース状のものなど種類があります。',
  },
  {
    name: 'マルチブラケット（2期）',
    body: '永久歯が生え揃ったあとに、歯並びそのものを整えるための装置です。',
  },
];

const RISKS = [
  '装置の装着初期は、違和感や軽い痛みを感じることがあります（数日〜1週間程度で落ち着くケースが多いものの、個人差があります）。',
  '装置による粘膜の擦れ、口内炎ができる場合があります。',
  'お子さまが取り外し可能な装置の使用を続けられないと、計画通りに進まないことがあります。',
  '治療後も、後戻り（歯並びが少し戻る現象）が起こり得るため、保定や定期的な経過観察を行います。',
  '虫歯予防のため、ご自宅でのケアと定期的な通院でのクリーニングが欠かせません。',
];

export function Orthodontics() {
  return (
    <section
      id="ortho"
      className="bg-white py-14 dark:bg-jungle-900 sm:py-20"
      aria-labelledby="ortho-heading"
    >
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 4 ｜ 小児矯正"
            title={<span id="ortho-heading">小児矯正の「1期」と「2期」</span>}
            lead="お子さまの成長段階に合わせて、できることが変わります。どちらか一方だけで終わる方も、両方を組み合わせる方もいます。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <PhaseCard
              tag="1期治療"
              age="目安：5〜12歳ごろ"
              title="顎の成長を&ldquo;導く&rdquo;フェーズ"
              body="顎の発達期にあわせて、永久歯が並ぶスペースを育てていきます。装置を24時間使う必要があるとは限らず、就寝時のみのケースもあります。"
              accent="jungle"
            />
            <PhaseCard
              tag="2期治療"
              age="目安：永久歯が生え揃って以降"
              title="歯並び自体を&ldquo;整える&rdquo;フェーズ"
              body="永久歯が並んだ状態で、歯の位置を細かく整えます。1期治療を経たお子さまは、2期がより短く・少ない調整で済むケースもあります（個人差があります）。"
              accent="earth"
            />
          </div>
        </Reveal>

        {/* 装置の種類 */}
        <Reveal className="mt-8">
          <h3 className="text-lg font-bold text-jungle-800 dark:text-sunshine-100">主な装置の種類</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {DEVICES.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl border border-earth-200 bg-jungle-50 p-4 dark:border-earth-700 dark:bg-jungle-800"
              >
                <div className="text-sm font-bold text-jungle-700 dark:text-sunshine-200">{d.name}</div>
                <p className="mt-1 text-sm leading-relaxed text-earth-700 dark:text-earth-100">{d.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* リスク・副作用・期間・費用の個人差（医療広告ガイドライン MUST） */}
        <Reveal className="mt-8">
          <div className="rounded-3xl border-2 border-coral-400/60 bg-coral-400/5 p-5 dark:bg-jungle-900/80 sm:p-6">
            <div className="flex items-start gap-3">
              <ParrotKoko decorative className="h-14 w-14 shrink-0" />
              <div>
                <h3 className="text-base font-bold text-coral-500">
                  治療をはじめる前に、必ずお読みください
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-earth-800 dark:text-earth-100">
                  小児矯正は医療行為であり、以下のような副作用やリスクがあります。
                </p>
              </div>
            </div>
            <ul className="mt-4 grid gap-2">
              {RISKS.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 rounded-xl bg-white p-3 text-sm leading-relaxed text-earth-800 dark:bg-jungle-800 dark:text-earth-100"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-coral-500" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl bg-sunshine-100 p-4 text-sm leading-relaxed text-jungle-900 dark:bg-jungle-800 dark:text-sunshine-100">
              <p>
                <strong className="font-bold">治療期間・費用について：</strong>
                お子さまの成長段階・歯並びの状態・使用する装置・通院頻度などにより
                <strong className="font-bold">期間および費用には個人差があります。</strong>
                具体的なお見積もりは、診察時に治療計画とあわせてご説明します。
              </p>
              <p className="mt-2">
                自由診療（保険適用外）となるケースが多く、その場合は治療開始前に同意書にて費用総額をお示しします。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhaseCard({
  tag,
  age,
  title,
  body,
  accent,
}: {
  tag: string;
  age: string;
  title: string;
  body: string;
  accent: 'jungle' | 'earth';
}) {
  const ring =
    accent === 'jungle'
      ? 'border-jungle-300 bg-jungle-50 dark:bg-jungle-800'
      : 'border-earth-300 bg-earth-50 dark:bg-earth-800/40';
  const tagColor =
    accent === 'jungle'
      ? 'bg-jungle-600 text-white'
      : 'bg-earth-600 text-white';
  return (
    <article className={`rounded-3xl border-2 p-5 ${ring}`}>
      <div className="flex items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${tagColor}`}>{tag}</span>
        <span className="text-xs font-medium text-earth-700 dark:text-earth-200">{age}</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-jungle-800 dark:text-sunshine-100" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="mt-2 text-sm leading-relaxed text-earth-700 dark:text-earth-100">{body}</p>
    </article>
  );
}
