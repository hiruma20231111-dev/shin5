/**
 * Reveal
 * - Intersection Observer ベースのスクロール連動 fade-in。
 * - SSR/Static export 両対応のため "use client" 指定。
 * - prefers-reduced-motion の閲覧者は globals.css 側で即時表示。
 */
'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** ms 単位で発火を少し遅らせる */
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
