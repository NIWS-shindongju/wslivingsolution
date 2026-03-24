import { Link } from 'react-router-dom';
import { Shield, Droplets, Sparkles, ArrowRight } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../constants/images';

export default function Products() {
  return (
    <div className="w-full">
      <section className="relative h-96 flex items-center justify-center bg-charcoal">
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">동화자재</h1>
          <p className="text-xl text-gray-300">27년간 현장에서 써본 경험으로 제품을 추천합니다</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              동화기업의 전 제품을 취급합니다. 단순히 카탈로그 스펙을 전달하는 것이 아니라, 수백 건의 시공 현장에서 직접 사용해본 경험을 바탕으로 고객의 공간에 가장 적합한 자재를 추천합니다. 동화기업 본사에서도 제품에 대한 소비자 현장 상담을 저희에게 위탁하고 있습니다.
            </p>
          </div>

          <div className="space-y-20" id="ecostec">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-80 lg:h-auto">
                  <SafeImage
                    src={IMAGES.ecostec_productInfo}
                    alt="에코스텍 타공 패널"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                    에코스텍 (ECOSTEC)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    NRC 1.0급 흡음 인테리어 패널. 회의실, 강당, 도서관, 체육관 등 소음 제어가 필요한 공간에 최적. 우성동화는 2005년부터 에코스텍을 시공해온 국내 최장수 시공 파트너입니다.
                  </p>
                  <Link
                    to="/ecostec"
                    className="inline-flex items-center text-deepgreen font-semibold text-lg hover:text-deepgreen/80 transition-colors"
                  >
                    에코스텍 상세보기 <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="safewall">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-80 lg:h-auto lg:order-2">
                  <SafeImage
                    src={IMAGES.wsindus_ecostec_spec}
                    alt="세이프월 시공"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                  <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                    세이프월 (SAFE WALL)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    준불연 성능과 흡음 성능을 동시에 갖춘 벽장재. Super E0 최고 등급 친환경 자재. 내수성과 내구성이 뛰어나 다중이용시설, 상업공간에 특히 적합합니다.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="text-deepgreen" size={24} />
                      </div>
                      <div className="text-sm font-semibold text-charcoal">준불연 인증</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Droplets className="text-deepgreen" size={24} />
                      </div>
                      <div className="text-sm font-semibold text-charcoal">흡음 성능</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Sparkles className="text-deepgreen" size={24} />
                      </div>
                      <div className="text-sm font-semibold text-charcoal">Super E0</div>
                    </div>
                  </div>
                  <Link
                    to="/ecostec#safewall"
                    className="inline-flex items-center text-deepgreen font-semibold text-lg hover:text-deepgreen/80 transition-colors"
                  >
                    세이프월 상세보기 <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="designwall">
              <div className="p-8 lg:p-12">
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 text-center">
                  디자인월
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="h-48 rounded-lg overflow-hidden">
                    <SafeImage
                      src={IMAGES.designWall_saharaLight_kitchen}
                      alt="디자인월 주방 시공"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="h-48 rounded-lg overflow-hidden">
                    <SafeImage
                      src={IMAGES.designWall_saharaLight_artwall}
                      alt="디자인월 아트월"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="h-48 rounded-lg overflow-hidden">
                    <SafeImage
                      src={IMAGES.iconic.wallProduct}
                      alt="디자인월 제품"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center mb-8">
                  국내 최초 입체무늬 공법을 도입한 프리미엄 벽장재. 대리석, 원목 등 다양한 질감을 사실적으로 표현합니다.
                </p>
                <div className="space-y-4">
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">디자인월</h3>
                    <p className="text-gray-600">표준 사이즈의 고품질 벽장재</p>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">디자인월 그란데</h3>
                    <p className="text-gray-600">초광폭 590x1200 대형 패널로 이음새를 최소화</p>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">시그니월</h3>
                    <p className="text-gray-600">시그니처 디자인 라인</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="maru">
              <div className="p-8 lg:p-12">
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 text-center">
                  동화자연마루
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [자연마루]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">자연마루</h3>
                    <p className="text-gray-600 text-sm">천연 원목의 따뜻함</p>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [강마루]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">강마루</h3>
                    <p className="text-gray-600 text-sm">내구성과 디자인의 균형</p>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [강화마루]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">강화마루</h3>
                    <p className="text-gray-600 text-sm">경제적이면서 뛰어난 내구성</p>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [진마루]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">진마루</h3>
                    <p className="text-gray-600 text-sm">리얼 우드의 감성</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="dheim">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-80 lg:h-auto">
                  <SafeImage
                    src={IMAGES.iconic_furnitureExample}
                    alt="디하임 가구 마감재"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                    디하임 (D:Heim)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    2024년 출시된 동화기업의 친환경 프리미엄 가구 마감재. E0 최고 등급 보드에 고강도 표면재를 적용. 새집증후군 방지. LPM, ACP 라인업 보유. 동화자연마루와 컬러 연동 시스템으로 바닥재-벽재-가구재의 통일된 인테리어 구현 가능.
                  </p>
                  <div className="inline-block bg-deepgreen/10 text-deepgreen px-4 py-2 rounded-full text-sm font-semibold">
                    2024 신제품
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="materials">
              <div className="p-8 lg:p-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                  원자재
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  MDF, PB(파티클보드), 합판 등 건축·가구용 원자재를 도소매합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [MDF]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal">MDF</h3>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [파티클보드]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal">파티클보드</h3>
                  </div>
                  <div className="bg-cream p-6 rounded-lg">
                    <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-4">
                      [합판]
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal">합판</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            어떤 자재가 맞을지 모르겠다면,<br />
            현장 경험 27년의 전문가에게 물어보세요.
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-deepgreen hover:bg-deepgreen/90 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            상담 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
