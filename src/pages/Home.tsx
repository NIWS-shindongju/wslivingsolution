import { Link } from 'react-router-dom';
import { Calendar, Handshake, Building2, Factory, ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '../constants/images';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const portfolioSlides = [
    { title: '국회의사당 리모델링 디자인월', year: '2022', material: '디자인월', description: '대한민국의 정치 중심지에 적용된 프리미엄 벽장재', imgSrc: IMAGES.unsplash.parliament, alt: '국회의사당 에코스텍 시공사례' },
    { title: '국립중앙디지털도서관 에코스텍', year: '2008', material: '에코스텍', description: '도서관의 쾌적한 음향 환경을 위한 흡음 패널', imgSrc: IMAGES.unsplash.library, alt: '국립중앙디지털도서관 시공사례' },
    { title: '서울시 인재개발원 에코스텍', year: '2010', material: '에코스텍', description: '교육 공간의 음향 개선을 위한 전문 시공', imgSrc: IMAGES.wsindus.ecostecComplete, alt: '서울시 인재개발원 에코스텍 시공' },
    { title: '연세대학교 송도캠퍼스 농구장', year: '2011', material: '에코스텍', description: '체육관의 반향음 제어를 위한 최적의 솔루션', imgSrc: IMAGES.unsplash.gymnasium, alt: '연세대학교 농구장 바닥재 시공' },
    { title: '현대해상 연수원 에코스텍', year: '2005', material: '에코스텍', description: '기업 연수 공간의 음향 품질 향상', imgSrc: IMAGES.unsplash.conferenceRoom, alt: '현대해상 연수원 시공사례' },
    { title: '두원공대 파주캠퍼스', year: '2022', material: '에코스텍', description: '대학 캠퍼스 내 다목적 공간 음향 최적화', imgSrc: IMAGES.unsplash.universityHall, alt: '두원공대 시공사례' }
  ];

  const timelineEvents = [
    { year: '1997', event: '우성산업 개업' },
    { year: '1999', event: '동화기업 대리점 취득' },
    { year: '2005', event: '현대해상 연수원 에코스텍' },
    { year: '2008', event: '국립중앙디지털도서관' },
    { year: '2011', event: '동화기업 최고 성장 대리점 표창' },
    { year: '2022', event: '국회의사당 디자인월 / (주)우성인더스 법인 설립' },
    { year: '2026', event: '우성리빙솔루션 론칭' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div className="w-full">
      <section className="relative h-[100svh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-charcoal to-dark-slate" style={{backgroundImage: `url(${IMAGES.unsplash.heroBg})`}}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-slate/90 to-dark-slate/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-6">
              동화기업 공식 대리점 1999~
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              동화기업이 현장을 맡긴<br />27년의 파트너
            </h1>
            <p className="text-warm-ivory text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light">
              에코스텍 · 디자인월 · 세이프월<br className="md:hidden" /> · 마루 · 디하임<br />
              자재 상담부터 시공까지,<br className="md:hidden" /> 제조사가 인정한 원스톱 전문가
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="w-full sm:w-auto inline-block bg-dark-slate hover:bg-copper text-white px-6 py-3.5 rounded-lg text-base md:text-lg transition-all text-center">
                견적 상담하기
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto inline-block border-2 border-white hover:bg-white/10 text-white px-6 py-3.5 rounded-lg text-base md:text-lg transition-all text-center">
                시공사례 보기
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden">
          <ChevronDown className="text-white/60 animate-bounce-slow" size={32} />
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
              왜 동화기업이<br className="md:hidden" /> 우리에게 고객을 맡길까?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">카탈로그가 아닌<br className="md:hidden" /> 현장에서 답을 찾습니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-warm-ivory rounded-xl overflow-hidden hover-lift">
              <div className="h-48 md:h-64 overflow-hidden">
                <img src={IMAGES.jin.grandeFlooring} alt="동화자연마루 진 그란데 바닥재" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 md:p-8 border-l-4 border-copper">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-copper/10 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="text-copper" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-light text-copper mb-3">27년</div>
                <p className="text-charcoal leading-relaxed font-light">
                  1999년부터 이어온 동화기업 공식 대리점. 에코스텍 시공 건수 국내 최다급.
                </p>
              </div>
            </div>

            <div className="bg-warm-ivory rounded-xl overflow-hidden hover-lift">
              <div className="h-48 md:h-64 overflow-hidden">
                <img src={IMAGES.jin.signiwall} alt="동화자연마루 시그니월 벽재" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 md:p-8 border-l-4 border-copper">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-copper/10 rounded-full flex items-center justify-center mb-6">
                  <Handshake className="text-copper" size={24} />
                </div>
                <div className="text-xl font-serif font-light text-charcoal mb-3">제조사 위탁 상담</div>
                <p className="text-charcoal leading-relaxed font-light">
                  동화기업이 자사 제품의 소비자 현장 상담을 우리에게 맡깁니다.
                </p>
              </div>
            </div>

            <div className="bg-warm-ivory rounded-xl overflow-hidden hover-lift">
              <div className="h-48 md:h-64 overflow-hidden">
                <img src={IMAGES.jin.dheim} alt="동화자연마루 디하임 벽재" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 md:p-8 border-l-4 border-copper">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-copper/10 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="text-copper" size={24} />
                </div>
                <div className="text-xl font-serif font-light text-charcoal mb-3">관공서 검증</div>
                <p className="text-charcoal leading-relaxed font-light">
                  국회의사당, 국립중앙도서관, 서울시 인재개발원, 연세대학교.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light mb-4">아이코닉 스톤 컬렉션 —<br className="md:hidden" /> 심리스 인테리어</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light">바닥 · 벽 · 가구,<br className="md:hidden" /> 하나의 톤으로 완성</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 scrollbar-hide md:grid md:grid-cols-3 md:gap-8">
            {[
              { name: '진 그란데 / 진 그란데 스퀘어', type: '바닥재', desc: '프리미엄 타일형 강마루', link: '/flooring/iconic-stone', imgSrc: IMAGES.jin.grandeFlooring, alt: '진 그란데 스퀘어 이모션블랑 패턴' },
              { name: '시그니월', type: '벽재', desc: '초대형 빅슬랩 벽장재 (1,010×2,460mm)', link: '/wall/signiwall', imgSrc: IMAGES.jin.signiwall, alt: '시그니월 몬테화이트 시공' },
              { name: '디하임', type: '가구재', desc: '친환경 E0 프리미엄 가구 마감재', link: '/wall/dheim', imgSrc: IMAGES.jin.dheim, alt: '디하임 LPM 가구 도어' }
            ].map((product, i) => (
              <Link key={i} to={product.link} className="min-w-[260px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink group bg-warm-ivory rounded-xl overflow-hidden hover-lift">
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <img src={product.imgSrc} alt={product.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all"></div>
                </div>
                <div className="p-3 md:p-6">
                  <p className="text-xs md:text-sm text-copper mb-2">{product.type}</p>
                  <h3 className="font-serif text-sm md:text-2xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">{product.name}</h3>
                  <p className="text-stone-gray text-xs md:text-base mb-4 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center text-copper text-xs md:text-base">
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
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">동화자연마루 전 제품,<br className="md:hidden" /> 상담부터 시공까지</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: '에코스텍 (ECOSTEC)', desc: 'NRC 1.0급 흡음 인테리어 패널', link: '/ecostec/ecostec', imgSrc: IMAGES.ecostecBlog.pattern1, alt: '에코스텍 흡음재 패턴' },
              { title: '세이프월 (SAFE WALL)', desc: '준불연 + 흡음, 안전과 디자인을 동시에', link: '/ecostec/safewall', imgSrc: IMAGES.unsplash.wallPanel, alt: '세이프월 방음벽재' },
              { title: '디자인월', desc: '입체무늬 공법의 프리미엄 벽장재', link: '/wall/designwall', imgSrc: IMAGES.unsplash.stoneWall, alt: '디자인월 인테리어 벽재' },
              { title: '동화자연마루', desc: '자연마루·강마루·강화마루·진마루 풀라인업', link: '/flooring', imgSrc: IMAGES.unsplash.woodFlooring, alt: '동화자연마루 바닥재' },
              { title: '디하임 (D:Heim)', desc: '친환경 E0 보드 가구 마감재, 2024 신제품', link: '/wall/dheim', imgSrc: IMAGES.jin.dheim, alt: '동화 디하임 벽재' },
              { title: 'MDF · PB · 합판', desc: '건축·가구용 원자재 도소매', link: '/custom', imgSrc: IMAGES.unsplash.woodMaterial, alt: '목재 가공 소재' }
            ].map((product, index) => (
              <Link key={index} to={product.link} className="group bg-white rounded-xl overflow-hidden hover-lift">
                <div className="h-36 md:h-64 relative overflow-hidden">
                  <img src={product.imgSrc} alt={product.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal text-xs md:text-base">자세히 보기</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="font-serif text-sm md:text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-stone-gray text-xs md:text-base mb-4 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center text-copper font-normal text-xs md:text-base">
                    자세히 <ArrowRight size={18} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light mb-4">현장이 증명합니다</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light">국회의사당부터<br className="md:hidden" /> 대학 캠퍼스까지, 27년간의 기록</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="relative h-72 md:h-96 lg:h-[500px] flex flex-col items-center justify-center p-8 text-center"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img src={portfolioSlides[currentSlide].imgSrc} alt={portfolioSlides[currentSlide].alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-slate via-dark-slate/70 to-transparent flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-serif text-xl md:text-3xl font-light mb-2">{portfolioSlides[currentSlide].title}</h3>
                  <div className="flex items-center space-x-4 text-copper mb-4">
                    <span className="font-normal text-sm md:text-base">{portfolioSlides[currentSlide].year}</span>
                    <span>·</span>
                    <span className="font-normal text-sm md:text-base">{portfolioSlides[currentSlide].material}</span>
                  </div>
                  <p className="text-gray-200 text-sm md:text-lg font-light">{portfolioSlides[currentSlide].description}</p>
                </div>
              </div>
            </div>

            <button onClick={prevSlide} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-copper backdrop-blur-sm p-3 rounded-full transition-all" aria-label="이전">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-copper backdrop-blur-sm p-3 rounded-full transition-all" aria-label="다음">
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {portfolioSlides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-copper w-10' : 'bg-gray-600'}`} aria-label={`슬라이드 ${index + 1}`} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-flex items-center text-base md:text-lg font-normal text-copper hover:text-copper-light transition-colors">
              전체 시공사례 보기 <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
              1997년부터,<br className="md:hidden" /> 목재와 함께 걸어온 길
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-copper/30"></div>
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
                        <div className="font-serif text-2xl font-light text-copper mb-2">{event.year}</div>
                        <div className="text-charcoal font-light">{event.event}</div>
                      </div>
                    </div>
                    <div className="relative z-10 w-6 h-6 bg-copper rounded-full border-4 border-warm-ivory"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-copper/30"></div>
              <div className="space-y-5">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[33px] top-3 w-4 h-4 bg-copper rounded-full border-4 border-warm-ivory"></div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <div className="font-serif text-lg font-light text-copper mb-2">{event.year}</div>
                      <div className="text-charcoal text-sm font-light">{event.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center text-base md:text-lg font-normal text-copper hover:text-copper-light transition-colors">
              우리의 이야기 더 보기 <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
              [동화기업 로고]
            </div>
            <div className="text-stone-gray font-light text-sm md:text-base">
              <span className="font-normal text-charcoal">동화기업 공식 대리점</span> |
              2011년 최고 성장 대리점 표창 |
              제조사 위탁 소비자 상담 파트너
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            27년의 경험으로<br/>최적의 솔루션을 제안합니다
          </h2>
          <Link to="/contact" className="inline-block bg-dark-slate border border-white hover:bg-copper hover:border-copper text-white px-10 py-4 rounded-lg text-base md:text-lg transition-all">
            견적 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
