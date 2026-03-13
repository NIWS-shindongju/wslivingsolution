import { Link } from 'react-router-dom';

export default function Wall() {
  return (
    <div className="w-full">
      <section className="relative h-screen flex items-center justify-center bg-dark-slate">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-slate/60 to-dark-slate/90 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
          [시그니월이 시공된 모던 인테리어 공간]
        </div>
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6">
            벽 하나로<br/>공간이 달라집니다
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 font-light">동화기업 프리미엄 벽장재</p>
        </div>
      </section>

      <section id="signiwall" className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 lg:h-[600px] bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
              [시그니월 몬테화이트 시공 사진]
            </div>
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">시그니월</h2>
              <p className="text-xl text-copper font-normal mb-6">초대형 빅슬랩, 이음매를 최소화</p>
              <p className="text-lg text-stone-gray font-light mb-8 leading-relaxed">
                압도적인 사이즈 1,010×2,460×9mm. 거의 바닥부터 천장까지 단 한 장으로 시공 가능한 초대형 벽장재. 이음매가 최소화되어 공간이 더욱 넓고 매끄럽게 느껴집니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-sm text-stone-gray mb-1">사이즈</p>
                  <p className="text-copper font-normal">1,010×2,460×9mm</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-sm text-stone-gray mb-1">특징</p>
                  <p className="text-copper font-normal">초대형 빅슬랩</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="designwall" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">디자인월</h2>
            <p className="text-lg text-stone-gray font-light">국내 최초 입체무늬 공법의 프리미엄 벽장재</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-ivory rounded-lg overflow-hidden hover-lift">
              <div className="h-80 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                [디자인월 패턴 사진]
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-light mb-2">디자인월</h3>
                <p className="text-stone-gray mb-4">325×790mm 표준 사이즈</p>
                <p className="text-sm text-charcoal font-light">대리석, 원목 등 다양한 질감을 사실적으로 표현</p>
              </div>
            </div>

            <div className="bg-warm-ivory rounded-lg overflow-hidden hover-lift">
              <div className="h-80 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                [디자인월 그란데 패턴 사진]
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-light mb-2">디자인월 그란데</h3>
                <p className="text-stone-gray mb-4">590×1200mm 초광폭</p>
                <p className="text-sm text-charcoal font-light">이음매를 최소화한 대형 패널</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dheim" className="py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">디하임 (D:Heim)</h2>
              <p className="text-xl text-copper font-normal mb-6">싱크대·붙박이장·가구장의 기본, 친환경 LPM</p>
              <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
                2024년 출시된 동화기업의 친환경 프리미엄 가구 마감재. E0 최고 등급 보드에 고강도 표면재를 적용. 새집증후군 방지. LPM, ACP 라인업 보유.
              </p>
              <div className="bg-copper/20 text-copper px-4 py-2 rounded-full inline-block">
                2024 신제품
              </div>
            </div>
            <div className="h-96 lg:h-[500px] bg-gray-700 rounded-lg flex items-center justify-center text-sm text-gray-400">
              [디하임 LPM 가구 도어 사진]
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light mb-6">패턴 갤러리</h2>
            <p className="text-stone-gray font-light">바닥재와 동일 패턴으로 심리스 인테리어 구현</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['몬테화이트', '이모션블랑', '사하라라이트', '슬레이트모티프', '슬레이트스틸', '포틀랜드모티프', '포틀랜드스틸'].map((pattern) => (
              <div key={pattern} className="bg-white rounded-lg p-4 hover-lift">
                <div className="h-24 bg-gray-200 rounded mb-3 flex items-center justify-center text-xs text-gray-500">
                  [{pattern}]
                </div>
                <p className="text-xs text-charcoal text-center">{pattern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
            공간에 맞는 벽재를 추천해드립니다
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-dark-slate border border-white hover:bg-copper hover:border-copper text-white px-10 py-4 rounded-lg text-lg transition-all"
          >
            견적 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
