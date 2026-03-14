import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col space-y-3 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href="#"
        className="hidden md:flex w-12 h-12 md:w-14 md:h-14 bg-yellow-400 hover:bg-yellow-500 rounded-full items-center justify-center shadow-xl transition-all hover:scale-110"
        aria-label="카카오톡 상담"
      >
        <MessageCircle size={isMobile ? 22 : 24} className="text-dark-slate" />
      </a>

      <a
        href="tel:032-589-7744"
        className="w-12 h-12 md:w-14 md:h-14 bg-copper hover:bg-copper-light rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        aria-label="전화 문의"
      >
        <Phone size={isMobile ? 22 : 24} className="text-white" />
      </a>
    </div>
  );
}
