"use strict";



const output = {
  home : (req, res) => {
    res.render("home/index"); //경로 설정
  },
  
  login : (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["박대리", "김주임", "김과장"],
  pw: ["aaaa", "bbbb", "cccc"]
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
    pw = req.body.pw;

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};


module.exports = {
  output,
  process,
};