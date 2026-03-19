import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: '우성이야기', path: '/about' },
    {
      name: '바닥재',
      path: '/flooring',
      submenu: [
        { name: '진 시리즈', path: '/flooring' },
        { name: '아이코닉 스톤', path: '/flooring/iconic-stone' },
        { name: '기타 마루', path: '/flooring' },
      ]
    },
    {
      name: '벽재',
      path: '/wall',
      submenu: [
        { name: '시그니월', path: '/wall/signiwall' },
        { name: '디자인월', path: '/wall/designwall' },
        { name: '디하임', path: '/wall/dheim' },
      ]
    },
    { name: '에코스텍·세이프월', path: '/ecostec' },
    { name: '맞춤가공', path: '/custom' },
    { name: '시공사례', path: '/portfolio' },
    { name: '견적문의', path: '/contact' },
  ];

  const handleMobileMenuClick = (item: typeof menuItems[0]) => {
    if (item.submenu) {
      setMobileSubmenu(mobileSubmenu === item.name ? null : item.name);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center group">
            <div className="flex items-baseline">
              <span className="font-serif text-xl md:text-2xl font-normal text-copper transition-colors group-hover:text-copper-dark">
                WS
              </span>
              <span className={`ml-1 font-serif text-lg md:text-xl font-light transition-colors ${
                isScrolled ? 'text-dark-slate' : 'text-white'
              } group-hover:text-copper`}>
                동화
              </span>
            </div>
            <span className={`ml-3 text-xs font-light transition-colors hidden lg:inline ${
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
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto safe-bottom">
          <div className="container mx-auto px-5">
            <div className="flex items-center justify-between h-16 border-b border-gray-100">
              <Link to="/" className="flex items-center">
                <span className="font-serif text-xl font-normal text-copper">WS</span>
                <span className="ml-1 font-serif text-lg font-light text-dark-slate">동화</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-dark-slate">
                <X size={24} />
              </button>
            </div>

            <nav className="py-8 flex flex-col justify-center min-h-[calc(100vh-200px)]">
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <div key={item.path}>
                    {item.submenu ? (
                      <button
                        onClick={() => handleMobileMenuClick(item)}
                        className={`w-full text-left text-2xl font-serif font-light py-2 transition-colors flex justify-between items-center ${
                          location.pathname.startsWith(item.path) ? 'text-copper' : 'text-charcoal'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={20} className={`transition-transform ${mobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block text-2xl font-serif font-light py-2 transition-colors ${
                          location.pathname === item.path ? 'text-copper' : 'text-charcoal'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.submenu && mobileSubmenu === item.name && (
                      <div className="mt-3 space-y-3 pl-6 border-l-2 border-copper">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.path}
                            to={subitem.path}
                            className="block text-lg text-stone-gray hover:text-copper py-1"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-5 safe-bottom">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:032-589-7744"
                  className="flex items-center justify-center space-x-2 bg-copper text-white py-4 rounded-lg font-normal"
                >
                  <Phone size={20} />
                  <span>전화하기</span>
                </a>
                <a
                  href="http://pf.kakao.com/_pxoMRn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-yellow-400 text-charcoal py-4 rounded-lg font-normal"
                >
                  <MessageCircle size={20} />
                  <span>카카오톡</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
