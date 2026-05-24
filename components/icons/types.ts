/**
 * 動物・装飾 SVG コンポーネント共通の型
 * - className でサイズや色のカスタマイズができるようにしておく
 * - aria-label は呼び出し側で明示できるよう Optional に
 */
import type { SVGProps } from 'react';

export type AnimalIconProps = SVGProps<SVGSVGElement> & {
  /** 装飾目的のときに true。Trueなら aria-hidden 付与。 */
  decorative?: boolean;
  /** スクリーンリーダー向けのラベル。decorative=true のときは無視。 */
  title?: string;
};
