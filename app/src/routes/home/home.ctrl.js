"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
  home : (req, res) => {
    res.render("home/index"); //경로 설정
  },
  
  login: (req, res) => {
    res.render("home/login");
  },

  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};


module.exports = {
  output,
  process,
};

    // const id = req.body.id,
    // pw = req.body.pw;
  
    // const users = UserStorage.getUsers("id", "pw");


    // const response = {};
    //   if (users.id.includes(id)) {
    //     const idx = users.id.indexOf(id);
    //     if (users.pw[idx] === pw) {
    //       response.success = true;
    //       return res.json(response);
    //     }
    //   }

    // response.success = false;
    // response.msg = "로그인에 실패 하셨습니다.";
    // return res.json(response);
