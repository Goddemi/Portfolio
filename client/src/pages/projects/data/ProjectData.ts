export const PROJECT_DATA = [
  {
    id: "porfolio",
    name: "Portfolio",
    links: [
      "/reserve/imgs/portfolio1.png",
      "/reserve/imgs/portfolio2.png",
      "/reserve/imgs/portfolio3.png",
    ],
    summary:
      "개인 포트폴리오 사이트. 기획부터 백엔드 파트까지 직접 제작했습니다! 단순한 기능들로 이루어져 있지만 세심하게 만들어 보았습니다. 클린코드를 우선시하며 코드를 작성했습니다. 컴포넌트 분리에 대해 자신감을 가지게 되었습니다. 백엔드 파트의 기본적인 부분들을 이해해 볼 수 있었던 좋은 경험이었습니다.",
    main_function: [
      "map함수를 적극적으로 사용하여 효율적으로 컴포넌트 생성",
      "useEffect와 async를 활용한 페이지 별 data fetch",
      "캐러셀안의 캐러셀을 통한 효과적인 정보 전달",
      "기존 데이터의 변형을 통해 효율적인 nav-bar 토글 구현",
    ],
    skills: ["Typescript", "React", "Styled-components", "NodeJS", "MongoDB"],
    git: "https://github.com/Goddemi/portfolio",
  },
  {
    id: "honey",
    name: "MyHoneyTrip",
    links: [
      "/reserve/imgs/honeytrip1.png",
      "/reserve/imgs/honeytrip2.png",
      "/reserve/imgs/honeytrip4.png",
    ],
    summary:
      "항공권 검색 메인 페이지 담당. PM으로 참여하여 페이지간 연결성, 데이터가 페이지 사이에서 어떤 흐름으로 움직여야 하는지 큰 그림을 가지고 접근하는 법을 배웠습니다. 페이지간의 상태 값 전달과 Prop drilling 관련 문제를 겪으며  Redux의 필요성을 느꼈습니다. 배워야 할 것들과 배우고 싶은 것들을 시행착오를 통해, 필요에 의해 얻어 갈 수 있어서 좋았습니다. ",
    main_function: [
      "항공패턴, 날짜, 목적지, 인원, 유저 선택에 따른 state값 생성",
      "Get통신 쿼리 파라미터를 통한 검색",
      "local storage를 활용한 최근 검색 내역",
      "추천상품 mapping 및 각 엘리먼트 클릭 시 정보에 맞는 검색",
    ],
    skills: ["Javascript", "React", "Styled-components", "AWS"],
    git: "https://github.com/Goddemi/35-2nd-myhoneytrip-frontend",
    result: "http://2nd-myhoneytrip.s3-website.ap-northeast-2.amazonaws.com/",
  },
  {
    id: "weggle",
    name: "Weggle",
    links: [
      "/reserve/imgs/weggle1.png",
      "/reserve/imgs/weggle2.png",
      "/reserve/imgs/weggle3.png",
    ],
    summary:
      "판매자를 위한 B2B 상품 등록 페이지 구현 담당.  기존의 제이쿼리로 작성된 페이지를 주어진 Figma에 맞게 리액트 버전으로 수정하는 작업이었습니다. 컴포넌트 단위로 코드를 분리하고 가독성 좋게 코드를 작성 하였습니다. mui 라이브러리를 사용하였는데 세부적인 css 수정에서 문제를 겪었습니다. 라이브러리가 꼭 편리한 것은 아니라는 것을 느꼈습니다.",
    main_function: [
      "image & video 업로드 기능 및  quill Editor를 활용한 상품 상세 정보 입력 기능 구현",
      "상품 등록 post 통신 구현",
    ],
    skills: ["Typescript", "React", "Styled-components"],
    git: "",
    result: "",
  },
  {
    id: "turtle",
    name: "TurtleHome",
    links: [
      "/reserve/imgs/ggobuk1.png",
      "/reserve/imgs/ggobuk2.png",
      "/reserve/imgs/ggobuk3.png",
    ],
    summary:
      "로그인&회원가입, 상품 상세페이지, 장바구니 페이지 구현 담당. 데이터 통신 과정에서 키 값을 맞추지 않아 생겼던 오류를 비롯한 여러 문제들을 통해 프론트-백 간 소통의 중요성을 배웠습니다. 일정 관리의 중요성을 뼈저리게 느꼈습니다. 후반부에 쫓기듯이 짠 코드들이 제대로 기능하지 못했고 수정하는데 더 많은 시간이 소요되었습니다. ",
    main_function: [
      "로그인(토큰 발급, 저장) & 회원가입 통신 / 유효성 검사",
      "상품 상세 페이지 : useParams를 이용한 동적인 상세 페이지",
      "옵션 값에 따른 가격 변화, post를 통한 장바구니 담기",
      "장바구니 페이지 :  토큰에 따른 이용자별 장바구니 가져오기",
    ],
    skills: ["Javascript", "React", "Sass", "AWS"],
    git: "",
    result: "",
  },
];
