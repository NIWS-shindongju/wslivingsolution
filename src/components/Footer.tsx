import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const menuItems = [
    { name: '우성이야기', path: '/about' },
    { name: '바닥재', path: '/flooring' },
    { name: '벽재', path: '/wall' },
    { name: '에코스텍·세이프월', path: '/ecostec' },
    { name: '맞춤가공', path: '/custom' },
    { name: '견적·시공', path: '/portfolio' },
    { name: '견적문의', path: '/contact' },
  ];

  return (
    <footer className="bg-dark-slate text-warm-ivory">
      <div className="border-t-2 border-copper"></div>
      <div className="container mx-auto px-5 md:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-baseline mb-4 justify-center md:justify-start">
              <span className="font-serif text-2xl font-normal text-copper">WS</span>
              <span className="ml-1 font-serif text-xl font-light text-white">동화</span>
            </div>
            <p className="text-sm text-gray-400 mb-3 font-light">
              동화기업이 현장을 맡긴<br />27년의 파트너
            </p>
            <div className="inline-block bg-copper/20 text-copper px-3 py-1 rounded-full text-xs font-normal mb-4">
              동화기업 공식 대리점
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="font-serif text-lg font-light mb-6 text-white">메뉴</h3>
            <nav className="grid grid-cols-2 gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-gray-400 hover:text-copper transition-colors font-light"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-lg font-light mb-6 text-white">연락처</h3>
            <div className="text-sm text-gray-400 space-y-2 font-light">
              <p className="font-normal text-white">주식회사 우성인더스 | 브랜드: 우성동화</p>
              <p>대표: 신만식</p>
              <p>사업자등록번호: 626-86-02954</p>
              <p className="font-normal text-copper mt-4 text-sm md:text-base">032-589-7744</p>
              <p className="mt-4">
                <span className="font-normal text-white">김포 공장</span><br />
                <span className="text-xs">경기도 김포시 통진읍 가현로 201-56</span>
              </p>
              <p className="mt-3">
                <span className="font-normal text-white">인천 사무실</span><br />
                <span className="text-xs">인천광역시 동구 방축로 37번길 30, 1동 121호</span>
              </p>
              <p className="mt-4">
                <a href="mailto:wsindus@wsindus.com" className="text-gray-400 hover:text-copper transition-colors">
                  wsindus@wsindus.com
                </a>
              </p>
              <p className="mt-3 text-xs">
                <span className="text-white">wsdongwha.com</span>
              </p>
            </div>
            <a href="https://smartstore.naver.com/wsindus" target="_blank" rel="noopener noreferrer" className="block bg-[#03C75A] hover:bg-[#02b351] text-white text-center py-4 rounded-lg text-lg font-normal mt-4 md:hidden transition-colors">스마트스토어 바로가기</a>
            <a href="tel:032-589-7744" className="block bg-copper text-white text-center py-4 rounded-lg text-lg font-normal mt-2 md:hidden">032-589-7744 전화하기</a>
          </div>
        </div>

        <div className="md:hidden px-0 py-4 border-t border-gray-700 text-center">
          <nav className="flex justify-center space-x-4 text-sm text-gray-400 font-light">
            <Link to="/contact" className="hover:text-copper transition-colors">견적문의</Link>
            <span>|</span>
            <Link to="/portfolio" className="hover:text-copper transition-colors">견적·시공</Link>
            <span>|</span>
            <a href="tel:032-589-7744" className="hover:text-copper transition-colors">전화하기</a>
          </nav>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-copper transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-copper transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500 font-light">
                © 2026 우성동화. All Rights Reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-1 text-xs text-gray-600">
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
