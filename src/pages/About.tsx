import { Award, CheckCircle, Target } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '1997', title: '우성산업 개업', desc: '목재 가공의 첫 걸음' },
    { year: '1999', title: '동화기업 공식 대리점 취득', desc: '에코스텍, 디자인월과의 인연 시작' },
    { year: '2005', title: '현대해상 연수원 에코스텍 납품·시공', desc: '' },
    { year: '2008', title: '국립중앙디지털도서관 에코스텍 납품·시공', desc: '' },
    { year: '2009', title: '대전철도청 에코스텍 납품', desc: '' },
    { year: '2010', title: '서울시 인재개발원 에코스텍 납품·시공', desc: '' },
    { year: '2011', title: '연세대학교 송도캠퍼스 농구장 에코스텍 납품·시공', desc: '' },
    { year: '2011', title: '동화기업 최고 성장 대리점 표창 수상', desc: '' },
    { year: '2022', title: '국회의사당 리모델링 디자인월 납품', desc: '' },
    { year: '2022', title: '두원공대 파주캠퍼스 에코스텍 납품·시공', desc: '' },
    { year: '2022', title: '(주)우성인더스 법인 설립', desc: '' },
    { year: '2026', title: '우성리빙솔루션 브랜드 론칭', desc: '27년의 경험을 새 이름에 담다' }
  ];

  return (
    <div className="w-full">
      <section className="relative h-96 flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal"></div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
          [김포 공장 전경 또는 작업 현장 파노라마]
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">우성이야기</h1>
          <p className="text-xl text-gray-300">우성산업 → 우성인더스 → 우성리빙솔루션, 27년의 여정</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
                현장에서 직접 해보고,<br />결과물로 말합니다
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  1997년, 작은 목재 가공 사업장 '우성산업'으로 시작했습니다.
                </p>
                <p>
                  1999년 동화기업 공식 대리점을 취득한 이후, 에코스텍(흡음판넬)이라는 당시 새로운 제품을 현장에 가장 먼저, 가장 많이 시공한 곳이 바로 우리였습니다.
                </p>
                <p>
                  국립중앙디지털도서관, 서울시 인재개발원, 연세대학교, 그리고 국회의사당까지 — 까다로운 관공서와 교육기관의 현장을 27년간 누볐습니다. 2011년에는 동화기업으로부터 '최고 성장 대리점' 표창을 받았습니다.
                </p>
                <p>
                  지금은 동화기업이 자사 제품에 대한 소비자 현장 상담까지 우리에게 맡기고 있습니다. 제조사가 '이 제품을 현장에서 어떻게 쓰는지는 우성에게 물어보라'고 할 만큼, 현장 경험에서는 누구에게도 뒤지지 않습니다.
                </p>
                <p>
                  2022년 (주)우성인더스로 법인 전환을 하였고, 2026년 목재·인테리어 자재 전문 브랜드 '우성리빙솔루션'을 론칭합니다. 이름은 바뀌었지만, 우성산업 시절부터 이어온 원칙은 같습니다 — 현장에서 직접 해보고, 결과물로 말한다.
                </p>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-sm text-gray-500">
              [우성산업 창업 당시 또는 초기 시공 현장 사진]
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              걸어온 길
            </h2>
            <p className="text-xl text-gray-600">27년간의 발자취</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-deepgreen/30 last:pb-0">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-deepgreen rounded-full border-4 border-white"></div>
                <div className="bg-cream p-6 rounded-lg">
                  <div className="font-serif text-2xl font-bold text-deepgreen mb-2">{item.year}</div>
                  <div className="text-lg font-semibold text-charcoal mb-1">{item.title}</div>
                  {item.desc && <div className="text-gray-600">{item.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              대표 인사말
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-sm text-gray-500 mb-4">
                  [대표 신만식 프로필 사진]
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-charcoal mb-1">신만식</div>
                  <div className="text-gray-600">대표이사</div>
                </div>
              </div>

              <div className="lg:col-span-2 flex items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    안녕하십니까. 우성리빙솔루션 대표이사 신만식입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    [대표 인사말 내용이 들어갈 자리입니다. 실제 대표님의 메시지로 교체해 주세요.]
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    1997년 우성산업을 시작한 이래, 27년간 한결같이 목재와 인테리어 자재 분야에서 최선을 다해왔습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    앞으로도 현장 최우선의 자세로, 고객 여러분께 최상의 품질과 서비스를 제공하겠습니다. 감사합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              우성리빙솔루션이 다른 이유
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 rounded-2xl">
              <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-deepgreen" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                동화기업 위탁 상담 파트너
              </h3>
              <p className="text-gray-700 leading-relaxed">
                제조사가 자사 제품의 소비자 상담을 맡길 만큼 검증된 현장 전문성. 제품의 스펙은 카탈로그에도 있지만, '이 공간에 이 제품이 맞는지'는 27년 현장 경험이 답합니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-deepgreen" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                자체 공장 원스톱 체계
              </h3>
              <p className="text-gray-700 leading-relaxed">
                경기도 김포시에 자체 생산 공장을 보유. CNC Router, 레이저 가공기 등으로 맞춤 가공이 가능하며, 자재 수급부터 시공·A/S까지 한 곳에서 해결합니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-deepgreen" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                결과물로 말하는 문화
              </h3>
              <p className="text-gray-700 leading-relaxed">
                '항상 최고의 결과물로 말합니다' — 1997년 우성산업 때부터 이어온 우리의 원칙입니다. 화려한 마케팅보다 현장의 완성도로 신뢰를 쌓아왔습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              오시는길
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                김포 공장 (제조·가공)
              </h3>
              <p className="text-gray-700 mb-6">
                경기도 김포시 통진읍 가현로 201-56
              </p>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                [김포 공장 지도]
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                인천 사무실 (영업·상담)
              </h3>
              <p className="text-gray-700 mb-6">
                인천광역시 동구 방축로 37번길 30, 1동 121호(송현동)
              </p>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                [인천 사무실 지도]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
