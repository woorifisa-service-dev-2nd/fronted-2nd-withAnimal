import { makeOptions } from "./util.js";

/**
 * 분야코드별 리스트를 조회하는 메서드
 * @param {String} partCode 분야코드
 */
export const listByPartCode = async (partCode) => {
    const option = makeOptions("POST", JSON.stringify({ partCode }));
    const URL = "/list";
    const resArr = []; // contentSeq를 저장하는 배열
    let cnt = 1;
  
    fetch(URL, option)
      .then((response) => response.json()) // response -> 'Response 객체'
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          resArr[i] = data[0].resultList[i].contentSeq; // contentSeq를 저장
          detailByPartCodeAndContentNum(partCode, resArr[i], cnt++); // 반복문안에서 각 시설별 detail 조회
        }
      });
  };


/**
 *
 * @param {String} method HTTP Method
 * @param {Object} body HTTP Method의 body
 * @returns option객체
 */

/**
 * @param {String} partCode 분야코드
 * @param {number} contentNum 콘텐츠번호
 * 시설별 상세 정보를 조회하는 메서드
 */
export const detailByPartCodeAndContentNum = async (partCode, contentNum, cnt) => {
    const option = makeOptions("POST", JSON.stringify({ partCode, contentNum, cnt }));
    const URL = "/detail";
  
    fetch(URL, option)
      .then((response) => response.json())
      .then((data) => {
        const { address } = data[0].resultList; // 주소
        const { title } = data[0].resultList; // 가게명
        const { tel } = data[0].resultList; // 전화번호
        const { content } = data[0].resultList; // 소개
        const { petFacility } = data[0].resultList; // 반려동물 시설
        const { petWeight } = data[0].resultList; // 제한 몸무게
  
        const tr = document.getElementById(`result-${cnt}`); // table의 한 행을 가져오기
        // cnt += 1; // 다음행을 가져오기위해 count++
  
        /* html안에 값을 세팅 */
        tr.getElementsByClassName("titleCell")[0].textContent = title;
        tr.getElementsByClassName("addressCell")[0].textContent = address;
        tr.getElementsByClassName("telCell")[0].textContent = tel;
        tr.getElementsByClassName("contentCell")[0].textContent = content;
        tr.getElementsByClassName("petFacilityCell")[0].textContent = petFacility;
        tr.getElementsByClassName("petWeightCell")[0].textContent = petWeight;
      });
  };