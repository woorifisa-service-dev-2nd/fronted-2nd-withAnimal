import {listByPartCode} from "./api.js";

const selectbox = document.getElementById("search");
// let cnt = 1; // table의 한 행을 가져오기 위한 변수

/**
 * selectbox의 eventListener
 */
selectbox.addEventListener("change", async (event) => {
  const partCode = event.target.value;
  await listByPartCode(partCode);
});