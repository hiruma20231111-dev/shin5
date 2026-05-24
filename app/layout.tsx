/**
 * ルートレイアウト
 * - 日本語固定、html lang="ja"
 * - SEO 用 metadata（Instagram からの流入を想定し OG を整える）
 * - ダークモードは prefers-color-scheme をスクリプトで html.classList に反映
 *   （Tailwind の class 戦略と一致）。FOUC を避けるため <body> 直前で実行。
 */
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'まめのき小児歯科クリニック｜MFT・小児矯正・定期検診',
  description:
    'お口の癖は5歳からのサインかもしれません。MFT（口腔筋機能療法）・小児矯正・定期検診で、笑顔のままお口を育てる小児歯科。LINEで気軽にご相談いただけます。',
  openGraph: {
    title: 'まめのき小児歯科クリニック｜MFT・小児矯正・定期検診',
    description:
      'ジャングルの仲間と一緒にお口を育てる小児歯科クリニック。お口ポカン・指しゃぶり・いびきが気になったら、まずはLINEでご相談ください。',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e6526',
};

const darkModeBootstrap = `
(function(){
  try{
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(stored === 'dark' || (!stored && prefersDark)){
      document.documentElement.classList.add('dark');
    }
  }catch(e){}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: darkModeBootstrap }}
        />
      </head>
      <body className="bg-[var(--bg-base)] text-[var(--text-base)] antialiased">
        {children}
      </body>
    </html>
  );
}
