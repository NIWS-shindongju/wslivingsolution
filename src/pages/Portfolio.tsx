import { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES } from '../constants/images';

interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  material: string;
  location: string;
  description: string;
  image: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['전체', '관공서·공공기관', '교육시설', '상업공간', '주거공간'];

  const projects: Project[] = [
    {
      id: 1,
      title: '국회의사당 리모델링',
      year: '2022',
      category: '관공서·공공기관',
      material: '디자인월',
      location: '서울특별시 영등포구',
      description: '대한민국 국회의사당 리모델링 프로젝트에 디자인월 납품 및 시공. 국가를 대표하는 공간에 프리미엄 벽장재를 적용하여 품격 있는 공간을 완성했습니다.',
      image: IMAGES.unsplash.parliament
    },
    {
      id: 2,
      title: '국립중앙디지털도서관',
      year: '2008',
      category: '관공서·공공기관',
      material: '에코스텍',
      location: '서울특별시 서초구',
      description: '국립중앙도서관 디지털도서관 신축 시 에코스텍 흡음 패널 납품 및 시공. 도서관의 조용하고 쾌적한 환경 조성에 기여했습니다.',
      image: IMAGES.unsplash.library
    },
    {
      id: 3,
      title: '대전철도청',
      year: '2009',
      category: '관공서·공공기관',
      material: '에코스텍',
      location: '대전광역시',
      description: '대전철도청 사무 공간에 에코스텍 흡음 패널 납품. 쾌적한 업무 환경 조성.',
      image: IMAGES.wsindus.ecostecOffice1
    },
    {
      id: 4,
      title: '서울시 인재개발원',
      year: '2010',
      category: '관공서·공공기관',
      material: '에코스텍',
      location: '서울특별시',
      description: '서울시 인재개발원 교육 공간에 에코스텍 납품 및 시공. 교육 환경의 음향 품질 개선.',
      image: IMAGES.wsindus.ecostecComplete
    },
    {
      id: 5,
      title: '연세대학교 송도캠퍼스 농구장',
      year: '2011',
      category: '교육시설',
      material: '에코스텍',
      location: '인천광역시 연수구',
      description: '연세대학교 송도캠퍼스 실내 농구장에 에코스텍 시공. 체육관 특유의 반향음 제어로 쾌적한 운동 환경 조성.',
      image: IMAGES.unsplash.gymnasium
    },
    {
      id: 6,
      title: '두원공대 파주캠퍼스',
      year: '2022',
      category: '교육시설',
      material: '에코스텍',
      location: '경기도 파주시',
      description: '두원공과대학교 파주캠퍼스 강의실 및 다목적 공간에 에코스텍 납품 및 시공.',
      image: IMAGES.unsplash.universityHall
    },
    {
      id: 7,
      title: '현대해상 연수원',
      year: '2005',
      category: '상업공간',
      material: '에코스텍',
      location: '경기도',
      description: '현대해상화재보험 연수원에 에코스텍 납품 및 시공. 우성리빙솔루션의 첫 대형 프로젝트 중 하나.',
      image: IMAGES.unsplash.conferenceRoom
    },
    {
      id: 8,
      title: '동화기업 여의도 회의실',
      year: '2020',
      category: '상업공간',
      material: '에코스텍',
      location: '서울특별시 영등포구',
      description: '에코스텍 제조사인 동화기업 본사 회의실에 적용. 제조사가 자사 사옥에 선택한 시공 파트너.',
      image: IMAGES.wsindus.ecostecPanel
    },
    {
      id: 9,
      title: '상업공간 프로젝트 A',
      year: '2023',
      category: '상업공간',
      material: '디자인월',
      location: '서울특별시',
      description: '고급 상업 공간에 디자인월 시공 사례.',
      image: IMAGES.wsindus.photobooth1
    },
    {
      id: 10,
      title: '주거공간 프로젝트 A',
      year: '2024',
      category: '주거공간',
      material: '동화자연마루',
      location: '경기도',
      description: '프리미엄 주거 공간에 동화자연마루 시공 사례.',
      image: IMAGES.unsplash.modernLiving
    }
  ];

  const filteredProjects = selectedCategory === '전체'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full">
      <section className="relative h-48 md:h-96 flex items-center justify-center bg-charcoal" style={{backgroundImage: `url(${IMAGES.unsplash.conferenceRoom})`}}>
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
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img src={project.image} alt={`${project.title} 시공사례`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-3 text-deepgreen text-sm font-semibold">
                      <span>{project.year}</span>
                      <span>·</span>
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-deepgreen transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{project.year}</span>
                    <span>·</span>
                    <span>{project.material}</span>
                  </div>
                  <div className="text-sm text-gray-500">{project.location}</div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="font-serif text-2xl font-bold text-charcoal">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <div className="h-48 md:h-96 rounded-xl overflow-hidden mb-8">
                <img src={selectedProject.image} alt={`${selectedProject.title} 시공사례`} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
                <div className="bg-cream p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">위치</div>
                  <div className="font-bold text-charcoal">{selectedProject.location}</div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-4">프로젝트 설명</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
