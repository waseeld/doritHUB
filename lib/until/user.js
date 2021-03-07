const ranidb = require('ranidb');
const login = require('./login');

function getAllUser(key) {
    let user = login.check(key)
    if (user.state == 200) {
        if (user.data.type_user == "root") {
            let db = new ranidb("/home/waseel/was/dev/JavaScript/node/dorit.js/db/users.json");
            let data = db.getAll();
            return { state: 200, data: data };
        } else {
            return { state: 300, err: "you are not root." };
        }
    } else {
        return { state: 300, err: "somthing wroning." };
    }
}

function getUser(key, id) {
    let user = login.check(key)
    if (user.state == 200) {
        if (user.data.type_user == "root") {
            let db = new ranidb("/home/waseel/was/dev/JavaScript/node/dorit.js/db/users.json");
            let data = db.find({ _id: id });
            return { state: 200, data: data || {} };
        } else {
            return { state: 300, err: "you are not root." };
        }
    } else {
        return { state: 300, err: "somthing wroning." };
    }
}

function addUser(key, newUser) {
    let user = login.check(key)
    if (user.state == 200) {
        if (user.data.type_user == "root") {
            let db = new ranidb("/home/waseel/was/dev/JavaScript/node/dorit.js/db/users.json");
            db.setType("gradual");
            let data = db.push(newUser);
            return { state: 200, data: data };
        } else {
            return { state: 300, err: "you are not root." };
        }
    } else {
        return { state: 300, err: "somthing wroning." };
    }
}

function updateUser(key, id, newData) {
    let user = login.check(key)
    if (user.state == 200) {
        if (user.data.type_user == "root") {
            let db = new ranidb("/home/waseel/was/dev/JavaScript/node/dorit.js/db/users.json");
            let index = db.findIndex({ _id: id });
            if (index != -1) {
                let data = db.getAll();
                data[index] = newData;
                db.save(data);
                return { state: 200, data: data[index] };
            } else {
                return { state: 300, err: "not find this user" };
            }
        } else {
            return { state: 300, err: "you are not root." };
        }
    } else {
        return { state: 300, err: "somthing wroning." };
    }
}
module.exports = { getUser, getAllUser, addUser, updateUser }