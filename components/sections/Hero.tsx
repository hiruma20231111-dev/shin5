/**
 * セクション①ファーストビュー
 * - Instagram流入の離脱を防ぐ1.5スクロール以内の自分ごと化を担う最重要ブロック。
 * - ジャングル背景（JungleScene）＋動物キャラ＋メイン/サブコピー＋CTA。
 * - 「お口ポカン、指しゃぶり、いびき…気になっていませんか？」の自分ごと化フックを配置。
 * - 医療広告ガイドライン: 効果保証・比較優位表現を含まない言い回しで統一。
 */
import { JungleScene } from '@/components/icons/JungleScene';
import { ParrotKoko } from '@/components/icons/ParrotKoko';
import { MonkeyMaru } from '@/components/icons/MonkeyMaru';
import { HippoPoko } from '@/components/icons/HippoPoko';
import { LionRio } from '@/components/icons/LionRio';
import { ElephantHana } from '@/components/icons/ElephantHana';
import { CTAButtons } from '@/components/ui/CTAButtons';
import { CharacterBadge } from '@/components/ui/CharacterBadge';
import { CHARACTERS } from '@/components/ui/CharacterRoster';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-sunshine-100 via-jungle-50 to-white pt-6 pb-12 dark:from-jungle-900 dark:via-jungle-800 dark:to-jungle-900 sm:pt-10 sm:pb-16"
      aria-label="ファーストビュー"
    >
      {/* 背景ジャングル */}
      {/* 動物がいる上部のみに収め、見出し下の本文が背景の濃緑と重ならないようにする */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30%] opacity-90 sm:h-[34%]">
        <JungleScene className="h-full w-full" />
        {/* 下端を強めに白色グラデでフェードさせ、見出し領域とのコントラストを確保 */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-sunshine-50/80 to-sunshine-50 dark:via-jungle-900/80 dark:to-jungle-900" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 lg:max-w-6xl">
        {/* 医院名ロゴ風 */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-jungle-700 shadow-sm backdrop-blur dark:bg-jungle-900/80 dark:text-sunshine-200">
          <span className="h-2 w-2 rounded-full bg-jungle-500" />
          まめのき小児歯科クリニック
        </div>

        {/* 動物キャラ（FVヒーロー）— PCでは横に広げる */}
        <div className="relative mt-2 h-48 w-full max-w-md sm:h-64 lg:h-72 lg:max-w-2xl">
          <ParrotKoko
            decorative
            className="absolute left-2 top-0 h-36 w-36 animate-floaty sm:h-44 sm:w-44 lg:h-52 lg:w-52"
            style={{ animationDelay: '0s' }}
          />
          <HippoPoko
            decorative
            className="absolute bottom-0 right-1 h-40 w-40 animate-floaty sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            style={{ animationDelay: '1s' }}
          />
          <MonkeyMaru
            decorative
            className="absolute bottom-4 left-1/2 h-32 w-32 -translate-x-1/2 animate-floaty sm:h-40 sm:w-40 lg:h-48 lg:w-48"
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* メインコピー */}
        <h1 className="mt-4 text-center text-[24px] font-extrabold leading-snug text-jungle-900 dark:text-sunshine-100 sm:text-4xl md:text-5xl">
          お口の癖は
          <br className="sm:hidden" />
          <span className="text-sunshine-600 dark:text-sunshine-300">お子様からの大事なサイン</span>
          かもしれません。
        </h1>

        {/* サブコピー */}
        <p className="mt-4 max-w-xl text-center text-sm font-bold text-jungle-800 dark:text-sunshine-100 sm:text-base md:text-lg">
          小児矯正・MFT・定期検診で、笑顔のままお口を育てる。
        </p>

        {/* 自分ごと化フック */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-sunshine-300/70 bg-white px-4 py-3 text-sm font-bold text-jungle-800 shadow-warm dark:bg-jungle-800 dark:text-sunshine-100">
          <span className="inline-block animate-wiggle" aria-hidden>
            🤔
          </span>
          お口ポカン、指しゃぶり、いびき…気になっていませんか？
        </div>

        {/* CTA */}
        <div className="mt-7 w-full">
          <CTAButtons variant="stacked" />
          <p className="mt-3 text-center text-xs text-earth-600 dark:text-earth-200">
            ※相談だけでもOK。治療を決めなくて大丈夫です。
          </p>
        </div>

        {/* キャラ紹介 — PCでは5体全員を出す */}
        <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-2xl sm:grid-cols-3 lg:max-w-4xl lg:grid-cols-5">
          <CharacterBadge name={CHARACTERS.koko.name} role={CHARACTERS.koko.role}>
            <ParrotKoko decorative className="h-full w-full" />
          </CharacterBadge>
          <CharacterBadge name={CHARACTERS.maru.name} role={CHARACTERS.maru.role}>
            <MonkeyMaru decorative className="h-full w-full" />
          </CharacterBadge>
          <CharacterBadge name={CHARACTERS.poko.name} role={CHARACTERS.poko.role}>
            <HippoPoko decorative className="h-full w-full" />
          </CharacterBadge>
          <CharacterBadge name={CHARACTERS.rio.name} role={CHARACTERS.rio.role} className="hidden lg:flex">
            <LionRio decorative className="h-full w-full" />
          </CharacterBadge>
          <CharacterBadge name={CHARACTERS.hana.name} role={CHARACTERS.hana.role} className="hidden lg:flex">
            <ElephantHana decorative className="h-full w-full" />
          </CharacterBadge>
        </div>
      </div>
    </section>
  );
}
