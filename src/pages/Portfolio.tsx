import { Link } from 'react-router-dom';
import { Phone, FileText, Truck, Wrench, CheckCircle, MessageCircle, ArrowRight, Shield, Clock, Users } from 'lucide-react';

export default function Portfolio() {
  const steps = [
    { icon: Phone, title: '무료 상담', desc: '전화·카카오톡·방문 상담 모두 무료. 공간 사진만 보내주셔도 됩니다.', accent: '1' },
    { icon: FileText, title: '맞춤 견적', desc: '제품 선정부터 수량 산출까지. 현장 경험 27년의 정확한 견적을 드립니다.', accent: '2' },
    { icon: Truck, title: '자재 납품', desc: '동화기업 공식 루트로 정품만 납품. 김포 자체 공장에서 맞춤 가공도 가능합니다.', accent: '3' },
    { icon: Wrench, title: '전문 시공', desc: '자사 시공팀이 직접 시공합니다. 하청 없이, 책임지고 완성합니다.', accent: '4' },
    { icon: CheckCircle, title: 'A/S 보장', desc: '시공 후에도 하자 발생 시 신속 대응. 동화기업 10년 품질보증 + 우성동화 시공보증.', accent: '5' },
  ];

  const strengths = [
    { icon: Shield, title: '견적 비용 0원', desc: '상담부터 현장 실측까지 모든 견적 과정이 무료입니다. 부담 없이 문의하세요.' },
    { icon: Users, title: '하청 없는 직접 시공', desc: '외주 시공팀이 아닌, 우성동화 자체 인력이 현장에 투입됩니다. 품질 편차가 없습니다.' },
    { icon: Clock, title: '납품부터 시공까지 원스톱', desc: '자재 선정 → 견적 → 납품 → 시공 → A/S를 한 곳에서. 중간 마진이 없어 합리적입니다.' },
  ];

  const records = [
    '국회의사당 리모델링 디자인월 납품 (2022)',
    '국립중앙디지털도서관 에코스텍 납품·시공 (2008)',
    '서울시 인재개발원 에코스텍 납품·시공 (2010)',
    '연세대학교 송도캠퍼스 농구장 에코스텍 납품·시공 (2011)',
    '현대해상 연수원 에코스텍 납품·시공 (2005)',
    '두원공대 파주캠퍼스 에코스텍 납품·시공 (2022)',
    '대전철도청 에코스텍 납품 (2009)',
    '라이즈 오토그래프 호텔 포토부스 제작·납품 (2024)',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-dark-slate via-charcoal to-dark-slate">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-6">
              견적 무료 · 시공 전문
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight">
              견적부터 시공까지<br />
              <span className="font-normal text-copper">한 번에, 한 곳에서</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 font-light leading-relaxed">
              상담·견적·납품·시공·A/S — 모든 과정을 우성동화가 직접 합니다.<br className="hidden md:block" />
              27년간 관공서부터 프리미엄 주거까지, 현장으로 증명해왔습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105 text-center"
              >
                무료 견적 신청하기
              </Link>
              <a
                href="tel:032-589-7744"
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-normal transition-all text-center"
              >
                032-589-7744 전화하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 우성동화가 다른 이유 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-light text-dark-slate mb-4">
              우성동화가 다른 이유
            </h2>
            <p className="text-base md:text-lg text-stone-gray font-light">
              단순 자재 판매가 아닙니다. 시공까지 책임집니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {strengths.map((item, i) => (
              <div key={i} className="bg-warm-ivory rounded-2xl p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-copper/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-copper" size={32} />
                </div>
                <h3 className="text-xl font-serif font-normal text-dark-slate mb-3">{item.title}</h3>
                <p className="text-sm text-stone-gray font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 프로세스 */}
      <section className="py-16 md:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-light text-dark-slate mb-4">
              상담부터 시공까지, 이렇게 진행됩니다
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-white rounded-xl p-6 md:p-8 shadow-sm hover-lift">
                <div className="flex-shrink-0 w-14 h-14 bg-copper rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
                  {step.accent}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="text-copper" size={20} />
                    <h3 className="text-lg md:text-xl font-serif font-normal text-dark-slate">{step.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-stone-gray font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 납품·시공 실적 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-light text-dark-slate mb-4">
              주요 납품·시공 실적
            </h2>
            <p className="text-base text-stone-gray font-light">
              27년간 까다로운 현장에서 쌓아온 기록입니다
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {records.map((record, i) => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 bg-copper/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-copper" size={16} />
                </div>
                <span className="text-sm md:text-base text-charcoal font-light">{record}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-stone-gray font-light">
              이 외에도 다수의 주거·상업·공공 시설 납품 및 시공 실적을 보유하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-copper to-copper-dark text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light mb-4">
            지금 바로 무료 견적을 받아보세요
          </h2>
          <p className="text-base md:text-lg text-white/80 font-light mb-8">
            전화 한 통이면 시작됩니다. 공간 사진만 보내주셔도 개략 견적을 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-warm-ivory text-copper px-8 py-4 rounded-lg text-lg font-normal transition-all hover:scale-105"
            >
              무료 견적 신청
            </Link>
            <a
              href="tel:032-589-7744"
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-normal transition-all text-center"
            >
              032-589-7744
            </a>
            <a
              href="http://pf.kakao.com/_MdhEX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-charcoal px-8 py-4 rounded-lg text-lg font-normal transition-all text-center"
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
