# withAnimal

![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=withAnimal%20&fontSize=90)

# 1️⃣ 주제 및 팀(팀원) 소개

## 주제
Open API(공공데이터포털 : 강원도_반려동물동반관광정보) 활용 웹 서비스 <br>
**강원도 반려인 관광객 유도 및 관련 정보 제공을 위해 반려동물과 동반 가능한 여행지(숙박, 식당, 관광지 등)에 대한 데이터제공** <br>

## 활용기술
`HTML`, `CSS`, `JS(Node.js 기반 서버 구축)`, `ESLint(airbnb-base)`, `prettier`
<br><br>

## 팀원
| [김경은](https://github.com/GyeongEun-Kim)      | [용은희](https://github.com/ehyongyong)      | [나경률](https://github.com/NaKyongRyul)      | [안선영](https://github.com/anseonyeong)      |
| ------------------------------------------------- | ---------------------------------------------- | --------------------------------------------- | ------------------------------------------ |
| ![김경은](https://github.com/GyeongEun-Kim.png) | ![용은희](https://github.com/ehyongyong.png) | ![나경률](https://github.com/NaKyongRyul.png) | ![안선영](https://github.com/anseonyeong.png) |



# 2️⃣ 협업 방식

✅ 협업툴 : 슬랙, 피그마(대략적인 화면설계)

✅ 초기 폴더구조(html,css,server.js 등)를 정한 후 깃허브 push

✅ 이후, 각자 기능구현

✅ 구현하는 과정에서 의견을 공유함, 완료된 기능에 오류가 없는지 체크

✅ 기능구현 완료 후 브랜치 push

<br><br>

# 3️⃣ 활용 API
공공데이터포털사이트 : **강원도_반려동물동반관광정보 Open API**

## 1. 분야 코드 별 리스트 API 

- 요청 URL : http://pettravel.kr/api/listPart.do?page=[현재페이지값]&pageBlock=[페이지출력개수]&partCode=[분야코드]    
- 분야코드값 예시 : `PC01(식음료)`, `PC02(숙박)`, `PC03(관광지)`, `PC04(체험)`, `PC05(동물병원)`
- 결과값 : JSON 

## 2. 분야 코드 별 상세 API

- 파라미터 값으로 partCode와 첫번째 리스트 API의 결과값 중 contentSeq을 사용.
- 요청 URL : http://www.pettravel.kr/api/detailSeqPart.do?partCode=[분야코드]&contentNum=[콘텐츠번호] 
- 결과값 : JSON 


# 4️⃣ 핵심 기능 설명 및 구현 방법

1. `eventListner` 를 통해 사용자로부터 `selectbox` 입력을 받아 `partCode` 를 가져온다.
```javascript
  selectbox.addEventListener("change", async (event) => {
  const partCode = event.target.value;
  cnt = 1; // 분야코드가 달라질때마다 cnt값 초기화
  await listByPartCode(partCode);
   });
    
```
   
2. 클라이언트(프론트) -> node서버로 partCode를 포함한 POST request를 보낸다. 
```javascript
    const listByPartCode = async (partCode) => {
    const option = makeOptions("POST", JSON.stringify({ partCode }));
    const URL = "/list";
    const resArr = []; // contentSeq를 저장하는 배열

  fetch(URL, option)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        resArr[i] = data[0].resultList[i].contentSeq; // contentSeq를 저장
        detailByPartCodeAndContentNum(partCode, resArr[i]); // 반복문안에서 각 시설별 detail 조회
      }
    });
    };
```
   
3. node서버에서 partCode를 받아서 외부api서버로 request를 보낸다.
```javascript
   app.post("/list", (req, res) => {
  
  const pageBlock = 5;
  const { partCode } = req.body;
  const page = getPage(partCode, pageBlock); //램덤페이지 함수
  
  const request = require("request");

  const URL = `http://pettravel.kr/api/listPart.do?page=${page}&pageBlock=${pageBlock}&partCode=${partCode}`;
  // 외부 api서버에 전송
  request.get(URL, (error, response) => {
    res.send(response.body);
  });
});
```

4. 외부 api에서 받은 응답을 클라이언트에게 보낸다.

5. 같은 방식으로 상세API 조회.

6. 마지막으로 응답데이터를 html table에 값 세팅한다.

<br><br>

# 4️⃣ 트러블 슈팅
## 💣 node_modules 
초기 폴더 구성 후 git에 `node_modules` 포함하여 push한 후 각자 환경에서 세팅하는데 노드가 실행되지 않는 문제발생<br>
-> `.gitignore` 파일 생성하여 `node_modules` 제외시킴 <br>
-> 기존에 올라간 파일 삭제( `git rm —cached -r node_modules` )

## 💣 페이지 랜덤값 설정
페이지 랜덤값이 0 일 경우 데이터를 받아오지 못할 것을 예측 -> 1부터 시작으로 변경.

##  💣 selectBox 선택하기 전 결과 표 숨기기
`visibility : hidden` 으로 해결
`display : none` 은 `block` 을 차지하지 않지만 `visibility : hidden` 은 `block` 을 차지한다는 차이가 있었음

-> css상으로 block을 차지하고 있기를 원했기 때문에 visibility를 사용



        
<br><br>

# 5️⃣ 회고(느낀점)

* 김경은

  > 웹 요청과 응답의 전체적인 흐름을 알 수 있었던 프로젝트였습니다. 그러나 요청과 응답의 흐름을 이해했음에도 직접 구현해보니 생각보다 시간이 걸렸습니다. 기존에 작성되어있는 api문서를 보고 parameter와 response를 이해하고 사용해보는 경험을 할수있어서 좋았습니다.

* 용은희

  > API를 사용해봄으로써 웹 요청/응답 과정 전반적인 흐름을 알 수 있었습니다. 머리로 이해해도 구현은 또 다른 문제라는 것을 알았고 많은 연습이 필요할 것 같습니다. 어려운 부분을 팀원들과 소통하여 이해하고 해결하는 부분에서 많은 것을 배울 수 있었습니다.

* 나경률
  
  > Open API를 활용하여 요청과 응답을 통한 웹의 구조를 알 수 있는 프로젝트였습니다. API를 호출하고 나온 값을 바탕으로 또 API를 호출하는 과정에서 어떻게 데이터를 불러오는지 어려움이 있었습니다. 팀원들과 소통하며 해당 부분을 해결하면서 기본적인 비동기 요청에 대해 이해할 수 있는 좋은 경험이었습니다.
