"use strict"

class UserStorage {
  static #users = {
    id : ["박대리", "김주임", "김팀장"],
    pw : ["aaaa", "bbbb", "cccc"],
    nane : ["박개발", "김개발", "김개발자"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
    static getUserInfo(id) {
      const users = this.#users;
      const idx = users.id.indexOf(id); 
      const userKeys = Object.keys(users);
      const userInfo = Object.keys(users).reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});
      return userInfo;;
    }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    return { success: true};
  }


  }

                                                                                                                                                                                                                                                                                                                                                                                                                      

module.exports = UserStorage;                  