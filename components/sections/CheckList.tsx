/**
 * セクション②気になるサインのチェックリスト
 * - 7項目。トーンは「3つ以上当てはまったら一度見せてください」と断定を避ける。
 * - インタラクティブにチェックできる UI（useState で管理）。
 * - 動物（マルくん）が指差すイラスト付き。
 */
'use client';

import { useMemo, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MonkeyMaru } from '@/components/icons/MonkeyMaru';
import { CheckIcon } from '@/components/icons/UtilityIcons';

const SIGNS = [
  'お口がポカンと開いている',
  '食べるのが遅い、こぼしやすい',
  '寝ているときに口が開く・いびきをかく',
  '発音が気になる音がある',
  '指しゃぶりが続いている',
  '飲み込むとき舌が前に出ているように見える',
  '鼻ではなく口で呼吸していることが多い',
] as const;

export function CheckList() {
  const [checked, setChecked] = useState<boolean[]>(() => SIGNS.map(() => false));

  const count = useMemo(() => checked.filter(Boolean).length, [checked]);
  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const message =
    count === 0
      ? '気になる項目を、お子さまの様子と照らしてチェックしてみてください。'
      : count < 3
      ? `${count}つチェックがつきました。様子を見つつ、気になることがあればご相談ください。`
      : `${count}つ当てはまっています。一度、お口の発達を見せていただけると安心です。`;

  return (
    <section
      id="signs"
      className="bg-jungle-50 py-14 dark:bg-jungle-900/40 sm:py-20"
      aria-labelledby="signs-heading"
    >
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <SectionHeading
            step="STEP 1 ｜ 気づき"
            title={
              <span id="signs-heading">
                こんなサイン、
                <br className="sm:hidden" />
                ありませんか？
              </span>
            }
            lead="ココ博士とマルくんと一緒に、お子さまのお口の様子をチェック。当てはまる項目をタップしてみてください。"
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="relative rounded-3xl bg-white p-5 shadow-leaf dark:bg-jungle-900 sm:p-8">
            {/* 指差し動物 */}
            <div
              className="pointer-events-none absolute -right-2 -top-12 h-24 w-24 sm:-right-4 sm:-top-16 sm:h-32 sm:w-32"
              aria-hidden
            >
              <MonkeyMaru decorative className="h-full w-full animate-floaty" />
            </div>

            <ul className="grid gap-2 sm:gap-3">
              {SIGNS.map((sign, i) => {
                const isOn = checked[i];
                return (
                  <li key={sign}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-pressed={isOn}
                      className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left text-sm font-medium transition sm:text-base ${
                        isOn
                          ? 'border-jungle-500 bg-jungle-100 text-jungle-900 dark:bg-jungle-700 dark:text-sunshine-100'
                          : 'border-earth-100 bg-white text-earth-800 hover:border-jungle-300 dark:border-earth-700 dark:bg-jungle-900 dark:text-sunshine-100'
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                          isOn ? 'border-transparent' : 'border-earth-300 dark:border-earth-500'
                        }`}
                        aria-hidden
                      >
                        {isOn ? (
                          <CheckIcon className="h-7 w-7" />
                        ) : (
                          <span className="block h-4 w-4 rounded-full bg-transparent" />
                        )}
                      </span>
                      <span>{sign}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* 結果メッセージ */}
            <div
              role="status"
              aria-live="polite"
              className="mt-6 rounded-2xl bg-sunshine-100 px-4 py-4 text-sm font-medium text-jungle-900 dark:bg-jungle-800 dark:text-sunshine-100 sm:text-base"
            >
              <span className="mr-2 inline-flex h-6 min-w-[28px] items-center justify-center rounded-full bg-sunshine-400 px-2 text-xs font-bold text-jungle-900">
                {count}/{SIGNS.length}
              </span>
              {message}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-earth-600 dark:text-earth-200">
              ※当てはまる場合でも、すぐに治療が必要とは限りません。お口の発達には個人差があります。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
