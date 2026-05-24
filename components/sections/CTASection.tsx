/**
 * セクション⑩CTA
 * - 「治療を決めなくて大丈夫」のトーンで心理的ハードルを下げる。
 * - メイン: LINEで気軽に相談 / サブ: チェックシートDL / サブ: 初回相談予約
 * - 動物（リオくん）の手招きイラストで温度感を演出。
 */
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButtons } from '@/components/ui/CTAButtons';
import { LionRio } from '@/components/icons/LionRio';
import { MonkeyMaru } from '@/components/icons/MonkeyMaru';
import { HippoPoko } from '@/components/icons/HippoPoko';

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-jungle-700 via-jungle-600 to-sunshine-500 py-16 text-white sm:py-24"
      aria-labelledby="cta-heading"
    >
      {/* 背景の葉模様 */}
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
        <svg viewBox="0 0 400 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pat" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 70 Q15 50 25 20 Q40 30 55 20 Q65 50 40 70 Z" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#leaf-pat)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-bold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sunshine-200" />
            まずは無料相談から
          </div>
          <h2 id="cta-heading" className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            気になった、その気持ちが
            <br />
            いちばんのスタートです。
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            予約も、治療も、決めなくて大丈夫。「うちの子、こんな様子なんだけど…」のひとことから、お話しましょう。
          </p>
        </Reveal>

        {/* 動物が手招き — 応援団長リオくんを中央に */}
        <Reveal className="mt-6">
          <div className="relative mx-auto h-44 w-full max-w-sm sm:h-52">
            <LionRio
              decorative
              className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 animate-floaty sm:h-52 sm:w-52"
            />
            <MonkeyMaru
              decorative
              className="absolute -left-1 bottom-0 h-24 w-24 animate-floaty sm:h-28 sm:w-28"
              style={{ animationDelay: '1s' }}
            />
            <HippoPoko
              decorative
              className="absolute -right-1 bottom-0 h-24 w-24 animate-floaty sm:h-28 sm:w-28"
              style={{ animationDelay: '1.7s' }}
            />
          </div>
          <p className="mt-2 text-xs text-white/85">
            応援団長の<strong className="font-bold">リオくん</strong>たちが、はじめの一歩を待っています。
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-3xl bg-white/95 p-5 text-jungle-900 shadow-warm dark:bg-jungle-900 dark:text-sunshine-100 sm:p-8">
            <CTAButtons variant="stacked" />
            <p className="mt-4 text-xs text-earth-700 dark:text-earth-200">
              ※相談・チェックシートは無料です。お申し込み後の勧誘行為は行いません。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
