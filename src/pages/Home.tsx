import { Link } from 'react-router-dom';
import { Shield, Droplet, Leaf, Zap, Award, Building2, Users } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../constants/images';

export default function Home() {
  const iconicPatterns = [
    { key: 'monteWhite', name: '몬테 화이트', img: IMAGES.iconic.monteWhite },
    { key: 'emotionBlanc', name: '이모션 블랑', img: IMAGES.iconic.emotionBlanc },
    { key: 'saharaLight', name: '사하라 라이트', img: IMAGES.iconic.saharaLight },
    { key: 'slateMotif', name: '슬레이트 모티프', img: IMAGES.iconic.slateMotif },
    { key: 'slateSteel', name: '슬레이트 스틸', img: IMAGES.iconic.slateSteel },
    { key: 'portlandMotif', name: '포틀랜드 모티프', img: IMAGES.iconic.portlandMotif },
    { key: 'portlandSteel', name: '포틀랜드 스틸', img: IMAGES.iconic.portlandSteel },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-6">
              동화기업 공식 대리점 27년
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight">
              에코스텍·마루·벽재·디하임
              <br />
              <span className="font-normal text-copper">프리미엄 건축 자재 전문</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 font-light leading-relaxed">
              1999년부터 국회의사당, 국립도서관 등 주요 공공기관과<br className="hidden md:block" />
              프리미엄 주거 공간에 동화자연마루를 공급하고 시공해온 우성동화입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={IMAGES.smartstore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#03C75A] hover:bg-[#02b351] text-white px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105 text-center"
              >
                스마트스토어 바로가기
              </a>
              <Link
                to="/contact"
                className="inline-block bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105 text-center"
              >
                견적 상담하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-dark-slate mb-4">
              아이코닉 스톤 컬렉션
            </h2>
            <p className="text-base md:text-lg text-stone-gray font-light">
              바닥·벽·가구 하나의 톤으로 통일하는 심리스 인테리어
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-warm-ivory rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <SafeImage
                src={IMAGES.iconic.floorProduct}
                alt="진 그란데 바닥재"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-normal text-dark-slate mb-2">진 그란데</h3>
                <p className="text-sm text-stone-gray mb-4">타일형 강마루 | 325×805mm</p>
                <a
                  href={IMAGES.smartstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#03C75A] hover:bg-[#02b351] text-white px-6 py-2 rounded-lg text-sm font-normal transition-colors"
                >
                  스마트스토어에서 구매
                </a>
              </div>
            </div>

            <div className="group bg-warm-ivory rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <SafeImage
                src={IMAGES.iconic.wallProduct}
                alt="시그니월 벽재"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-normal text-dark-slate mb-2">시그니월</h3>
                <p className="text-sm text-stone-gray mb-4">프리미엄 벽재 | 아이코닉 패턴</p>
                <a
                  href={IMAGES.smartstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#03C75A] hover:bg-[#02b351] text-white px-6 py-2 rounded-lg text-sm font-normal transition-colors"
                >
                  스마트스토어에서 구매
                </a>
              </div>
            </div>

            <div className="group bg-warm-ivory rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <SafeImage
                src={IMAGES.iconic.furnitureProduct}
                alt="디하임 가구재"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-normal text-dark-slate mb-2">디하임</h3>
                <p className="text-sm text-stone-gray mb-4">가구재 | 맞춤 제작</p>
                <a
                  href={IMAGES.smartstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#03C75A] hover:bg-[#02b351] text-white px-6 py-2 rounded-lg text-sm font-normal transition-colors"
                >
                  스마트스토어에서 구매
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-dark-slate mb-4">
              7가지 프리미엄 석재 패턴
            </h2>
            <p className="text-base text-stone-gray font-light">
              자연 석재의 고급스러운 질감을 그대로 담은 아이코닉 스톤 컬렉션
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {iconicPatterns.map((pattern) => (
              <div key={pattern.key} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <SafeImage
                  src={pattern.img}
                  alt={pattern.name}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-sm md:text-base font-normal text-dark-slate">{pattern.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={IMAGES.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#03C75A] hover:bg-[#02b351] text-white px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105"
            >
              패턴별 상세 보기 → 스마트스토어
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-dark-slate mb-4">
              프리미엄 기능성
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-copper" size={32} />
              </div>
              <h3 className="text-lg font-normal text-dark-slate mb-2">내구성</h3>
              <p className="text-sm text-stone-gray font-light">AC5 등급 표면 강도</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="text-copper" size={32} />
              </div>
              <h3 className="text-lg font-normal text-dark-slate mb-2">내오염성</h3>
              <p className="text-sm text-stone-gray font-light">발수 코팅 마감</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-copper" size={32} />
              </div>
              <h3 className="text-lg font-normal text-dark-slate mb-2">내수성</h3>
              <p className="text-sm text-stone-gray font-light">방습 처리</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-copper" size={32} />
              </div>
              <h3 className="text-lg font-normal text-dark-slate mb-2">친환경</h3>
              <p className="text-sm text-stone-gray font-light">E0 등급 인증</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-light">
              <div className="flex items-center gap-2">
                <Building2 className="text-copper" size={20} />
                <span>동화기업 공식 대리점 1999~</span>
              </div>
              <span className="text-copper">|</span>
              <div className="flex items-center gap-2">
                <Award className="text-copper" size={20} />
                <span>최고 성장 대리점 표창 2011</span>
              </div>
              <span className="text-copper">|</span>
              <div className="flex items-center gap-2">
                <Users className="text-copper" size={20} />
                <span>국회의사당·국립도서관 시공</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-copper to-copper-dark text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-6">
            견적 문의 또는 스마트스토어에서 바로 구매하세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={IMAGES.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#03C75A] hover:bg-[#02b351] text-white px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105"
            >
              스마트스토어 바로가기
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-warm-ivory text-copper px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105"
            >
              견적 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
