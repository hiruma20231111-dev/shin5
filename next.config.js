/**
 * Next.js 設定
 * - Netlify への静的デプロイ前提のため `output: 'export'` を指定。
 * - 画像最適化サーバーは静的エクスポートと両立しないので `unoptimized: true`。
 *   全画像はSVG中心で構成しているためここは安全。
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
