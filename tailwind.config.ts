/**
 * Tailwind 設定
 * - ジャングル/南国/動物/笑顔のトーンに合わせたカラーパレットを CSS 変数経由で公開。
 * - ダークモードは class 戦略（OS設定に追従しつつ、温かみを残したダーク配色）。
 * - 動物の瞬きや葉揺れなど、控えめなアニメーションをユーティリティ化。
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jungle: {
          50: '#f1faf1',
          100: '#dcf2dc',
          200: '#bbe5bb',
          300: '#8cd28c',
          400: '#58b85b',
          500: '#329e3a',
          600: '#23802c',
          700: '#1e6526',
          800: '#1a5022',
          900: '#15411d',
        },
        earth: {
          50: '#faf5ef',
          100: '#f1e6d4',
          200: '#e3cba6',
          300: '#d2ab78',
          400: '#c08c54',
          500: '#a36f3a',
          600: '#85572f',
          700: '#6a4426',
          800: '#553720',
          900: '#3e281a',
        },
        sunshine: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        sky2: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
        },
      },
      fontFamily: {
        sans: [
          '"Hiragino Maru Gothic ProN"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        leaf: '0 8px 30px -10px rgba(35, 128, 44, 0.35)',
        warm: '0 12px 40px -12px rgba(163, 111, 58, 0.35)',
      },
      borderRadius: {
        leaf: '40% 60% 60% 40% / 60% 40% 60% 40%',
      },
      keyframes: {
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 5s ease-in-out infinite',
        sway: 'sway 6s ease-in-out infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        fadeUp: 'fadeUp 700ms ease-out both',
        shine: 'shine 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
