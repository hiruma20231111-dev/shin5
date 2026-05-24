/**
 * セクション⑪アクセス・診療時間・フッター
 * - 医療広告ガイドライン上「広告可能事項」を明記：
 *   医療法人名・管理者氏名・診療科目・住所・電話・診療時間・地図。
 * - フッターデータはすべて架空（要件の <context> 通り）。実在医院との混同を避けるため
 *   明示的に「架空」のサンプル表記を含める。
 */
import { PinIcon, PhoneIcon } from '@/components/icons/UtilityIcons';
import { LeafSingle } from '@/components/icons/LeafDeco';

const SCHEDULE = [
  { day: '月', am: '9:30–12:30', pm: '14:30–18:30' },
  { day: '火', am: '9:30–12:30', pm: '14:30–18:30' },
  { day: '水', am: '休診', pm: '休診' },
  { day: '木', am: '9:30–12:30', pm: '14:30–18:30' },
  { day: '金', am: '9:30–12:30', pm: '14:30–18:30' },
  { day: '土', am: '9:00–13:00', pm: '14:00–17:00' },
  { day: '日・祝', am: '休診', pm: '休診' },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-jungle-900 text-sunshine-100">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* 医院情報 */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <LeafSingle className="h-6 w-6" />
              <span className="text-lg font-extrabold">まめのき小児歯科クリニック</span>
            </div>
            <p className="mt-1 text-xs text-sunshine-200/80">医療法人社団まめのき会</p>

            <dl className="mt-6 grid gap-3 text-sm">
              <div className="flex items-start gap-3">
                <PinIcon className="h-5 w-5 shrink-0 text-sunshine-300" />
                <div>
                  <dt className="text-xs text-sunshine-200/80">所在地</dt>
                  <dd>〒000-0000 ◯◯県◯◯市まめのき町1-2-3 まめのきビル2F</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-sunshine-300" />
                <div>
                  <dt className="text-xs text-sunshine-200/80">電話</dt>
                  <dd>
                    <a href="tel:0000000000" className="underline-offset-2 hover:underline">
                      00-0000-0000
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <dl className="mt-6 grid gap-1 text-sm">
              <Row label="管理者氏名" value="まめのき あおい（小児歯科専門医）" />
              <Row label="診療科目" value="小児歯科 / 小児矯正歯科 / 一般歯科" />
              <Row label="病床数" value="無床診療所" />
              <Row label="開設年" value="20XX年" />
            </dl>
          </div>

          <div>
            <h3 className="text-sm font-bold text-sunshine-200">診療時間</h3>
            <div className="mt-2 overflow-hidden rounded-xl border border-jungle-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-jungle-800 text-sunshine-200">
                  <tr>
                    <th className="px-2 py-2">曜日</th>
                    <th className="px-2 py-2">午前</th>
                    <th className="px-2 py-2">午後</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((s) => (
                    <tr key={s.day} className="border-t border-jungle-700">
                      <td className="px-2 py-2 font-bold">{s.day}</td>
                      <td className="px-2 py-2">{s.am}</td>
                      <td className="px-2 py-2">{s.pm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 簡易地図（SVG） */}
            <h3 className="mt-6 text-sm font-bold text-sunshine-200">アクセス</h3>
            <MapMock />
            <p className="mt-2 text-xs leading-relaxed text-sunshine-200/80">
              ◯◯駅から徒歩5分／駐車場4台あり。ベビーカーでもご来院いただけます。
            </p>
          </div>
        </div>

        {/* 法的表記 */}
        <div className="mt-10 border-t border-jungle-700 pt-6 text-xs leading-relaxed text-sunshine-200/70">
          <p>
            本ページは医療広告ガイドラインを遵守して制作しています。掲載内容は一般的な情報提供であり、診療効果を保証するものではありません。治療には個人差があり、リスク・副作用については本文中およびご来院時にご説明いたします。
          </p>
          <p className="mt-2">
            ※本サイトの院名・住所・電話番号・院長氏名はポートフォリオ用の架空データです。実在の医療機関とは関係ありません。
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} まめのき小児歯科クリニック（架空）
          </p>
        </div>
      </div>
    </footer>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-3 text-sm">
      <dt className="text-sunshine-200/80">{label}</dt>
      <dd className="text-sunshine-100">{value}</dd>
    </div>
  );
}

function MapMock() {
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-jungle-700">
      <svg
        viewBox="0 0 320 160"
        aria-label="医院周辺の簡易地図（イメージ）"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
      >
        <rect x="0" y="0" width="320" height="160" fill="#dcf2dc" />
        {/* 道路 */}
        <rect x="0" y="70" width="320" height="20" fill="#ffffff" />
        <rect x="150" y="0" width="20" height="160" fill="#ffffff" />
        <line x1="0" y1="80" x2="320" y2="80" stroke="#85572f" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="160" y1="0" x2="160" y2="160" stroke="#85572f" strokeWidth="1" strokeDasharray="6 6" />
        {/* 公園 */}
        <circle cx="60" cy="40" r="25" fill="#329e3a" />
        <circle cx="50" cy="30" r="10" fill="#23802c" />
        {/* 医院ピン */}
        <g transform="translate(190 50)">
          <circle r="14" fill="#f59e0b" />
          <path d="M0 -14 C-14 -14 -14 6 0 18 C14 6 14 -14 0 -14 Z" fill="#f59e0b" />
          <text x="0" y="2" textAnchor="middle" fontSize="9" fill="#3e281a" fontWeight="700">
            当院
          </text>
        </g>
        {/* 駅 */}
        <g transform="translate(260 110)">
          <rect x="-18" y="-10" width="36" height="20" fill="#1e6526" />
          <text x="0" y="4" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">◯◯駅</text>
        </g>
      </svg>
    </div>
  );
}
