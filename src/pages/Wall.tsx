import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getProductsByCategory } from '../data/products';

export default function Wall() {
  const wallProducts = getProductsByCategory('wall');

  const getBadgeStyle = (badge: string) => {
    if (badge === 'NEW' || badge === 'NEW 2024' || badge === 'NEW 2025') {
      return 'bg-copper text-white';
    }
    if (badge === 'BEST' || badge === 'PREMIUM') {
      return 'bg-dark-slate text-white';
    }
    return 'bg-copper/10 text-copper';
  };

  return (
    <div className="w-full">
      <section className="relative h-[60vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-charcoal to-dark-slate">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-slate/90 to-dark-slate/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-6">
              WALL & FURNITURE
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              벽 하나로<br />공간이 달라집니다
            </h1>
            <p className="text-warm-ivory text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light">
              시그니월 · 디자인월 · 디하임<br />
              프리미엄 벽장재와 가구 마감재
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
              모든 벽재 & 가구재 제품
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              벽장재부터 가구 도어재까지
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {wallProducts.map((product) => (
              <Link
                key={product.id}
                to={`/wall/${product.id}`}
                className="group bg-warm-ivory rounded-xl overflow-hidden hover-lift"
              >
                <div className="h-32 md:h-64 bg-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 p-4 text-center relative overflow-hidden">
                  [{product.image}]
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal text-xs md:text-sm">자세히 보기</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.badges.slice(0, 2).map((badge, i) => (
                      <span key={i} className={`px-2 py-1 rounded-full text-xs md:text-sm ${getBadgeStyle(badge)}`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs md:text-sm text-copper mb-2">{product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-gray mb-4 text-xs md:text-sm line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center text-copper font-normal text-xs md:text-sm">
                    자세히 <ArrowRight size={16} className="ml-1 md:size-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            공간에 맞는 벽재를<br />추천해드립니다
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-gray-400 mb-8 font-light">
            시공 환경과 디자인 콘셉트에 맞는 최적의 제품을 제안합니다
          </p>
          <Link
            to="/contact"
            className="inline-block bg-copper hover:bg-copper-dark text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg text-base md:text-lg transition-all"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
