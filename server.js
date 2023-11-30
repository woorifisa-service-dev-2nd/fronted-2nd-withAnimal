/* eslint-disable import/no-extraneous-dependencies */




import express from "express";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.get("/", function (req, res) {
  console.log("http://localhost:3000/ called");
  res.sendFile("index.html");
});
const port = 3000;
app.listen(port, () =>
  console.log(`http://127.0.0.1:${port}/ app listening on port ${3000}`),
);