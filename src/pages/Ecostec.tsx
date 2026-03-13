import { Link } from 'react-router-dom';
import { Volume2, Palette, Award, Shield, Droplets, Sparkles, Users, Building2, BookOpen, Dumbbell, Briefcase, Church } from 'lucide-react';

export default function Ecostec() {
  const processSteps = [
    '상담·요구사항 파악',
    '현장 방문 실측',
    '자재 선정·설계',
    '견적·계약',
    '자재 납품·시공',
    '검수·A/S'
  ];

  const applications = [
    { icon: Users, label: '회의실' },
    { icon: Building2, label: '강당·다목적홀' },
    { icon: BookOpen, label: '도서관' },
    { icon: Dumbbell, label: '체육관' },
    { icon: Briefcase, label: '사무실' },
    { icon: Church, label: '교회·예배당' }
  ];

  return (
    <div className="w-full">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
            [에코스텍이 시공된 고급 강당 또는 도서관]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            에코스텍 & 세이프월
          </h1>
          <p className="text-xl md:text-2xl text-cream">
            소리를 다스리고, 공간을 완성하다
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-sm text-gray-500">
                [에코스텍 타공 판넬 클로즈업]
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
                  에코스텍 (ECOSTEC)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  동화기업이 개발한 기능성 흡음 인테리어 패널. 최상급 MDF에 정밀 타공 기술을 적용하여 NRC(흡음계수) 1.00에 가까운 흡음 성능. 멜라민, 도장, 무늬목 등 다양한 마감 가능. 우성리빙솔루션은 2005년부터 에코스텍을 시공해온 국내 최장수 시공 파트너입니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Volume2 className="text-deepgreen" size={28} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                      NRC 1.0급 흡음력
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      소리의 반사를 억제하여 명료한 음향 환경 조성
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Palette className="text-deepgreen" size={28} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                      다양한 디자인 마감
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      멜라민, 도장, 무늬목 등 공간 콘셉트에 맞는 마감
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Award className="text-deepgreen" size={28} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                      20년 시공 노하우
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      2005년 첫 시공부터 축적된 현장 데이터와 경험
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-20">
              <h3 className="font-serif text-3xl font-bold text-charcoal text-center mb-12">
                적용 공간
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {applications.map((app, index) => {
                  const Icon = app.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="text-deepgreen" size={32} />
                      </div>
                      <div className="text-sm font-semibold text-charcoal">{app.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="safewall">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="lg:order-2">
                <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-sm text-gray-500">
                  [세이프월 시공 사진]
                </div>
              </div>
              <div className="lg:order-1">
                <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
                  세이프월 (SAFE WALL)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  준불연 성능과 흡음 기능을 동시에 갖춘 동화기업의 고기능 벽장재. Super E0 최고 등급 친환경 자재로, 다중이용시설의 안전 기준을 충족하면서도 뛰어난 디자인을 구현합니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-cream p-8 rounded-xl">
                <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="text-deepgreen" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                  준불연 인증
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  화재 안전 기준 충족
                </p>
              </div>

              <div className="bg-cream p-8 rounded-xl">
                <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Droplets className="text-deepgreen" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                  흡음 성능
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  쾌적한 실내 음향 환경
                </p>
              </div>

              <div className="bg-cream p-8 rounded-xl">
                <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="text-deepgreen" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                  Super E0 친환경
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  최고 등급 친환경 인증
                </p>
              </div>

              <div className="bg-cream p-8 rounded-xl">
                <div className="w-14 h-14 bg-deepgreen/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="text-deepgreen" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal text-center mb-2">
                  우수한 내구성
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  내수성, 내마모성 우수
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
                시공 프로세스
              </h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-deepgreen/30"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg relative z-10">
                      <div className="w-12 h-12 bg-deepgreen rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                        {index + 1}
                      </div>
                      <div className="text-center text-sm font-semibold text-charcoal">
                        {step}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-600">
                동화기업 본사를 통해 문의하셔도, 현장 상담은 저희가 담당합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8">
            에코스텍·세이프월 견적문의
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-deepgreen hover:bg-deepgreen/90 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            견적 요청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
