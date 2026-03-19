import { Award, CheckCircle, Target } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../constants/images';

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
    { year: '2026', title: '우성동화 브랜드 론칭', desc: '27년의 경험을 새 이름에 담다' }
  ];

  return (
    <div className="w-full">
      <section className="relative h-[300px] md:h-[500px] flex items-center justify-center bg-gradient-to-b from-charcoal/80 to-charcoal">
        <div className="relative z-10 text-center text-white px-5">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4">우성이야기</h1>
          <p className="text-sm md:text-xl text-gray-300">우성산업 → 우성인더스 → 우성동화, 27년의 여정</p>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:order-2 md:flex-1">
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                현장에서 직접 해보고,<br />결과물로 말합니다
              </h2>
              <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
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
                  2022년 (주)우성인더스로 법인 전환을 하였고, 2026년 목재·인테리어 자재 전문 브랜드 '우성동화'를 론칭합니다. 이름은 바뀌었지만, 우성산업 시절부터 이어온 원칙은 같습니다 — 현장에서 직접 해보고, 결과물로 말한다.
                </p>
              </div>
            </div>
            <div className="md:order-1 md:flex-1">
              <SafeImage
                src=""
                alt="우성산업 초창기 작업 모습"
                className="w-full h-48 md:h-64 rounded-lg"
                fallbackText="우성산업 초창기"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:flex-1">
              <SafeImage
                src=""
                alt="우성동화 공장 전경"
                className="w-full h-64 md:h-80 rounded-lg"
                fallbackText="김포 공장 전경"
              />
            </div>
            <div className="md:flex-1">
              <SafeImage
                src=""
                alt="우성동화 팀워크"
                className="w-full h-48 md:h-56 rounded-lg"
                fallbackText="우성 팀워크"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              걸어온 길
            </h2>
            <p className="text-sm md:text-xl text-gray-600">27년간의 발자취</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-deepgreen/30 last:pb-0">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-deepgreen rounded-full border-4 border-white"></div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="font-serif text-2xl font-bold text-deepgreen mb-2">{item.year}</div>
                  <div className="text-lg font-semibold text-charcoal mb-1">{item.title}</div>
                  {item.desc && <div className="text-sm md:text-base text-gray-600">{item.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              대표 인사말
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:flex-shrink-0 text-center md:text-left">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl flex items-center justify-center text-sm text-stone-500 mb-4 mx-auto md:mx-0 border-2 border-copper">
                  대표 프로필 사진
                </div>
                <div className="font-serif text-2xl font-bold text-charcoal mb-1">신만식</div>
                <div className="text-sm text-stone-gray">대표이사 · (주)우성인더스</div>
              </div>

              <div className="flex items-center">
                <div className="bg-cream p-6 md:p-10 rounded-2xl shadow-lg">
                  <p className="text-base md:text-lg text-charcoal leading-relaxed mb-5 font-light">
                    안녕하십니까. 우성동화 대표 신만식입니다.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    1997년, 인천의 작은 목재 가공소에서 톱밥을 뒤집어쓰며 시작했습니다.
                    가진 건 기술 하나뿐이었지만, "만든 사람이 부끄럽지 않은 결과물을 내자"는
                    원칙 하나로 여기까지 왔습니다.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    1999년 동화기업 공식 대리점을 시작한 이후, 에코스텍이라는 당시 생소한
                    흡음 패널을 현장에 가장 먼저, 가장 많이 시공한 곳이 저희였습니다.
                    국립도서관, 서울시 인재개발원, 연세대학교, 국회의사당 — 실수가 허용되지 않는
                    현장을 27년간 다녀왔습니다.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    지금은 동화기업 본사가 소비자 현장 상담까지 저희에게 맡기고 있습니다.
                    제조사가 "현장은 우성에게 물어보라"고 할 만큼의 신뢰는,
                    화려한 말이 아니라 묵묵한 현장의 결과물이 만들어준 것입니다.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    우성동화는 자재만 파는 곳이 아닙니다. 어떤 제품이 이 공간에 맞는지 상담하고,
                    견적을 내고, 자재를 납품하고, 직접 시공하고, 끝까지 책임지는 곳입니다.
                    중간 과정을 남에게 맡기지 않습니다. 그래서 결과가 다릅니다.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                    이름은 우성산업에서 우성인더스로, 다시 우성동화로 바뀌었지만
                    원칙은 처음 그대로입니다 — <span className="font-semibold text-charcoal">현장에서 직접 해보고, 결과물로 말한다.</span>
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-[2px] bg-copper"></div>
                    <span className="text-sm text-copper font-normal">우성동화 대표이사 신만식</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              우성동화가 다른 이유
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-deepgreen" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                동화기업 위탁 상담 파트너
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                제조사가 자사 제품의 소비자 상담을 맡길 만큼 검증된 현장 전문성. 제품의 스펙은 카탈로그에도 있지만, '이 공간에 이 제품이 맞는지'는 27년 현장 경험이 답합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-deepgreen" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                자체 공장 원스톱 체계
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                경기도 김포시에 자체 생산 공장을 보유. CNC Router, 레이저 가공기 등으로 맞춤 가공이 가능하며, 자재 수급부터 시공·A/S까지 한 곳에서 해결합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-deepgreen/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-deepgreen" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                결과물로 말하는 문화
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                '항상 최고의 결과물로 말합니다' — 1997년 우성산업 때부터 이어온 우리의 원칙입니다. 화려한 마케팅보다 현장의 완성도로 신뢰를 쌓아왔습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              오시는길
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                김포 공장 (제조·가공)
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                경기도 김포시 통진읍 가현로 201-56
              </p>
              <div className="relative bg-stone-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-stone-500 text-sm">지도를 불러오는 중...</div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d126.5688!3d37.6501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c85a0c8c3b2a1%3A0x1234567890abcdef!2z6rK97Jqw64-EIOq5gO2PrOyLnCDthrXsp4Tsnakg6rCA7ZiE66GcIDIwMS01Ng!5e0!3m2!1sko!2skr"
                  className="relative z-10 rounded-xl"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  title="김포 공장 지도"
                />
              </div>
            </div>

            <div className="bg-cream p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                인천 사무실 (영업·상담)
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                인천광역시 동구 방축로 37번길 30, 1동 121호(송현동)
              </p>
              <div className="relative bg-stone-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-stone-500 text-sm">지도를 불러오는 중...</div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2!2d126.6332!3d37.4729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b78e2b1c3d4e5%3A0xfedcba0987654321!2z7J247LKc6rSR7Jet7IucIOuPmeq1rCDrsKnstpXroZwgMzfrsojquLggMzAs!5e0!3m2!1sko!2skr"
                  className="relative z-10 rounded-xl"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  title="인천 사무실 지도"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
