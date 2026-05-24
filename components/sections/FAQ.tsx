/**
 * セクション⑨よくあるご質問
 * - 8項目をアコーディオン形式で。<details>/<summary> を使い JS なしでもアクセシブル。
 * - 医療広告ガイドライン: 「必ず◯ヶ月で完了」のような効果保証は避け、「個人差」で答える。
 */
'use client';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SceneDecor } from '@/components/ui/SceneDecor';
import { ChevronIcon } from '@/components/icons/UtilityIcons';
import { ParrotKoko } from '@/components/icons/ParrotKoko';

const QA = [
  {
    q: 'いつから始めるのがよいですか？',
    a: 'お口の癖や呼吸のチェックは、3〜4歳ごろから可能です。本格的な「1期治療」の検討は5〜10歳が目安ですが、お子さまの成長には個人差がありますので、まずは一度ご相談ください。',
  },
  {
    q: 'うちの子は嫌がりそうで心配です。',
    a: '初回は「お口を見せられたらOK」「椅子に座れたらOK」というスタートで構いません。当院ではジャングルの世界観を通して、少しずつ慣れていけるステップを大切にしています。',
  },
  {
    q: '費用はどのくらいかかりますか？',
    a: '初回相談は無料です。MFTや矯正の費用は、お子さまの状態・使用する装置・通院頻度などによって変わるため、診察時に治療計画とあわせて個別にご説明します。',
  },
  {
    q: 'どのくらいの期間、通うことになりますか？',
    a: 'MFTは数か月〜1年程度のケースもあれば、より長期にわたるケースもあります。1期矯正は1〜2年が目安となるケースが多いですが、いずれも個人差があります。',
  },
  {
    q: '痛みはありますか？',
    a: '装置の装着初期に違和感や軽い痛みを感じるお子さまがいらっしゃいます。痛みに配慮した処置を心がけていますが、感じ方には個人差があります。',
  },
  {
    q: '保険は使えますか？',
    a: '18歳未満で「口腔機能発達不全症」の診断要件を満たすケースなど、保険適用となる場合があります。矯正治療自体は多くのケースで自由診療となります。',
  },
  {
    q: '学校や習い事と両立できますか？',
    a: '通院は3〜4週間に1回程度のペースが多く、土曜日も診療しています。装置についても、就寝時のみのタイプから常時装着のタイプまでご相談のうえ選んでいきます。',
  },
  {
    q: '保護者は一緒にいられますか？',
    a: '基本的に診療室に一緒にお入りいただけます。お子さまのご様子をその場でご確認いただきながら、ご質問にもお答えします。',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-14 dark:bg-jungle-900 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <SceneDecor variant="soft" />
      <ParrotKoko
        decorative
        className="pointer-events-none absolute right-2 top-10 hidden h-20 w-20 animate-floaty lg:block lg:h-28 lg:w-28"
      />
      <div className="relative mx-auto max-w-3xl px-4 lg:max-w-5xl">
        <Reveal>
          <SectionHeading
            step="STEP 8 ｜ Q&A"
            title={<span id="faq-heading">よくあるご質問</span>}
            lead="ご相談前に、保護者の方からよくいただく質問をまとめました。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <ul className="grid gap-3 lg:grid-cols-2">
            {QA.map((item, i) => (
              <li key={item.q}>
                <details className="group rounded-2xl border-2 border-jungle-100 bg-jungle-50 transition open:border-jungle-300 dark:border-jungle-700 dark:bg-jungle-800">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 text-left">
                    <div className="flex items-start gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-jungle-600 text-xs font-bold text-white">
                        Q{i + 1}
                      </span>
                      <span className="text-sm font-bold text-jungle-900 dark:text-sunshine-100 sm:text-base">
                        {item.q}
                      </span>
                    </div>
                    <ChevronIcon className="mt-1 h-5 w-5 shrink-0 text-jungle-700 group-open:rotate-180 dark:text-sunshine-200" />
                  </summary>
                  <div className="border-t border-jungle-200 px-4 py-3 text-sm leading-relaxed text-earth-800 dark:border-jungle-700 dark:text-earth-100 sm:text-base">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
