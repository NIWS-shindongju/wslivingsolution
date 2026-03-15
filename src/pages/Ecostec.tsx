import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Theater, BookOpen, Dumbbell, Briefcase, Church } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import { IMAGES } from '../constants/images';

export default function Ecostec() {
  const ecostecProducts = getProductsByCategory('ecostec');

  const getBadgeStyle = (badge: string) => {
    if (badge === 'NEW' || badge === 'NEW 2024' || badge === 'NEW 2025') {
      return 'bg-copper text-white';
    }
    if (badge === 'BEST' || badge === 'PREMIUM') {
      return 'bg-dark-slate text-white';
    }
    return 'bg-copper/10 text-copper';
  };

  const getProductImage = (productName: string) => {
    if (productName.includes('에코스텍')) return IMAGES.products.ecostec;
    if (productName.includes('세이프월')) return IMAGES.products.safewall;
    return IMAGES.products.ecostec;
  };

  const spaces = [
    { icon: Building2, title: '회의실', image: IMAGES.spaces.conferenceRoom },
    { icon: Theater, title: '강당', image: IMAGES.spaces.auditorium },
    { icon: BookOpen, title: '도서관', image: IMAGES.spaces.library },
    { icon: Dumbbell, title: '체육관', image: IMAGES.spaces.gymnasium },
    { icon: Briefcase, title: '사무실', image: IMAGES.spaces.office },
    { icon: Church, title: '교회', image: IMAGES.spaces.church },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[60vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroes.ecostec}
            alt="에코스텍 흡음 패널"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-charcoal to-dark-slate opacity-70">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-slate/90 to-dark-slate/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-6">
              FUNCTIONAL PANELS
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              소리를 다스리고<br />공간을 완성하다
            </h1>
            <p className="text-warm-ivory text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light">
              에코스텍 · 세이프월<br />
              20년 시공 노하우의 흡음 전문 솔루션
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
              기능성 인테리어 패널
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              흡음 · 준불연 · 친환경
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {ecostecProducts.map((product) => (
              <Link
                key={product.id}
                to={`/ecostec/${product.id}`}
                className="group bg-warm-ivory rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={getProductImage(product.name)}
                    alt={product.name}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.products.ecostec;
                    }}
                  />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal">자세히 보기</span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.badges.slice(0, 3).map((badge, i) => (
                      <span key={i} className={`px-2 py-1 rounded-full text-xs md:text-sm ${getBadgeStyle(badge)}`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-copper mb-2">{product.type}</div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-charcoal mb-3 group-hover:text-copper transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-gray mb-4 line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center text-copper font-normal text-sm">
                    자세히 <ArrowRight size={18} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-6">
              적용 공간
            </h2>
            <p className="text-base md:text-lg text-stone-gray font-light">
              다양한 공간에서 최적의 음향 환경을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {spaces.map((space) => (
              <div key={space.title} className="group">
                <div className="relative h-40 md:h-48 overflow-hidden rounded-xl">
                  <img
                    src={space.image}
                    alt={`${space.title} 인테리어`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.spaces.office;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <space.icon className="w-8 h-8 mb-2" />
                    <h3 className="font-bold text-lg">{space.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-6">
              27년간 쌓아온 현장 경험
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray mb-8 font-light leading-relaxed">
              우성리빙솔루션은 2005년부터 에코스텍을 시공해온<br className="hidden md:block" />
              국내 최장수 시공 파트너입니다.<br />
              국립중앙디지털도서관, 서울시 인재개발원,<br className="hidden md:block" />
              연세대학교, 국회의사당 등<br />
              까다로운 관공서·교육기관의 시공 실적을 보유하고 있습니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-warm-ivory rounded-lg p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-serif text-copper mb-2">2005</div>
                <div className="text-sm text-charcoal">첫 시공 이래</div>
              </div>
              <div className="bg-warm-ivory rounded-lg p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-serif text-copper mb-2">20+</div>
                <div className="text-sm text-charcoal">년 경험</div>
              </div>
              <div className="bg-warm-ivory rounded-lg p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-serif text-copper mb-2">100+</div>
                <div className="text-sm text-charcoal">시공 실적</div>
              </div>
              <div className="bg-warm-ivory rounded-lg p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-serif text-copper mb-2">1위</div>
                <div className="text-sm text-charcoal">시공 건수</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            에코스텍·세이프월<br />견적 문의
          </h2>
          <p className="text-gray-400 mb-8 font-light text-base md:text-lg lg:text-xl">
            동화기업 본사를 통해 문의하셔도,<br className="hidden md:block" />
            현장 상담은 저희가 담당합니다
          </p>
          <Link
            to="/contact"
            className="inline-block bg-copper hover:bg-copper-dark text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg text-base md:text-lg transition-all"
          >
            견적 요청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
