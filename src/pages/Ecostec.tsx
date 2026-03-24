import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Theater, BookOpen, Dumbbell, Briefcase, Church } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import { IMAGES } from '../constants/images';
import SafeImage from '../components/SafeImage';

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
    if (productName === '에코스텍') {
      return "https://sspark.genspark.ai/cfimages?u1=ZJYdED5eI5ZYR3VKtszxDtKxGmiqBqziWky5%2FLGSAJy%2FLVSlXpOsv%2FJQjo%2B9mZ%2Bl5SpsIE0uqNOgsDloJFPt5vVkBtsg4c0ecPyVue%2FiIGvJSdUuY4ggzzSXoyzkiaeLfrfWKWgbx4WOvjINGAqHgvIXhxsyk6N40jXsVisJ1ceJSme1Y63D06TnyN%2BNYMLoj9TgnF06XuCltx3Z0WFO&u2=lyKOUAPBioB%2BrzXq&width=1024";
    }
    if (productName === '세이프월') {
      return "https://sspark.genspark.ai/cfimages?u1=F1hvWd1VS8S57oLcIENb3pvy01mPBxdLRJxrPfR5D5jEIhbMPbkJ9MD91V5KHJSMl6MMzY9lWBgBxLA4LMQzxSPslKIrbn5GRWhey4sArzlzQ56gZRkICoW2CiUnb6SKRrGtJI1U%2F7TmeT9T5bqBPlNACgveYN44wz4%2F4WZbw8EsH0eOzmcqbft2O08lN5dHZZaF%2BCtjnvO5WrEMQVs%3D&u2=FBMm1C5tmSBO1vE0&width=1024";
    }
    return "";
  };

  const spaces = [
    { icon: Briefcase, title: '사무실', image: "" },
    { icon: Building2, title: '회의실', image: "" },
    { icon: BookOpen, title: '홈스튜디오', image: "" },
    { icon: Theater, title: '강당/극장', image: "" },
    { icon: Dumbbell, title: '체육관', image: "" },
    { icon: Church, title: '종교시설', image: "" },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[60vh] md:h-screen flex items-center justify-center">
        <SafeImage
          src="https://sspark.genspark.ai/cfimages?u1=ZJYdED5eI5ZYR3VKtszxDtKxGmiqBqziWky5%2FLGSAJy%2FLVSlXpOsv%2FJQjo%2B9mZ%2Bl5SpsIE0uqNOgsDloJFPt5vVkBtsg4c0ecPyVue%2FiIGvJSdUuY4ggzzSXoyzkiaeLfrfWKWgbx4WOvjINGAqHgvIXhxsyk6N40jXsVisJ1ceJSme1Y63D06TnyN%2BNYMLoj9TgnF06XuCltx3Z0WFO&u2=lyKOUAPBioB%2BrzXq&width=1024"
          alt="에코스텍 배너"
          className="absolute inset-0 w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

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
                  <SafeImage
                    src={getProductImage(product.name)}
                    alt={product.name}
                    className="w-full h-40 md:h-48"
                    fallbackText={product.name}
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
                <div className="relative h-48 md:h-64 overflow-hidden rounded-xl">
                  <SafeImage
                    src={space.image}
                    alt={`${space.title} 인테리어`}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    fallbackText={space.title}
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
              우성동화는 2005년부터 에코스텍을 시공해온<br className="hidden md:block" />
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
