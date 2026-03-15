import { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES } from '../constants/images';

interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  material: string;
  image: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['전체', '관공서', '교육', '상업', '주거'];

  const projects: Project[] = [
    { id: 1, title: '국회의사당', category: '관공서', year: 2023, material: '에코스텍', image: IMAGES.portfolio.parliament },
    { id: 2, title: '국립중앙디지털도서관', category: '관공서', year: 2023, material: '에코스텍 + 동화마루', image: IMAGES.portfolio.nationalLibrary },
    { id: 3, title: '대전철도청', category: '관공서', year: 2022, material: '에코스텍', image: IMAGES.portfolio.railwayOffice },
    { id: 4, title: '서울시 인재개발원', category: '관공서', year: 2022, material: '에코스텍', image: IMAGES.portfolio.seoulHR },
    { id: 5, title: '연세대학교 농구장', category: '교육', year: 2023, material: '동화마루 진', image: IMAGES.portfolio.yonseiGym },
    { id: 6, title: '두원공대', category: '교육', year: 2021, material: '에코스텍', image: IMAGES.portfolio.doowonUniv },
    { id: 7, title: '현대해상 연수원', category: '상업', year: 2022, material: '디자인월', image: IMAGES.portfolio.hyundaiTraining },
    { id: 8, title: '동화기업 여의도 회의실', category: '상업', year: 2023, material: '에코스텍 + 시그니월', image: IMAGES.portfolio.dongwhaOffice },
    { id: 9, title: '상업공간 A', category: '상업', year: 2023, material: '진 그란데', image: IMAGES.portfolio.commercialA },
    { id: 10, title: '주거공간 A', category: '주거', year: 2023, material: '진 테라', image: IMAGES.portfolio.residentialA },
  ];

  const filteredProjects = selectedCategory === '전체'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full">
      <section className="relative h-48 md:h-96 flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroes.portfolio}
            alt="시공 사례"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4">시공사례</h1>
          <p className="text-sm md:text-xl text-gray-300">27년간 현장에서 쌓은 기록</p>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto gap-2 -mx-5 px-5 pb-2 scrollbar-hide md:flex-wrap md:justify-center md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-deepgreen text-white shadow-lg'
                    : 'bg-white text-charcoal hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-cream rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={`${project.title} 시공사례`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.portfolio.parliament;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-deepgreen transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{project.year}</span>
                    <span>·</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="text-sm text-gray-500">{project.material}</div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">해당 카테고리의 시공사례가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 md:h-80">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} 시공사례`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded">
                {selectedProject.year} · {selectedProject.category}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
                {selectedProject.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-cream p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">시공 연도</div>
                  <div className="font-bold text-charcoal">{selectedProject.year}</div>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">카테고리</div>
                  <div className="font-bold text-charcoal">{selectedProject.category}</div>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">사용 자재</div>
                  <div className="font-bold text-charcoal">{selectedProject.material}</div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">프로젝트 정보</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.title}에 {selectedProject.material}을(를) 적용한 시공 사례입니다.
                  {selectedProject.year}년 완공된 이 프로젝트는 우성리빙솔루션의 전문적인 시공 기술과
                  노하우가 집약된 대표 사례로, 공간의 특성에 맞는 최적의 마감재를 선택하고
                  정밀하게 시공하여 뛰어난 결과물을 완성했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
