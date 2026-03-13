import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-6 lg:right-8 bottom-6 lg:bottom-8 flex flex-col space-y-3 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href="#"
        className="w-14 h-14 lg:w-16 lg:h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
        aria-label="카카오톡 상담"
      >
        <MessageCircle size={28} className="text-charcoal lg:w-8 lg:h-8" />
      </a>

      <a
        href="tel:032-589-7744"
        className="w-14 h-14 lg:w-16 lg:h-16 bg-copper hover:bg-copper-light rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
        aria-label="전화 문의"
      >
        <Phone size={28} className="text-white lg:w-8 lg:h-8" />
      </a>
    </div>
  );
}
