/**
 * CharacterBadge
 * - 動物キャラのアイコン＋名前バッジ。記憶定着のための共通UI。
 */
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  name: string;
  role: string;
  className?: string;
};

export function CharacterBadge({ children, name, role, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-14 w-14 shrink-0 animate-floaty">{children}</div>
      <div className="text-xs leading-tight">
        <div className="font-bold text-jungle-700 dark:text-sunshine-200">{name}</div>
        <div className="text-earth-700 dark:text-earth-200">{role}</div>
      </div>
    </div>
  );
}
