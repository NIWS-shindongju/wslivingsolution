import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../constants/images';

export default function Wall() {
  const wallProducts = [
    {
      id: 'signiwall',
      name: '시그니월',
      type: '초대형 빅슬랩 벽장재',
      description: '1,010×2,460mm 아이코닉 스톤 패턴',
      imgSrc: IMAGES.iconic.wallProduct,
      alt: '시그니월 벽재',
      badges: ['NEW 2025', 'PREMIUM'],
      fallbackText: '시그니월'
    },
    {
      id: 'designwall',
      name: '디자인월',
      type: '입체무늬 벽장재',
      description: '600x300x7T 아트월/악센트월 전용',
      imgSrc: "",
      alt: '디자인월 벽재',
      badges: ['BEST'],
      fallbackText: '디자인월'
    },
    {
      id: 'designwall-grande',
      name: '디자인월 그란데',
      type: '대형 벽장재',
      description: '800x295x7T 넓은 벽면 시공 최적화',
      imgSrc: "",
      alt: '디자인월 그란데 벽재',
      badges: ['NEW'],
      fallbackText: '디자인월 그란데'
    },
    {
      id: 'dheim',
      name: '디하임',
      type: '가구 마감재',
      description: '친환경 E0 보드 LPM',
      imgSrc: IMAGES.iconic.furnitureProduct,
      alt: '디하임 가구재',
      badges: ['NEW 2024', 'ECO'],
      fallbackText: '디하임'
    },
  ];

  const iconicStonePatterns = [
    { key: 'monteWhite', name: '몬테화이트', isNew: true },
    { key: 'emotionBlanc', name: '이모션블랑', isNew: true },
    { key: 'saharaLight', name: '사하라라이트', isNew: false },
    { key: 'slateMotif', name: '슬레이트모티프', isNew: true },
    { key: 'slateSteel', name: '슬레이트스틸', isNew: false },
    { key: 'portlandMotif', name: '포틀랜드모티프', isNew: true },
    { key: 'portlandSteel', name: '포틀랜드스틸', isNew: false },
  ];

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
      <section className="relative h-[500px] md:h-[500px] overflow-hidden">
        <SafeImage
          src={IMAGES.iconic.wallProduct}
          alt="동화자연마루 아이코닉 스톤 컬렉션"
          className="absolute inset-0 w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8 h-full flex items-center">
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {wallProducts.map((product) => (
              <Link
                key={product.id}
                to={`/wall/${product.id}`}
                className="group bg-warm-ivory rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <SafeImage
                    src={product.imgSrc}
                    alt={product.alt}
                    className="w-full h-48 md:h-56 rounded-t-xl"
                    fallbackText={product.fallbackText || product.name}
                  />
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
                  <p className="text-stone-gray mb-4 text-xs md:text-sm line-clamp-2">{product.description}</p>
                  <div className="flex items-center text-copper font-normal text-xs md:text-sm">
                    자세히 <ArrowRight size={16} className="ml-1 md:size-5" />
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
              아이코닉 스톤 패턴 갤러리
            </h2>
            <p className="text-base md:text-lg text-stone-gray font-light mb-8">
              천연 스톤의 아름다움을 담은 7가지 패턴
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {iconicStonePatterns.map((pattern) => (
              <div key={pattern.key} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <SafeImage
                    src={IMAGES.iconic[pattern.key as keyof typeof IMAGES.iconic]}
                    alt={`아이코닉 스톤 ${pattern.name} 패턴`}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {pattern.isNew && (
                    <span className="absolute top-3 right-3 bg-copper text-white text-xs px-2 py-1 rounded-full font-medium">NEW</span>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white text-lg font-bold">{pattern.name}</h3>
                  </div>
                </div>
              </div>
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
