
const express = require("express");
const app = express();
const home = require("./routes/home")


app.set("views", "./views"); //화면 뷰가 관리되는 폴더 
app.set("view engine", "ejs"); //뷰 엔진이 어떤모듈로 실행될 것인지 설정

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;