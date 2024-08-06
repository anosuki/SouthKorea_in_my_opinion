document.addEventListener('DOMContentLoaded', () => {
    const provinces = document.querySelectorAll('.province');
    const infoDiv = document.getElementById('info');
  
    provinces.forEach(province => {
      province.addEventListener('mouseover', () => {
        province.style.fill = '#739';
      });
  
      province.addEventListener('mouseout', () => {
        province.style.fill = '#000';
      });
  
      province.addEventListener('click', () => {
        const provinceName = province.getAttribute('data-name');
        showProvinceInfo(provinceName);
      });
    });
  
    function showProvinceInfo(name) {
      const info = {
        'Busan': '부산 갈매기~ 부산 갈매기~ 넌 벌써 나를 잊었나~',
        'Daegu': '동대구역 이순신토스트가 맛있다',
        'Seoul': '서울서울서울 아름다운이거리',
        'Incheon': '어쩌다 한번~ 오는 저 배는~ 무슨 사연 싣고 오길래~~',
        'Gwangju': '무등산, 최강기아',
        'Daejeon': '카이스트, 성심당',
        'Ulsan': '울산은 돌고래 타고다녀요',
        'Gyeonggi': '도넛모양',
        'Gangwon': '매우춥다',
        'North Chungcheong': '여기 왜 충북임',
        'South Chungcheong': '여기 왜 충남임',
        'North Jeolla': '네, 전북대학교에 대해 설명해드리겠습니다.전북대학교 개요전북대학교(全北大學校, Jeonbuk National University, JBNU)는 대한민국 전라북도 전주시 덕진구에 위치한 국립 대학교입니다. 1947년에 설립된 전북대학교는 전북 지역의 대표적인 고등교육 기관으로, 다양한 학문 분야에서 우수한 교육과 연구를 수행하고 있습니다.학부 및 대학원 전북대학교는 여러 학부와 대학원으로 구성되어 있으며, 주요 학부 및 대학원은 다음과 같습니다: 인문대학: 국어국문학, 영어영문학, 사학 등 인문학 분야의 학과들을 포함합니다. 사회과학대학: 사회학, 정치외교학, 행정학 등 사회과학 분야의 학과들이 있습니다. 자연과학대학: 물리학, 화학, 생물학 등 자연과학 분야의 학과들이 있습니다.  공과대학: 기계공학, 전자공학, 건축학 등 공학 분야의 학과들이 있습니다.',
        'South Jeolla': '맛있는게 많다.',
        'North Gyeongsang': "경주월드가 있다.",
        'South Gyeongsang': "NC다이노스?",
        'Jeju': "한라봉",
        'Sejong': "세종시엔 세종대가 없다.충남대는 대전에, 충북대는 세종에 있다."
      };
      // infoDiv.textContent = info[name] || '정보가 없습니다.';
      alert(info[name]);
    }
  });
  