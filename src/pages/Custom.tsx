import { Link } from 'react-router-dom';
import { Cog, Drill, Zap, Disc } from 'lucide-react';
import { IMAGES } from '../constants/images';

export default function Custom() {
  const equipment = [
    { name: 'CNC Router', image: IMAGES.equipment.cncRouter, desc: '목재 정밀 가공' },
    { name: 'CNC 선반', image: IMAGES.equipment.cncLathe, desc: '원형 가공' },
    { name: 'MCT', image: IMAGES.equipment.mct, desc: '밀링 가공' },
    { name: 'Laser Cutter', image: IMAGES.equipment.laserCutter, desc: '레이저 정밀 절단' },
  ];

  const capabilities = [
    '흡음 타공판',
    '디자인 타공판',
    '가구 부자재',
    '사인물·간판',
    '건축 마감재',
    '기타 맞춤 제작'
  ];

  const materials = [
    {
      name: '목재',
      items: ['MDF', '합판', '원목'],
      image: IMAGES.materials.wood
    },
    {
      name: '금속',
      items: ['알루미늄', 'SUS(스테인리스)'],
      image: IMAGES.materials.metal
    },
    {
      name: '플라스틱',
      items: ['PEEK', 'POM', 'UPE 등'],
      image: null
    }
  ];

  const processSteps = [
    '도면 접수',
    '소재 선정',
    '가공',
    '검수',
    '포장·납품'
  ];

  return (
    <div className="w-full">
      <section className="relative h-48 md:h-96 flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroes.custom}
            alt="맞춤 가공 서비스"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal"></div>
        <div className="relative z-10 text-center text-white px-5">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4">목재 맞춤가공</h1>
          <p className="text-sm md:text-xl text-gray-300">김포 자체 공장에서, 어떤 형태든 깎아냅니다</p>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              김포 공장 보유 장비
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={`${item.name} 목재 가공 장비`}
                  className="w-full h-28 md:h-48 object-cover rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = IMAGES.equipment.cncRouter;
                  }}
                />
                <h3 className="font-serif text-xl font-bold text-charcoal text-center mb-2 mt-6">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              가공 가능 품목
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="bg-cream rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-deepgreen rounded-full"></div>
                </div>
                <div className="font-semibold text-charcoal">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              가공 소재
            </h2>
            <p className="text-sm md:text-xl text-gray-600">다루지 못하는 소재가 없습니다</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {materials.map((category, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={`${category.name} 가공 소재`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.materials.wood;
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                )}
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-charcoal text-center mb-6">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="bg-cream p-4 rounded-lg text-center text-charcoal font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-woodbrown/10 border-l-4 border-woodbrown rounded-lg p-6">
            <p className="text-sm md:text-base text-charcoal text-center leading-relaxed">
              (주)우성인더스는 <span className="font-bold">15년 이상 엔지니어링 플라스틱 볼베어링까지 가공</span>해온 정밀 가공 전문 기업입니다
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              가공 프로세스
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-deepgreen/30"></div>

              <div className="flex flex-col md:grid md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4 md:block bg-cream rounded-xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 bg-deepgreen rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl md:mb-4 md:mx-auto">
                        {index + 1}
                      </div>
                      <div className="md:text-center font-semibold text-charcoal">
                        {step}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-charcoal text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-6">
              어떤 형태든 가능합니다.<br />
              도면만 있으면 만들어드립니다.
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-8">
              15년 이상의 정밀 가공 경험으로 어떤 난이도의 작업도 수행합니다
            </p>
            <Link
              to="/contact"
              className="inline-block bg-deepgreen hover:bg-deepgreen/90 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              맞춤가공 견적문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
