/**
 * CharacterRoster
 * - 登場キャラクターの一覧データ。各セクションで参照する単一の真実の源。
 * - 名前を実装者が命名（要件 <context> の指示に従う）。
 */
export type Character = {
  name: string;
  role: string;
  description: string;
};

export const CHARACTERS = {
  koko: {
    name: 'ココ博士',
    role: 'オウム / 解説の博士',
    description: '難しいお口のしくみを、絵本のようにやさしく解説してくれる物知り博士。',
  },
  maru: {
    name: 'マルくん',
    role: 'サル / ジャングルのガイド',
    description: '次のページへの案内人。子どもを冒険気分で連れていってくれます。',
  },
  poko: {
    name: 'ポコちゃん',
    role: 'カバ / お口チェック係',
    description: '大きなお口を開けて、舌の正しい位置を見せてくれる練習担当。',
  },
  rio: {
    name: 'リオくん',
    role: 'ライオン / 応援団長',
    description: 'はじめの一歩を踏み出す勇気を、たてがみフリフリで応援。',
  },
  hana: {
    name: 'ハナちゃん',
    role: 'ゾウ / やさしい案内役',
    description: '長い鼻で、不安をそっと包み込むお姉さんポジション。',
  },
} as const satisfies Record<string, Character>;
