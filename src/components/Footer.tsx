import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const menuItems = [
    { name: '우성이야기', path: '/about' },
    { name: '바닥재', path: '/floor' },
    { name: '벽재', path: '/wall' },
    { name: '에코스텍·세이프월', path: '/ecostec' },
    { name: '맞춤가공', path: '/custom' },
    { name: '시공사례', path: '/portfolio' },
    { name: '견적문의', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-warm-gray">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-baseline mb-4">
              <span className="font-serif text-2xl font-bold text-copper">WS</span>
              <span className="ml-1 font-serif text-xl font-semibold text-white">리빙솔루션</span>
            </div>
            <p className="text-sm text-gray-400 mb-3 font-medium">
              동화기업이 현장을 맡긴<br />27년의 파트너
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              1997년부터 27년간 동화기업 공식 대리점으로<br />
              목재 인테리어 자재의 납품과 시공을 전문으로 하는<br />
              현장 전문가 집단입니다.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">메뉴</h3>
            <nav className="grid grid-cols-2 gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-gray-400 hover:text-copper transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">연락처</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="font-semibold text-white">주식회사 우성인더스 | 우성리빙솔루션</p>
              <p>대표: 신만식</p>
              <p>사업자등록번호: 626-86-02954</p>
              <p className="font-semibold text-copper mt-4 text-base">032-589-7744</p>
              <p className="mt-4">
                <span className="font-semibold text-white">김포 공장</span><br />
                <span className="text-xs">경기도 김포시 통진읍 가현로 201-56</span>
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">인천 사무실</span><br />
                <span className="text-xs">인천광역시 동구 방축로 37번길 30, 1동 121호</span>
              </p>
              <p className="mt-4">
                <a href="mailto:wsindus@wsindus.com" className="text-gray-400 hover:text-copper transition-colors">
                  wsindus@wsindus.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-copper transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-copper transition-colors" aria-label="YouTube">
                <Youtube size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-copper transition-colors" aria-label="Blog">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v2h-2V7zm0 4h2v6h-2v-6z"/>
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                © 2026 우성리빙솔루션. All Rights Reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2 text-xs text-gray-600">
                <a href="#" className="hover:text-copper transition-colors">개인정보취급방침</a>
                <span>|</span>
                <a href="#" className="hover:text-copper transition-colors">이메일무단수집거부</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
