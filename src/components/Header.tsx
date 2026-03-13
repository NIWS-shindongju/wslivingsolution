import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <div className="flex items-baseline">
              <span className="font-serif text-2xl font-bold text-copper transition-colors group-hover:text-copper-dark">
                WS
              </span>
              <span className={`ml-1 font-serif text-xl font-semibold transition-colors ${
                isScrolled ? 'text-dark' : 'text-white'
              } group-hover:text-copper`}>
                리빙솔루션
              </span>
            </div>
            <span className={`ml-3 text-xs font-medium transition-colors ${
              isScrolled ? 'text-medium-gray' : 'text-white/80'
            }`}>
              by 우성인더스
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path
                    ? 'text-copper'
                    : isScrolled
                    ? 'text-dark hover:text-copper'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-[-8px] left-0 w-0 h-0.5 bg-copper transition-all group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className={`hidden lg:flex items-center space-x-2 font-semibold transition-colors ${
            isScrolled ? 'text-copper' : 'text-white'
          }`}>
            <Phone size={20} />
            <a href="tel:032-589-7744" className="text-lg hover:text-copper-light transition-colors">
              032-589-7744
            </a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === item.path ? 'text-copper' : 'text-dark hover:text-copper'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:032-589-7744"
              className="flex items-center space-x-2 text-copper font-semibold py-2 border-t border-gray-100 mt-2 pt-4"
            >
              <Phone size={20} />
              <span>032-589-7744</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
