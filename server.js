const express = require("express");
// import { makeOptions } from "./public/app.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
  console.log("http://localhost:3000/ called");
  res.sendFile("index.html");
});

app.post("/list", (req, res) => {
  const pageBlock = 5;
  const page = 1; // 랜덤 값 수정 필요
  const { partCode } = req.body;

  const request = require("request");

  const URL = `http://pettravel.kr/api/listPart.do?page=${page}&pageBlock=${pageBlock}&partCode=${partCode}`;
  console.log(URL);
  // 외부 api서버에 전송
  request.get(URL, (error, response) => {
    // console.log(`response :${response}`);
    res.send(response.body);
  });
});

const port = 3000;
app.listen(port, () =>
  console.log(`http://127.0.0.1:${port}/ app listening on port ${3000}`),
);
