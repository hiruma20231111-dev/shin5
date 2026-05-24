/**
 * セクション⑤小児矯正とは
 * - 1期/2期治療の違いを「フェーズ」として並列に示す（比較優位表現NG回避）。
 * - 装置はアイコン化して直感的に把握できる構成へ。
 * - 【MUST】リスク・副作用・期間・費用の個人差を明記（医療広告ガイドライン遵守）。
 * - リスク項目はアイコン付きの3列カード化で視覚的に整理。本文は短い動詞中心に圧縮。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { ParrotKoko } from '@/components/icons/ParrotKoko';
import {
  FloorDeviceIcon,
  FunctionalDeviceIcon,
  BracketDeviceIcon,
} from '@/components/icons/DeviceIcons';

const DEVICES = [
  {
    Icon: FloorDeviceIcon,
    name: '床（しょう）装置',
    body: '取り外し可能。顎の幅を広げる方向に働きかけます。',
  },
  {
    Icon: FunctionalDeviceIcon,
    name: '機能的矯正装置',
    body: '上下の顎の位置関係に働きかけるタイプ。',
  },
  {
    Icon: BracketDeviceIcon,
    name: 'マルチブラケット',
    body: '永久歯期に、歯並びそのものを整える装置。',
  },
];

const RISKS = [
  { icon: '😣', label: '違和感・軽い痛み', body: '装着初期は数日〜1週間程度、慣れるまでに個人差があります。' },
  { icon: '🩹', label: '粘膜の擦れ・口内炎', body: 'できる場合があります。状況に応じて調整します。' },
  { icon: '🧒', label: '装着協力が必要', body: '取り外し装置は装着時間が計画通り進まないことがあります。' },
  { icon: '↩️', label: '後戻りの可能性', body: '治療後も保定・経過観察を行います。' },
  { icon: '🦷', label: '虫歯予防の徹底', body: 'ご自宅ケアと定期通院でのクリーニングが欠かせません。' },
];

export function Orthodontics() {
  return (
    <section
      id="ortho"
      className="relative overflow-hidden bg-white py-14 dark:bg-jungle-900 sm:py-20"
      aria-labelledby="ortho-heading"
    >
      <SceneDecor variant="soft" />

      <div className="relative mx-auto max-w-3xl px-4 lg:max-w-5xl">
        <Reveal>
          <SectionHeading
            step="STEP 4 ｜ 小児矯正"
            title={<span id="ortho-heading">小児矯正の「1期」と「2期」</span>}
            lead="成長段階によって、できることが変わります。"
          />
        </Reveal>

        {/* フェーズ2枚（アイコン化＋短文） */}
        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <PhaseCard
              tag="1期治療"
              age="目安：5〜12歳"
              icon="🌱"
              title="顎の成長を導く"
              points={['永久歯のスペースを育てる', '就寝時のみで進めるケースも']}
              accent="jungle"
            />
            <PhaseCard
              tag="2期治療"
              age="目安：永久歯が生え揃って以降"
              icon="🌳"
              title="歯並びを整える"
              points={['歯の位置を細かく調整', '1期を経ると短く済むことも']}
              accent="earth"
            />
          </div>
        </Reveal>

        {/* 装置の種類（視覚化） */}
        <Reveal className="mt-10">
          <h3 className="flex items-center justify-center gap-2 text-lg font-bold text-jungle-800 dark:text-sunshine-100">
            <span className="h-1 w-6 rounded-full bg-jungle-500" aria-hidden />
            主な装置の種類
            <span className="h-1 w-6 rounded-full bg-jungle-500" aria-hidden />
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {DEVICES.map((d) => (
              <div
                key={d.name}
                className="flex flex-col items-center rounded-2xl border border-earth-200 bg-jungle-50 p-4 text-center dark:border-earth-700 dark:bg-jungle-800"
              >
                <d.Icon className="h-16 w-16" />
                <div className="mt-2 text-sm font-bold text-jungle-700 dark:text-sunshine-200">{d.name}</div>
                <p className="mt-1 text-xs leading-relaxed text-earth-700 dark:text-earth-100">{d.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* リスク・副作用・期間・費用の個人差（医療広告ガイドライン MUST） */}
        <Reveal className="mt-10">
          <div className="rounded-3xl border-2 border-coral-400/60 bg-coral-400/5 p-5 dark:bg-jungle-900/80 sm:p-6">
            <div className="flex items-start gap-3">
              <ParrotKoko decorative className="h-14 w-14 shrink-0 animate-floaty" />
              <div>
                <div className="text-xs font-bold text-coral-500">大切なお知らせ</div>
                <h3 className="text-lg font-extrabold text-coral-500 sm:text-xl">
                  治療をはじめる前に、必ずお読みください
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-earth-800 dark:text-earth-100">
                  小児矯正は医療行為であり、以下のような副作用やリスクがあります。
                </p>
              </div>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {RISKS.map((r) => (
                <li
                  key={r.label}
                  className="flex items-start gap-2 rounded-xl bg-white p-3 dark:bg-jungle-800"
                >
                  <span className="text-xl leading-none" aria-hidden>
                    {r.icon}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-coral-500">{r.label}</div>
                    <p className="text-xs leading-relaxed text-earth-700 dark:text-earth-100">{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl bg-sunshine-100 p-4 dark:bg-jungle-800">
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sunshine-500 text-sm font-bold text-white">¥</span>
                <div className="text-sm leading-relaxed text-jungle-900 dark:text-sunshine-100">
                  <p className="font-bold">治療期間・費用について</p>
                  <p className="mt-1">
                    お子さまの状態・装置・通院頻度などで
                    <strong className="underline decoration-coral-500 decoration-2 underline-offset-2">
                      期間および費用には個人差があります。
                    </strong>
                    具体的なお見積もりは診察時にご案内します。
                  </p>
                  <p className="mt-1 text-xs text-earth-700 dark:text-earth-200">
                    ※自由診療となるケースが多く、その場合は治療開始前に同意書にて費用総額をお示しします。
                  </p>
                </div>
              </div>
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
  icon,
  title,
  points,
  accent,
}: {
  tag: string;
  age: string;
  icon: string;
  title: string;
  points: string[];
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
  const bullet = accent === 'jungle' ? 'bg-jungle-500' : 'bg-earth-500';
  return (
    <article className={`rounded-3xl border-2 p-5 ${ring}`}>
      <div className="flex items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${tagColor}`}>{tag}</span>
        <span className="text-xs font-medium text-earth-700 dark:text-earth-200">{age}</span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-3xl" aria-hidden>{icon}</span>
        <h3 className="text-lg font-extrabold text-jungle-800 dark:text-sunshine-100">{title}</h3>
      </div>
      <ul className="mt-3 grid gap-1.5 text-sm text-earth-800 dark:text-earth-100">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${bullet}`} aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
