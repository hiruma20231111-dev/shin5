/**
 * SectionHeading
 * - 各セクション冒頭の見出し共通コンポーネント
 * - 番号バッジ + 葉っぱアクセント + リード文
 */
import type { ReactNode } from 'react';
import { LeafSingle } from '@/components/icons/LeafDeco';

type Props = {
  step?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ step, title, lead, align = 'center' }: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {step && (
        <div className="inline-flex items-center gap-2 rounded-full bg-jungle-100 px-4 py-1 text-sm font-bold text-jungle-700 dark:bg-jungle-800 dark:text-sunshine-200">
          <LeafSingle className="h-4 w-4" />
          <span>{step}</span>
        </div>
      )}
      <h2 className="text-2xl font-extrabold leading-tight text-jungle-800 dark:text-sunshine-100 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="max-w-2xl text-sm leading-relaxed text-earth-700 dark:text-earth-200 sm:text-base">
          {lead}
        </p>
      )}
    </div>
  );
}
