import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../constants/images';

export default function Flooring() {
  const patterns = [
    { key: 'monteWhite', name: '몬테화이트', isNew: true, img: "https://sspark.genspark.ai/cfimages?u1=SJXPliw24Z%2FIelEBfevN%2F%2BqwqSIjFb1%2FTSLvSkAig4t7EOAovVvfBjOMm0p98JGztaBgmkrOSBG%2BsjiExxZeQZQESNby5UTC%2BQJn%2BVKp7QVWAQ3BTbHSxp478YJgm5A%3D&u2=ulCmHJRUz7BMStBj&width=1024" },
    { key: 'emotionBlanc', name: '이모션블랑', isNew: true, img: "https://sspark.genspark.ai/cfimages?u1=L7VrOH6OSkh9oQdiMHmJRuYZptM8GgtxzS3umfQhqJ2Qm%2BwCDBPoaRaz9J2yCcOCUdreBLaiNZaP2n9owyqzyS3ZDEk33x43s29uNljj7kcdRNbD3IhwSmc1xEa54sf%2BLwQ2&u2=rVMkgWLQNtMP9OSJ&width=1024" },
    { key: 'saharaLight', name: '사하라라이트', isNew: false, img: "https://sspark.genspark.ai/cfimages?u1=sfhwcOHjQid%2BKwJRFQLF3nLeSyEpA6fCCPab3nCISLONv8ZiiVVVnz5gi9B6BhLFs2eiQcHO8TNoS6JSMF%2FdFZ%2FR89IbyMLfQlqpYySkuzk0XaXcLYyVUNJnqiWlkrTScTs%3D&u2=TaWyaAzz%2FUsTwmGZ&width=1024" },
    { key: 'slateMotif', name: '슬레이트모티프', isNew: true, img: "https://sspark.genspark.ai/cfimages?u1=nDYVHBDC8g53f5ufdah2o47rMR%2BRxU6hQohVTc5RzcRrUM0vfjaGssiLVHm8uMLqcrnNoa%2B6qpRfk5dCrCHlkz01BOf%2F0bAmNgQ6ngIJJqtxRZ1Sz8fu4yD2KmTZ%2BQM%3D&u2=cKXyEo%2BkkXz1hpKH&width=1024" },
    { key: 'slateSteel', name: '슬레이트스틸', isNew: false, img: "https://sspark.genspark.ai/cfimages?u1=9daGJcI3WyGXlE6%2BpL314nMLY9cY%2F3U%2F88Q72mOMp%2F8bFJ%2FLJ93K7tS8SCTUhQL%2B5%2FpPzvc4EYkv1zzarvIk0h4y8LkJil1ezHxoG6f0IrdL5E3ajRuInjq%2BH3vH408%3D&u2=Ak9OITkXaNJhUuWX&width=1024" },
    { key: 'portlandMotif', name: '포틀랜드모티프', isNew: true, img: "https://sspark.genspark.ai/cfimages?u1=8A5blL6IEjbR6RcZ1OJ16ZAB%2BjGFzKHXfWyupdofObTfLcqke5Yh5TNdveR6wYkb1oniqakjcunOYWF7g054kdGoo8%2FiMBJkPDiDYCIDRxIIlX550MJK74UsHzp6koHpFVs%3D&u2=eToLsPUsN%2FIhYjg9&width=1024" },
    { key: 'portlandSteel', name: '포틀랜드스틸', isNew: false, img: "https://sspark.genspark.ai/cfimages?u1=Nr0%2FIfX%2BfyKtPATQgQObdUXJ%2BtV3AxXKsUY%2FevKFB1KGz4wI7lIKJGW6J2ut4QEEGzm5aDjRm4ENDB6kC66ZGuEfvmt38VTdKBn11vUTuhZNrbh84S7ipexsfXeriQ5s7yk%3D&u2=%2F%2BNl0iFNLb%2BUnfb%2F&width=1024" },
  ];

  const jinSeriesProducts = [
    { id: 'jin-origin', name: '진 오리진', imgSrc: "https://sspark.genspark.ai/cfimages?u1=Q7595GHS8TOZ4RCz1%2BmEhC0nkHSnoLCVmtqf9JaPLbN3%2B%2FkzDCHiay68vhF8CPrebyBgy9J3MIifQGUBv1f7ivo6nvVN%2Bsh1WGPssxI1RkPA0zXmBrnJDL5%2Fwf4k%2FQ%3D%3D&u2=N%2BrbGV1vZ9hCW%2Bnv&width=1024", alt: '진 오리진 바닥재', type: '원목강마루', fallbackText: '진 오리진' },
    { id: 'jin-tera', name: '진 테라', imgSrc: "https://sspark.genspark.ai/cfimages?u1=sfhwcOHjQid%2BKwJRFQLF3nLeSyEpA6fCCPab3nCISLONv8ZiiVVVnz5gi9B6BhLFs2eiQcHO8TNoS6JSMF%2FdFZ%2FR89IbyMLfQlqpYySkuzk0XaXcLYyVUNJnqiWlkrTScTs%3D&u2=TaWyaAzz%2FUsTwmGZ&width=1024", alt: '진 테라 바닥재', type: '광폭 강마루', fallbackText: '진 테라' },
    { id: 'jin-tera-max', name: '진 테라 맥스', imgSrc: "https://sspark.genspark.ai/cfimages?u1=L7VrOH6OSkh9oQdiMHmJRuYZptM8GgtxzS3umfQhqJ2Qm%2BwCDBPoaRaz9J2yCcOCUdreBLaiNZaP2n9owyqzyS3ZDEk33x43s29uNljj7kcdRNbD3IhwSmc1xEa54sf%2BLwQ2&u2=rVMkgWLQNtMP9OSJ&width=1024", alt: '진 테라 맥스 바닥재', type: '초광폭 강마루', fallbackText: '진 테라 맥스' },
    { id: 'jin-herringbone', name: '진 헤링본', imgSrc: "https://sspark.genspark.ai/cfimages?u1=nDYVHBDC8g53f5ufdah2o47rMR%2BRxU6hQohVTc5RzcRrUM0vfjaGssiLVHm8uMLqcrnNoa%2B6qpRfk5dCrCHlkz01BOf%2F0bAmNgQ6ngIJJqtxRZ1Sz8fu4yD2KmTZ%2BQM%3D&u2=cKXyEo%2BkkXz1hpKH&width=1024", alt: '진 헤링본 바닥재', type: '헤링본 패턴', fallbackText: '진 헤링본' },
    { id: 'jin-grande', name: '진 그란데', imgSrc: "https://sspark.genspark.ai/cfimages?u1=8zHPzS2uvICR0a6efZ69v0c%2Bd8CWf%2BnZfUzTl0ITcP9BWSW3TEKx4mVmebOUNBrnXvG%2BEhZXH28pA1F0XI%2FTL5EMVqvipFE8TQVAH%2FoTkq7wNfe4NCuDJZivdA%3D%3D&u2=txT6r43e4gaZw89x&width=1024", alt: '진 그란데 바닥재', type: '타일형 강마루', fallbackText: '진 그란데' },
    { id: 'jin-grande-square', name: '진 그란데 스퀘어', imgSrc: "https://sspark.genspark.ai/cfimages?u1=sJzu9Z6LyOjuwBfBh1gnc7SsrwX4BWv67jU0kTnevC%2FLFkRRrZT6g4TPziMUsc7Efvt%2F8kkpdUFrBql%2B%2BzwOZqltG%2FOWJ3Ka2KsAz3%2BTH8E%3D&u2=9Nz%2F1%2BJNdqlqMIi2&width=1024", alt: '진 그란데 스퀘어 바닥재', type: '정사각 타일형', fallbackText: '진 그란데 스퀘어' },
    { id: 'jin-texture', name: '진 텍스처', imgSrc: "https://sspark.genspark.ai/cfimages?u1=9daGJcI3WyGXlE6%2BpL314nMLY9cY%2F3U%2F88Q72mOMp%2F8bFJ%2FLJ93K7tS8SCTUhQL%2B5%2FpPzvc4EYkv1zzarvIk0h4y8LkJil1ezHxoG6f0IrdL5E3ajRuInjq%2BH3vH408%3D&u2=Ak9OITkXaNJhUuWX&width=1024", alt: '진 텍스처 바닥재', type: '엠보싱 마감', fallbackText: '진 텍스처' },
  ];

  const otherFlooringProducts = [
    { id: 'natus', name: '나투스', imgSrc: "https://sspark.genspark.ai/cfimages?u1=8A5blL6IEjbR6RcZ1OJ16ZAB%2BjGFzKHXfWyupdofObTfLcqke5Yh5TNdveR6wYkb1oniqakjcunOYWF7g054kdGoo8%2FiMBJkPDiDYCIDRxIIlX550MJK74UsHzp6koHpFVs%3D&u2=eToLsPUsN%2FIhYjg9&width=1024", alt: '나투스 바닥재', type: '원목강마루', fallbackText: '나투스' },
    { id: 'baum', name: '바움', imgSrc: "https://sspark.genspark.ai/cfimages?u1=Nr0%2FIfX%2BfyKtPATQgQObdUXJ%2BtV3AxXKsUY%2FevKFB1KGz4wI7lIKJGW6J2ut4QEEGzm5aDjRm4ENDB6kC66ZGuEfvmt38VTdKBn11vUTuhZNrbh84S7ipexsfXeriQ5s7yk%3D&u2=%2F%2BNl0iFNLb%2BUnfb%2F&width=1024", alt: '바움 바닥재', type: '프리미엄 원목', fallbackText: '바움' },
    { id: 'click-s', name: '클릭S', imgSrc: "https://sspark.genspark.ai/cfimages?u1=E31nxApL9vbk5H3UqIu1lPP5k%2FXM9Q1sQrjTe28t4Z4NjBROg1M76dc9rdeh72HAT5AK%2FR1TNAeVkRTTWvxI3%2BIAxGHidMP08LXGbHX3Yyot84Vpv%2FVry7Q%2FA3JhxlWN&u2=4C5DDSWPjjyrIMur&width=1024", alt: '클릭S 바닥재', type: '강화마루', fallbackText: '클릭S' },
    { id: 'duo-texture', name: '듀오 텍스처', imgSrc: "https://sspark.genspark.ai/cfimages?u1=05E9R7AOJ8mvw30idedmNZkdYlGPQD0CSuU1WZCNP4O0rtvQQHoiP8ZSRd%2FfHelNQOLw95AWJMoknsD%2FXGGNnYjV73nM6VFIa1xpABsyOA6uU335kXfXF1os9pI%3D&u2=v60ApCDGwnXBcSbA&width=1024", alt: '듀오 텍스처 바닥재', type: '강화마루', fallbackText: '듀오 텍스처' },
  ];

  return (
    <div className="w-full">
      <section className="relative h-[500px] md:h-[500px] overflow-hidden">
        <SafeImage
          src="https://sspark.genspark.ai/cfimages?u1=8zHPzS2uvICR0a6efZ69v0c%2Bd8CWf%2BnZfUzTl0ITcP9BWSW3TEKx4mVmebOUNBrnXvG%2BEhZXH28pA1F0XI%2FTL5EMVqvipFE8TQVAH%2FoTkq7wNfe4NCuDJZivdA%3D%3D&u2=txT6r43e4gaZw89x&width=1024"
          alt="동화자연마루 아이코닉 스톤 컬렉션"
          className="absolute inset-0 w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-copper/20 border border-copper text-copper px-4 py-2 rounded-full text-xs md:text-sm font-normal mb-4 md:mb-6">
              FLOORING
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 leading-tight">
              동화자연마루<br />전 제품 라인업
            </h1>
            <p className="text-warm-ivory text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-light">
              진 시리즈부터 아이코닉 스톤까지,<br />
              27년 경험으로 최적의 바닥재를 제안합니다
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-2 md:mb-4">
              아이코닉 스톤 컬렉션
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              천연 스톤의 아름다움을 담은 7가지 패턴
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {patterns.map((p) => (
              <div key={p.key} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <SafeImage
                    src={p.img}
                    alt={`아이코닉 스톤 ${p.name} 패턴`}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {p.isNew && (
                    <span className="absolute top-3 right-3 bg-copper text-white text-xs px-2 py-1 rounded-full font-medium">NEW</span>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white text-lg font-bold">{p.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-2 md:mb-4">
              진(Jin) 시리즈
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              프리미엄 강마루의 정점
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {jinSeriesProducts.map((product) => (
              <Link
                key={product.id}
                to={`/flooring/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <SafeImage
                    src={product.imgSrc}
                    alt={product.alt}
                    className="w-full h-48 md:h-56 rounded-t-xl"
                    fallbackText={product.fallbackText || product.name}
                  />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal text-xs md:text-base">자세히 보기</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="text-xs text-copper mb-1 md:mb-2">{product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-copper font-normal text-xs md:text-sm">
                    자세히 <ArrowRight size={14} className="ml-1 md:hidden" /><ArrowRight size={18} className="ml-1 hidden md:inline" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-charcoal mb-2 md:mb-4">
              기타 바닥재
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-gray font-light">
              다양한 공간에 맞는 선택
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {otherFlooringProducts.map((product) => (
              <Link
                key={product.id}
                to={`/flooring/${product.id}`}
                className="group bg-warm-ivory rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <SafeImage
                    src={product.imgSrc}
                    alt={product.alt}
                    className="w-full h-40 md:h-48 rounded-t-xl"
                    fallbackText={product.fallbackText || product.name}
                  />
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-normal text-xs md:text-base">자세히 보기</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="text-xs text-copper mb-1 md:mb-2">{product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-light text-charcoal mb-2 group-hover:text-copper transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-copper font-normal text-xs md:text-sm">
                    자세히 <ArrowRight size={14} className="ml-1 md:hidden" /><ArrowRight size={18} className="ml-1 hidden md:inline" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 bg-dark-slate text-white">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 leading-tight">
            어떤 바닥재가 <br className="md:hidden" />적합할지<br className="hidden md:block" />궁금하신가요?
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 font-light">
            공간 특성과 예산에 맞는 최적의 제품을 추천해드립니다
          </p>
          <Link
            to="/contact"
            className="inline-block bg-copper hover:bg-copper-dark text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg text-base md:text-lg transition-all"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
