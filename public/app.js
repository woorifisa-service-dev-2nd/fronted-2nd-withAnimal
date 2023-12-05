import { listByPartCode } from "./api.js";

const selectbox = document.getElementById("search");

/**
 * selectbox의 eventListener
 */
selectbox.addEventListener("change", async (event) => {
  const partCode = event.target.value;
  await listByPartCode("/list", partCode);
});
