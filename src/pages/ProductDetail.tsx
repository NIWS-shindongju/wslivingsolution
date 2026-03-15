import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { IMAGES } from '../constants/images';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-ivory">
        <div className="text-center px-5 md:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-charcoal mb-4">제품을 찾을 수 없습니다</h1>
          <p className="text-stone-gray mb-8">요청하신 제품이 존재하지 않거나 삭제되었습니다.</p>
          <Link to="/" className="inline-block bg-copper hover:bg-copper-dark text-white px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg rounded-lg transition-all">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = product.category === 'flooring' ? '바닥재' : product.category === 'wall' ? '벽재' : '기능성';
  const categoryPath = `/${product.category}`;

  const relatedProducts = product.relatedIds
    .map(id => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 3);

  const getBadgeStyle = (badge: string) => {
    if (badge === 'NEW' || badge === 'NEW 2024' || badge === 'NEW 2025') {
      return 'bg-copper text-white';
    }
    if (badge === 'BEST' || badge === 'PREMIUM') {
      return 'bg-dark-slate text-white';
    }
    return 'bg-copper/10 text-copper';
  };

  const getProductMainImage = (productName: string) => {
    // Iconic Stone patterns
    if (productName.includes('몬테 화이트')) return IMAGES.iconic.monteWhite;
    if (productName.includes('이모션 블랑')) return IMAGES.iconic.emotionBlanc;
    if (productName.includes('사하라 라이트')) return IMAGES.iconic.saharaLight;
    if (productName.includes('슬레이트 모티프')) return IMAGES.iconic.slateMotif;
    if (productName.includes('슬레이트 스틸')) return IMAGES.iconic.slateSteel;
    if (productName.includes('포틀랜드 모티프')) return IMAGES.iconic.portlandMotif;
    if (productName.includes('포틀랜드 스틸')) return IMAGES.iconic.portlandSteel;
    if (productName.includes('아이코닉 스톤')) return IMAGES.iconic.collectionBanner;

    // Jin series
    if (productName.includes('진 오리진')) return IMAGES.unsplash.woodFlooring;
    if (productName.includes('진 테라 맥스')) return IMAGES.unsplash.modernLiving2;
    if (productName.includes('진 테라')) return IMAGES.unsplash.modernLiving;
    if (productName.includes('진 헤링본')) return IMAGES.unsplash.woodFlooring;
    if (productName.includes('진 그란데 스퀘어')) return IMAGES.jin.stoneRoom;
    if (productName.includes('진 그란데')) return IMAGES.jin.grandeFlooring;
    if (productName.includes('진 텍스쳐')) return IMAGES.jin.mixMatch1;

    // Wall products
    if (productName.includes('시그니월')) return IMAGES.jin.signiwall;
    if (productName.includes('디자인월 그란데')) return IMAGES.unsplash.wallPanel;
    if (productName.includes('디자인월')) return IMAGES.unsplash.stoneWall;
    if (productName.includes('디하임')) return IMAGES.jin.dheim;

    // Ecostec
    if (productName.includes('에코스텍')) return IMAGES.ecostecBlog.spec1;
    if (productName.includes('세이프월')) return IMAGES.unsplash.wallPanel;

    // Default flooring
    if (productName.includes('나투스')) return IMAGES.unsplash.woodFlooring;
    if (productName.includes('바움')) return IMAGES.unsplash.woodFlooring;
    if (productName.includes('클릭S')) return IMAGES.unsplash.woodFlooring;

    return IMAGES.unsplash.woodFlooring;
  };

  const getGalleryImages = (productName: string) => {
    const mainImage = getProductMainImage(productName);

    // For Iconic Stone products, use different pattern images
    if (productName.includes('아이코닉 스톤')) {
      return [
        IMAGES.iconic.collectionBanner,
        IMAGES.iconic.monteWhite,
        IMAGES.iconic.emotionBlanc,
        IMAGES.iconic.saharaLight
      ];
    }

    // For specific Iconic Stone patterns
    if (productName.includes('몬테 화이트')) {
      return [IMAGES.iconic.monteWhite, IMAGES.iconic.hero, IMAGES.iconic.emotionBlanc, IMAGES.iconic.saharaLight];
    }
    if (productName.includes('이모션 블랑')) {
      return [IMAGES.iconic.emotionBlanc, IMAGES.iconic.monteWhite, IMAGES.iconic.hero, IMAGES.iconic.saharaLight];
    }
    if (productName.includes('사하라 라이트')) {
      return [IMAGES.iconic.saharaLight, IMAGES.iconic.emotionBlanc, IMAGES.iconic.monteWhite, IMAGES.iconic.hero];
    }
    if (productName.includes('슬레이트 모티프')) {
      return [IMAGES.iconic.slateMotif, IMAGES.iconic.slateSteel, IMAGES.iconic.portlandMotif, IMAGES.iconic.hero];
    }
    if (productName.includes('슬레이트 스틸')) {
      return [IMAGES.iconic.slateSteel, IMAGES.iconic.slateMotif, IMAGES.iconic.portlandSteel, IMAGES.iconic.hero];
    }
    if (productName.includes('포틀랜드 모티프')) {
      return [IMAGES.iconic.portlandMotif, IMAGES.iconic.portlandSteel, IMAGES.iconic.slateMotif, IMAGES.iconic.hero];
    }
    if (productName.includes('포틀랜드 스틸')) {
      return [IMAGES.iconic.portlandSteel, IMAGES.iconic.portlandMotif, IMAGES.iconic.slateSteel, IMAGES.iconic.hero];
    }

    // For Jin Grande series
    if (productName.includes('진 그란데')) {
      return [IMAGES.jin.grandeFlooring, IMAGES.jin.stoneRoom, IMAGES.jin.pointRoom, IMAGES.jin.moodRoom];
    }

    // For Signiwall
    if (productName.includes('시그니월')) {
      return [IMAGES.jin.signiwall, IMAGES.jin.pointRoom, IMAGES.jin.moodRoom, IMAGES.jin.mixMatch1];
    }

    // For Dheim
    if (productName.includes('디하임')) {
      return [IMAGES.jin.dheim, IMAGES.jin.mixMatch1, IMAGES.jin.mixMatch2, IMAGES.jin.moodRoom];
    }

    // For Ecostec
    if (productName.includes('에코스텍')) {
      return [
        IMAGES.ecostecBlog.spec1,
        IMAGES.ecostecBlog.spec2,
        IMAGES.ecostecBlog.pattern1,
        IMAGES.ecostecBlog.pattern2
      ];
    }

    // Default: use main image with related images
    return [
      mainImage,
      IMAGES.unsplash.modernLiving,
      IMAGES.unsplash.modernLiving2,
      IMAGES.unsplash.officeInterior
    ];
  };

  const mainImage = getProductMainImage(product.name);
  const galleryImages = getGalleryImages(product.name);

  return (
    <div className="w-full">
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center bg-dark-slate">
        <div className="absolute inset-0">
          <img
            src={mainImage}
            alt={`동화자연마루 ${product.name} 제품 이미지`}
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.style.background = 'linear-gradient(135deg, #d4c5b0 0%, #b8a898 50%, #9c8b7a 100%)';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                if (!parent.querySelector('.fallback-text')) {
                  const span = document.createElement('span');
                  span.className = 'fallback-text text-white/70 text-lg font-medium';
                  span.textContent = product.name;
                  parent.appendChild(span);
                }
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/90 via-dark-slate/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8">
          <button
            onClick={() => navigate(categoryPath)}
            className="sticky top-16 z-30 bg-white/90 backdrop-blur-sm py-3 px-5 text-sm md:static md:bg-transparent md:backdrop-blur-none md:py-0 md:px-0 flex items-center text-warm-ivory hover:text-copper mb-8 transition-colors group rounded-lg md:rounded-none"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-charcoal md:text-warm-ivory">{categoryName} 전체보기</span>
          </button>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {product.badges.map((badge, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-sm font-normal ${getBadgeStyle(badge)}`}>
                  {badge}
                </span>
              ))}
            </div>
            <div className="text-copper text-sm font-normal mb-3">{product.type}</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-warm-ivory font-light">{product.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-6 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`${product.name} - 이미지 ${selectedImage + 1}`}
                  className="w-full h-56 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {galleryImages.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all ${
                      selectedImage === i ? 'ring-2 ring-copper' : 'hover:ring-2 ring-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} 썸네일 ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              {product.galleryImages && product.galleryImages.length > 0 && (
                <div className="flex gap-2 mt-3 overflow-x-auto">
                  {product.galleryImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${product.name} 갤러리 이미지 ${i + 1}`}
                      className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-copper transition"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal mb-6">제품 소개</h2>
              {product.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-stone-gray leading-relaxed mb-4 font-light">
                  {para}
                </p>
              ))}
              <div className="mt-8">
                <div className="text-sm text-stone-gray mb-2">규격</div>
                <div className="text-charcoal font-normal">{product.size}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal mb-12 text-center">제품 사양</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-5 md:p-8 shadow-sm">
            {/* Mobile: Card-style layout */}
            <div className="md:hidden space-y-4">
              {product.specs.map((spec, i) => (
                <dl key={i} className="pb-4 border-b border-gray-200 last:border-0">
                  <dt className="text-stone-gray font-normal text-sm mb-1">{spec.label}</dt>
                  <dd className="text-charcoal">{spec.value}</dd>
                </dl>
              ))}
            </div>
            {/* Desktop: Table layout */}
            <table className="w-full hidden md:table">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 pr-8 text-stone-gray font-normal w-1/3">{spec.label}</td>
                    <td className="py-4 text-charcoal">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal mb-12 text-center">주요 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {product.features.map((feature, i) => (
              <div key={i} className="bg-warm-ivory rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-copper" size={24} />
                </div>
                <p className="text-charcoal leading-relaxed font-light">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-14 md:py-20 lg:py-24 bg-warm-ivory">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-charcoal mb-12 text-center">관련 제품</h2>
            {/* Mobile: Horizontal scroll carousel */}
            <div className="flex overflow-x-auto snap-x -mx-5 px-5 scrollbar-hide md:hidden gap-4 pb-4">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/${related.category}/${related.id}`}
                  className="group bg-white rounded-xl overflow-hidden hover-lift min-w-[240px] snap-center flex-shrink-0"
                >
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-warm-ivory to-stone-gray/20">
                    <img
                      src={getProductMainImage(related.name)}
                      alt={related.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const span = document.createElement('span');
                          span.className = 'fallback-text absolute inset-0 flex items-center justify-center text-charcoal/40 text-sm font-medium';
                          span.textContent = related.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-copper mb-2">{related.type}</p>
                    <h3 className="font-serif text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-stone-gray mb-3 line-clamp-2">{related.tagline}</p>
                    <div className="flex items-center text-copper text-sm">
                      자세히 보기 <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/${related.category}/${related.id}`}
                  className="group bg-white rounded-xl overflow-hidden hover-lift"
                >
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-warm-ivory to-stone-gray/20">
                    <img
                      src={getProductMainImage(related.name)}
                      alt={related.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const span = document.createElement('span');
                          span.className = 'fallback-text absolute inset-0 flex items-center justify-center text-charcoal/40 text-sm font-medium';
                          span.textContent = related.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-copper mb-2">{related.type}</p>
                    <h3 className="font-serif text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-stone-gray mb-3 line-clamp-2">{related.tagline}</p>
                    <div className="flex items-center text-copper text-sm">
                      자세히 보기 <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight">
            이 제품에 대해<br className="md:hidden" /> 더 알고 싶으신가요?
          </h2>
          <p className="text-gray-400 mb-8 font-light">
            27년 경험의 전문가가 최적의 솔루션을 제안해드립니다
          </p>
          <Link
            to="/contact"
            className="inline-block bg-copper hover:bg-copper-dark text-white px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg rounded-lg transition-all"
          >
            견적 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
