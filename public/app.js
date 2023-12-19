import { listByPartCode, detailByPartCodeAndContentNum } from "./api.js";

const selectbox = document.getElementById("search");

/**
 * selectbox의 eventListener
 */
selectbox.addEventListener("change", async (event) => {
  const cnt = 1;
  const partCode = event.target.value;
  const resArr = await listByPartCode("/list", partCode);
  for (let i = 0; i < 5; i++)
    detailByPartCodeAndContentNum("/detail", partCode, resArr[i], cnt);
});
