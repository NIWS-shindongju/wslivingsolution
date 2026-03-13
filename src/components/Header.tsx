import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
  }, [location]);

  const menuItems = [
    { name: '우성이야기', path: '/about' },
    {
      name: '바닥재',
      path: '/flooring',
      submenu: [
        { name: '진 시리즈', path: '/flooring#jin' },
        { name: '아이코닉 스톤', path: '/flooring#iconic' },
        { name: '기타 마루', path: '/flooring#other' },
      ]
    },
    {
      name: '벽재',
      path: '/wall',
      submenu: [
        { name: '시그니월', path: '/wall#signiwall' },
        { name: '디자인월', path: '/wall#designwall' },
        { name: '디하임', path: '/wall#dheim' },
      ]
    },
    { name: '에코스텍·세이프월', path: '/ecostec' },
    { name: '맞춤가공', path: '/custom' },
    { name: '시공사례', path: '/portfolio' },
    { name: '견적문의', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <div className="flex items-baseline">
              <span className="font-serif text-2xl font-normal text-copper transition-colors group-hover:text-copper-dark">
                WS
              </span>
              <span className={`ml-1 font-serif text-xl font-light transition-colors ${
                isScrolled ? 'text-dark-slate' : 'text-white'
              } group-hover:text-copper`}>
                리빙솔루션
              </span>
            </div>
            <span className={`ml-3 text-xs font-light transition-colors ${
              isScrolled ? 'text-stone-gray' : 'text-white/70'
            }`}>
              by (주)우성인더스
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-normal transition-colors relative flex items-center space-x-1 ${
                    location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                      ? 'text-copper'
                      : isScrolled
                      ? 'text-charcoal hover:text-copper'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown size={16} />}
                </Link>
                <span className={`absolute bottom-[-8px] left-0 h-0.5 bg-copper transition-all ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}></span>

                {item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[180px]">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        className="block px-4 py-2 text-sm text-charcoal hover:text-copper hover:bg-warm-ivory transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={`hidden lg:flex items-center space-x-2 font-normal transition-colors ${
            isScrolled ? 'text-copper' : 'text-white'
          }`}>
            <Phone size={18} />
            <a href="tel:032-589-7744" className="text-base hover:text-copper-light transition-colors">
              032-589-7744
            </a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-dark-slate' : 'text-white'
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
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`text-base font-normal py-2 transition-colors flex justify-between items-center ${
                    location.pathname === item.path ? 'text-copper' : 'text-charcoal hover:text-copper'
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        className="block text-sm text-stone-gray hover:text-copper py-1"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:032-589-7744"
              className="flex items-center space-x-2 text-copper font-normal py-2 border-t border-gray-100 mt-2 pt-4"
            >
              <Phone size={18} />
              <span>032-589-7744</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
