const selectbox = document.getElementById("search");

// eslint-disable-next-line no-unused-vars, import/prefer-default-export
export const makeOptions = (method, body) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };
};

const listByPartCode = async (partCode) => {
  const option = makeOptions("POST", JSON.stringify({ partCode }));
  const URL = "/list";

  fetch(URL, option)
    .then((response) => response.json())
    .then((data) => console.log(data[0].resultList));
};

// eslint-disable-next-line no-shadow
// 아직 사용X
const detailByPartCodeAndContentNum = async (partCode, contentNum) => {
  const option = makeOptions("POST", JSON.stringify({ partCode, contentNum }));
  const URL = "/detail";

  fetch(URL, option)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

selectbox.addEventListener("change", async (event) => {
  const partCode = event.target.value;
  await listByPartCode(partCode);
  // detailByPartCodeAndContentNum(partCode, contentNum);
});
