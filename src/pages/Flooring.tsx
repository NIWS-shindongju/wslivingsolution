import { Link } from 'react-router-dom';

export default function Flooring() {
  return (
    <div className="w-full">
      <section className="relative h-screen flex items-center justify-center bg-dark-slate">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-slate/60 to-dark-slate/90 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
          [동화자연마루가 시공된 프리미엄 인테리어 공간 - 진 그란데 스퀘어]
        </div>
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6">
            동화자연마루,<br/>발밑부터 다른 품격
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 font-light">27년 현장 경험으로 추천하는 프리미엄 바닥재</p>
        </div>
      </section>

      <section id="iconic" className="py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">아이코닉 스톤 컬렉션</h2>
            <p className="text-lg text-gray-400 font-light">바닥·벽·가구 동일 패턴으로 심리스 인테리어</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 mb-16">
            {['몬테화이트', '이모션블랑', '사하라라이트', '슬레이트모티프', '슬레이트스틸', '포틀랜드모티프', '포틀랜드스틸'].map((pattern) => (
              <div key={pattern} className="bg-warm-ivory rounded-lg p-6 text-center hover-lift">
                <div className="h-32 bg-gray-300 rounded mb-4 flex items-center justify-center text-xs text-gray-600">
                  [{pattern}]
                </div>
                <p className="text-sm text-charcoal font-normal">{pattern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jin" className="py-24 bg-warm-ivory">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">진(Jin) 시리즈</h2>
            <p className="text-lg text-stone-gray font-light">동화자연마루의 대표 강마루 라인업</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: '진 오리진', desc: '클래식 우드 강마루', size: '152×910' },
              { name: '진 테라', desc: '광폭 강마루', size: '190×1210' },
              { name: '진 테라 맥스', desc: '초광폭 프리미엄', size: '242×1820' },
              { name: '진 헤링본', desc: '헤링본 패턴 특화', size: '125×750' },
              { name: '진 그란데', desc: '타일형 프리미엄', size: 'W325×L810' },
              { name: '진 그란데 스퀘어', desc: '정사각 타일형', size: 'W650/805' },
              { name: '진 텍스쳐', desc: '깊이감 있는 텍스쳐', size: '190×1210' },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-lg overflow-hidden hover-lift">
                <div className="h-64 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  [{product.name} 시공 사진]
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-light mb-2">{product.name}</h3>
                  <p className="text-stone-gray mb-2">{product.desc}</p>
                  <p className="text-sm text-copper font-normal">{product.size}mm</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['NAF 코어', 'E0 최고등급', '10년 품질보증', '찍힘 방지'].map((badge) => (
              <div key={badge} className="bg-copper/10 border border-copper rounded-lg py-4 text-center">
                <p className="text-copper font-normal">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="other" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-light text-center mb-16">기타 바닥재 라인업</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: '나투스', type: '원목마루', desc: '천연 원목의 따뜻함' },
              { name: '바움', type: '원목마루', desc: '프리미엄 원목 라인' },
              { name: '클릭S', type: '강화마루', desc: '경제적이면서 내구성 우수' },
              { name: '듀오 텍스쳐', type: '강마루', desc: '복합코어 내수성 특화 (2025 신제품)' },
            ].map((product) => (
              <div key={product.name} className="bg-warm-ivory rounded-lg p-8">
                <h3 className="font-serif text-2xl font-light mb-2">{product.name}</h3>
                <p className="text-sm text-copper mb-3">{product.type}</p>
                <p className="text-stone-gray">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
            어떤 바닥재가 맞는지 모르겠다면?<br/>
            27년 현장 전문가가 상담해드립니다
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
