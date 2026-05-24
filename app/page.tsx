/**
 * トップページ — 11セクションを上から順に組み合わせるエントリ。
 * - スクロール導線：FV→共感（チェック）→教育（なぜ今/MFT/矯正/定期検診）→
 *   信頼（院長/院内）→Q&A→CTA→アクセス
 * - 各セクションは独立コンポーネント。ここでは順序の定義に専念する。
 */
import { Hero } from '@/components/sections/Hero';
import { CheckList } from '@/components/sections/CheckList';
import { WhyNow } from '@/components/sections/WhyNow';
import { MFT } from '@/components/sections/MFT';
import { Orthodontics } from '@/components/sections/Orthodontics';
import { Checkup } from '@/components/sections/Checkup';
import { DoctorMessage } from '@/components/sections/DoctorMessage';
import { ClinicTour } from '@/components/sections/ClinicTour';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <CheckList />
      <WhyNow />
      <MFT />
      <Orthodontics />
      <Checkup />
      <DoctorMessage />
      <ClinicTour />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
