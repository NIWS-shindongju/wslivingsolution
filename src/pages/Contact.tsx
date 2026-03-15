import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../constants/images';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: '',
    quantity: '',
    deadline: '',
    message: '',
    files: null as FileList | null,
    agree: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('견적 요청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).files }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="w-full">
      <section className="relative h-[300px] md:h-[500px] flex items-center justify-center bg-charcoal">
        <SafeImage
          src={IMAGES.heroes.contact}
          alt="우성리빙솔루션 견적문의"
          className="absolute inset-0 w-full h-full"
          loading="eager"
          fallbackText="견적 문의"
        />
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">견적문의</h1>
          <p className="text-lg md:text-xl text-gray-300">
            어떤 공간이든 물어보세요.<br />현장에서 답을 찾아온 27년이 함께합니다.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 order-last md:order-first">
              <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 lg:p-12">
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">견적 요청서</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                        placeholder="회사명 (선택)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        이메일
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      제품 카테고리
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                    >
                      <option value="">선택해주세요</option>
                      <option value="에코스텍">에코스텍</option>
                      <option value="세이프월">세이프월</option>
                      <option value="디자인월">디자인월</option>
                      <option value="마루">마루</option>
                      <option value="디하임">디하임</option>
                      <option value="원자재">원자재(MDF·합판 등)</option>
                      <option value="맞춤가공">목재 맞춤가공</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        예상 수량 또는 면적
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                        placeholder="예: 50㎡, 100장 등"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        희망 납기일
                      </label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      상세 문의 내용
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all resize-none"
                      placeholder="프로젝트 내용, 시공 위치, 특이사항 등을 자세히 적어주시면 더 정확한 견적을 드릴 수 있습니다."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      파일 첨부
                    </label>
                    <input
                      type="file"
                      name="files"
                      multiple
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-deepgreen/20 outline-none transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-2">도면, 참고 이미지 등을 첨부해주세요</p>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      required
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-deepgreen border-gray-300 rounded focus:ring-deepgreen"
                    />
                    <label htmlFor="agree" className="ml-3 text-sm text-gray-700">
                      <span className="text-red-500">*</span> 개인정보 수집 및 이용에 동의합니다.
                      (수집 항목: 이름, 연락처, 이메일 등 | 목적: 견적 제공 및 상담 | 보유기간: 상담 완료 후 1년)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-deepgreen hover:bg-deepgreen/90 text-white py-3.5 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    견적 요청하기
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6 order-first md:order-last">
              <a href="tel:032-589-7744" className="block bg-copper text-white text-center py-4 rounded-xl text-xl font-normal md:hidden mb-4">
                📞 032-589-7744
              </a>

              <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-6">연락처 정보</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-deepgreen" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal mb-1">전화</div>
                      <a href="tel:032-589-7744" className="text-deepgreen text-lg font-bold hover:underline">
                        032-589-7744
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-deepgreen" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal mb-1">이메일</div>
                      <a href="mailto:wsindus@wsindus.com" className="text-gray-700 hover:text-deepgreen hover:underline">
                        wsindus@wsindus.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-deepgreen" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal mb-1">영업시간</div>
                      <div className="text-gray-700">평일 09:00~18:00</div>
                      <div className="text-sm text-gray-500">(주말·공휴일 휴무)</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-deepgreen" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-charcoal mb-1">김포 공장</div>
                        <div className="text-sm text-gray-700">경기도 김포시 통진읍 가현로 201-56</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-deepgreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-deepgreen" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-charcoal mb-1">인천 사무실</div>
                        <div className="text-sm text-gray-700">인천광역시 동구 방축로 37번길 30, 1동 121호</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-400 rounded-2xl shadow-xl p-5 md:p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-yellow-400" size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  카카오톡 상담
                </h3>
                <p className="text-sm text-charcoal/80 mb-4">
                  빠른 상담이 필요하신가요?
                </p>
                <a
                  href="#"
                  className="inline-block bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all md:hidden mb-4"
                >
                  카카오톡으로 문의하기
                </a>
                <a
                  href="#"
                  className="hidden md:inline-block bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  카카오톡으로 문의하기
                </a>
              </div>

              <div className="bg-deepgreen/10 border-l-4 border-deepgreen rounded-lg p-5 md:p-6">
                <p className="text-sm text-charcoal leading-relaxed">
                  동화기업 본사를 통해 문의하셔도 현장 상담은 저희가 담당합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
