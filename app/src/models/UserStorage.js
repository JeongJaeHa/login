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

}

module.exports = UserStorage;