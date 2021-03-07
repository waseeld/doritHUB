const uuid = require('uuid');
const ranidb = require('ranidb');

function login(user, pass) {
    let db = new ranidb("/home/waseel/was/dev/JavaScript/node/dorit.js/db/users.json");
    let data = db.getAll();
    let index = db.findIndex({username: user, pass: pass});
    if (index != -1) {
        data[index].key = uuid.v1();
        db.save(data);
        return {state: 200, data: data[index]};
    } else {
        return {state: 300, err: "username or pass not correct"};
    }
}

function check(key) {
    let db = new ranidb("/home/waseel/was/dev/JavaScript/node/dorit.js/db/users.json");
    let index = db.findIndex({key: key});
    if (index != -1) {
        let data = db.getAll();
        let user = data[index];
        return {state: 200, data: user};
    } else {
        return {state: 300, err: "key is not correct"};
    }
}

module.exports = { login, check }