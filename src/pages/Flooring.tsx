import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants/images';

export default function Flooring() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.style.background = 'linear-gradient(135deg, #d4c5b0 0%, #b8a898 50%, #9c8b7a 100%)';
    }
  };

  const iconicStonePatterns = [
    { key: 'monteWhite', name: '몬테화이트', isNew: true },
    { key: 'emotionBlanc', name: '이모션블랑', isNew: true },
    { key: 'saharaLight', name: '사하라라이트', isNew: false },
    { key: 'slateMotif', name: '슬레이트모티프', isNew: true },
    { key: 'slateSteel', name: '슬레이트스틸', isNew: false },
    { key: 'portlandMotif', name: '포틀랜드모티프', isNew: true },
    { key: 'portlandSteel', name: '포틀랜드스틸', isNew: false },
  ];

  const jinSeriesProducts = [
    { id: 'jin-origin', name: '진 오리진', imgSrc: IMAGES.products.jinOrigin, alt: '진 오리진 바닥재', type: '원목강마루' },
    { id: 'jin-tera', name: '진 테라', imgSrc: IMAGES.products.jinTera, alt: '진 테라 바닥재', type: '광폭 강마루' },
    { id: 'jin-tera-max', name: '진 테라 맥스', imgSrc: IMAGES.products.jinTeraMax, alt: '진 테라 맥스 바닥재', type: '초광폭 강마루' },
    { id: 'jin-herringbone', name: '진 헤링본', imgSrc: IMAGES.products.jinHerringbone, alt: '진 헤링본 바닥재', type: '헤링본 패턴' },
    { id: 'jin-grande', name: '진 그란데', imgSrc: IMAGES.products.jinGrande, alt: '진 그란데 바닥재', type: '타일형 강마루' },
    { id: 'jin-grande-square', name: '진 그란데 스퀘어', imgSrc: IMAGES.products.jinGrandeSquare, alt: '진 그란데 스퀘어 바닥재', type: '정사각 타일형' },
    { id: 'jin-texture', name: '진 텍스처', imgSrc: IMAGES.products.jinTexture, alt: '진 텍스처 바닥재', type: '엠보싱 마감' },
  ];

  const otherFlooringProducts = [
    { id: 'natus', name: '나투스', imgSrc: IMAGES.products.natus, alt: '나투스 바닥재', type: '원목강마루' },
    { id: 'baum', name: '바움', imgSrc: IMAGES.products.baum, alt: '바움 바닥재', type: '프리미엄 원목' },
    { id: 'click-s', name: '클릭S', imgSrc: IMAGES.products.clickS, alt: '클릭S 바닥재', type: '강화마루' },
    { id: 'duo-texture', name: '듀오 텍스처', imgSrc: IMAGES.products.duoTexture, alt: '듀오 텍스처 바닥재', type: '강화마루' },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={IMAGES.heroes.flooring}
          alt="동화자연마루 바닥재"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-4 md:mb-6">
              FLOORING
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 leading-tight">
              동화자연마루<br />전 제품 라인업
            </h1>
            <p className="text-warm-ivory text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light">
              진 시리즈부터 아이코닉 스톤까지,<br />
              27년 경험으로 최적의 바닥재를 제안합니다
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-2 md:mb-4">
              아이코닉 스톤 컬렉션
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              천연 스톤의 아름다움을 담은 7가지 패턴
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {iconicStonePatterns.map((pattern) => (
              <div key={pattern.key} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img
                    src={IMAGES.iconic[pattern.key as keyof typeof IMAGES.iconic]}
                    alt={`아이코닉 스톤 ${pattern.name} 패턴`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={handleImageError}
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

      <section className="py-14 md:py-20 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-2 md:mb-4">
              진(Jin) 시리즈
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              프리미엄 강마루의 정점
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {jinSeriesProducts.map((product) => (
              <Link
                key={product.id}
                to={`/flooring/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.imgSrc}
                    alt={product.alt}
                    className="w-full h-48 md:h-64 object-cover rounded-t-xl"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal text-xs md:text-base">자세히 보기</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="text-xs text-copper mb-1 md:mb-2">{product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-copper font-normal text-xs md:text-sm">
                    자세히 <ArrowRight size={14} className="ml-1 md:hidden" /><ArrowRight size={18} className="ml-1 hidden md:inline" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-2 md:mb-4">
              기타 바닥재
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              다양한 공간에 맞는 선택
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {otherFlooringProducts.map((product) => (
              <Link
                key={product.id}
                to={`/flooring/${product.id}`}
                className="group bg-warm-ivory rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.imgSrc}
                    alt={product.alt}
                    className="w-full h-48 md:h-64 object-cover rounded-t-xl"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal text-xs md:text-base">자세히 보기</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="text-xs text-copper mb-1 md:mb-2">{product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-copper font-normal text-xs md:text-sm">
                    자세히 <ArrowRight size={14} className="ml-1 md:hidden" /><ArrowRight size={18} className="ml-1 hidden md:inline" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 leading-tight">
            어떤 바닥재가 <br className="md:hidden" />적합할지<br className="hidden md:block" />궁금하신가요?
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 font-light">
            공간 특성과 예산에 맞는 최적의 제품을 추천해드립니다
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
