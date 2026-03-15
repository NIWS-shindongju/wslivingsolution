// ========================================
// 동화자연마루 유튜브 썸네일 (공개 URL, 핫링크 가능)
// ========================================
const YT = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const IMAGES = {
  // ─── 히어로 배경 ───
  heroes: {
    // 동화 아이코닉 스톤 컬렉션 공식 영상 썸네일
    home: YT('uyjzIFzD_cM'),        // 이모션블랑 바닥·벽·가구 원씬
    flooring: YT('Hy6CQdOq6xI'),    // 진그란데 스퀘어 이모션블랑 ft.셀핀
    wall: YT('aUPrKboFULU'),        // 시그니월 이모션블랑 시공 현장
    ecostec: '',                     // 에코스텍 전용 영상 없음 → fallback
    custom: '',                      // 우성인더스 맞춤가공 → fallback
    portfolio: YT('uyjzIFzD_cM'),   // 시공사례 배경
    about: '',                       // 회사소개 → fallback
    contact: '',                     // 연락처 → fallback
    estimate: YT('NqNr_fMOZo4'),    // 견적 페이지
  },

  // ─── 아이코닉 스톤 컬렉션 7종 패턴 ───
  // 패턴별 전용 이미지가 유튜브에서 추출 불가하므로,
  // 동화 공식 제품 페이지 URL을 주석으로 남기고 fallback 처리.
  // 사용자가 직접 greendongwha.com에서 우클릭 → 이미지 URL 복사 후 교체할 것.
  iconic: {
    collectionBanner: YT('uyjzIFzD_cM'),  // 컬렉션 배너
    monteWhite: '',      // https://www.greendongwha.com/product/detail/2599
    emotionBlanc: '',    // https://www.greendongwha.com/product/detail/2085
    saharaLight: '',     // https://www.greendongwha.com/product/detail/2086
    slateMotif: '',      // https://www.greendongwha.com/product/detail/2883
    slateSteel: '',      // https://www.greendongwha.com/product/detail/2884
    portlandMotif: '',   // https://www.greendongwha.com/product/detail/2881
    portlandSteel: '',   // https://www.greendongwha.com/product/detail/2882
  },

  // ─── 동화 제품 카테고리별 대표 이미지 ───
  products: {
    // 진 시리즈
    jinGrande: YT('NqNr_fMOZo4'),       // 진 그란데 스퀘어 이모션블랑 공간
    jinGrandeSquare: YT('Hy6CQdOq6xI'), // 진 그란데 스퀘어 ft.셀핀
    jinOrigin: '',                       // https://www.greendongwha.com/product/brand/jin/
    jinHerringbone: '',                  // https://www.greendongwha.com/product/detail/2169
    jinTera: '',                         // https://www.greendongwha.com/product/detail/2094
    jinTeraMax: '',                      // https://www.greendongwha.com/product/detail/2346
    jinTexture: '',                      // https://www.greendongwha.com/product/detail/2347

    // 벽재
    signiwall: YT('aUPrKboFULU'),       // 시그니월 이모션블랑
    designwall: '',                      // https://www.greendongwha.com/product/detail/2560
    designwallGrande: '',                // https://www.greendongwha.com/product/detail/2561
    dheim: '',                           // https://www.greendongwha.com/product/detail/2570

    // 기능성 벽재
    ecostec: '',                         // https://www.greendongwha.com/product/detail/2460
    safewall: '',                        // https://www.greendongwha.com/product/detail/2478

    // 기타 바닥재
    natus: '',                           // https://www.greendongwha.com/product/brand/natus/
    baum: '',                            // https://www.greendongwha.com/product/detail/2206
    clickS: '',                          // https://www.greendongwha.com/product/brand/click-s/
    duoTexture: '',                      // https://www.greendongwha.com/product/detail/2348

    // 원자재
    mdfPbPlywood: '',                    // 목재 원자재
  },

  // ─── 동화 시공사례 (유튜브 썸네일 활용) ───
  casestudies: {
    case1_emotionBlanc33py: YT('uyjzIFzD_cM'),   // 이모션블랑 33평 원룸
    case2_saharaLight: YT('NqNr_fMOZo4'),         // 사하라라이트 공간
    case3_signiwall: YT('aUPrKboFULU'),           // 시그니월 시공
    case4_grandSquare805: YT('Hy6CQdOq6xI'),      // 진그란데 스퀘어 805
    case5_miniInterior: YT('3hBeE2quYA4'),        // 미니 인테리어 시공
  },

  // ─── 우성인더스 자체 이미지 ───
  // wsindus.com 이미지는 해당 페이지에서 직접 추출해야 함.
  // 아래 URL은 우성인더스 웹사이트 페이지 참조용 (이미지 직접 URL 교체 필요).
  wsindus: {
    factoryExterior: '',   // http://wsindus.com/ 메인 이미지
    palletRack: '',        // http://wsindus.com/bbs/board.php?bo_table=community01
    photobooth: '',        // http://wsindus.com/way_page/pdt03.php
    ballBearing: '',       // http://wsindus.com/way_page/pdt02.php
    angleRack: '',         // http://wsindus.com/way_page/business03.php
    cncRouter: '',         // 우성인더스 블로그에서 추출
    officeEcostec: '',     // https://m.blog.naver.com/wsindus1/222647977106 (에코스텍 사무실 시공)
  },

  // ─── 포트폴리오 프로젝트 ───
  portfolio: {
    parliament: '',             // 국회의사당 시공
    nationalLibrary: '',        // 국립중앙도서관
    railwayOffice: '',          // 철도공사 사무실
    seoulHR: '',                // 서울시 인재개발원
    yonseiGym: '',              // 연세대 체육관
    doowonUniv: '',             // 두원공대
    hyundaiTraining: '',        // 현대해상 연수원
    dongwhaOffice: '',          // 동화 본사
    commercialA: YT('uyjzIFzD_cM'),  // 상업공간 사례
    residentialA: YT('NqNr_fMOZo4'), // 주거공간 사례
  },

  // ─── 적용 공간 이미지 (에코스텍 페이지 등) ───
  spaces: {
    conferenceRoom: '',
    auditorium: '',
    library: '',
    gymnasium: '',
    office: '',
    church: '',
  },

  // ─── 장비 이미지 ───
  equipment: {
    cncRouter: '',
    cncLathe: '',
    mct: '',
    laserCutter: '',
  },

  // ─── 소재 이미지 ───
  materials: {
    wood: '',
    metal: '',
    plastic: '',
  },

  // ─── About 페이지 ───
  about: {
    factoryPanorama: '',   // 우성인더스 김포 공장 전경 (wsindus.com에서 직접 추출)
    earlyWork: '',         // 초기 사업 사진 (있으면 추가)
    teamwork: '',          // 팀워크 사진
  },

  // ─── 기타 유틸리티 ───
  misc: {
    marbleTexture: '',     // 마블 텍스처
  },
} as const;
