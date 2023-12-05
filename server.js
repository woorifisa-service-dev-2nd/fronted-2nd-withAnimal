/* eslint-disable no-else-return */
const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

const getPage = (partCode, pageBlock) => {
  let pageCnt;
  if (partCode === "PC01") {
    pageCnt = 180 / pageBlock; // 5개씩 출력한다면 존재하는 페이지 갯수
  } else if (partCode === "PC02") {
    pageCnt = 185 / pageBlock; // 5개씩 출력한다면 존재하는 페이지 갯수
  } else if (partCode === "PC03") {
    pageCnt = 107 / pageBlock; // 5개씩 출력한다면 존재하는 페이지 갯수
  } else if (partCode === "PC04") {
    pageCnt = 26 / pageBlock; // 5개씩 출력한다면 존재하는 페이지 갯수
  } else if (partCode === "PC05") {
    pageCnt = 72 / pageBlock; // 5개씩 출력한다면 존재하는 페이지 갯수
  }
  return parseInt(Math.random() * pageCnt);
};

app.get("/", function (req, res) {
  console.log("http://localhost:3000/ called");
  res.sendFile("index.html");
});

app.post("/list", (req, res) => {
  const pageBlock = 5;
  const { partCode } = req.body;
  const page = getPage(partCode, pageBlock); // 몇번째 페이지를 갖고올건지 랜덤으로
  console.log(page);
  const request = require("request");

  const URL = `http://pettravel.kr/api/listPart.do?page=${page}&pageBlock=${pageBlock}&partCode=${partCode}`;
  console.log(URL);
  // 외부 api서버에 전송
  request.get(URL, (error, response) => {
    res.send(response.body);
  });
});

app.post("/detail", (req, res) => {
  const { partCode } = req.body;
  const { contentNum } = req.body;
  const URL = `http://www.pettravel.kr/api/detailSeqPart.do?partCode=${partCode}&contentNum=${contentNum}`;
  const request = require("request");

  request.get(URL, (error, response) => {
    res.send(response.body);
  });
});

const port = 3000;
app.listen(port, () =>
  console.log(`http://127.0.0.1:${port}/ app listening on port ${3000}`),
);