const ranidb = require('ranidb');

function lang(key) {
    let db = new ranidb("./db/users.json");
    let data = db.getAll();
    let index = db.findIndex({key: key});
    if (index != -1) {
        return {state: 200, data: data[index]};
    } else {
        return {state: 300, err: "key is not correct"};
    }
}

function change_lang(key, lang) {
    let db = new ranidb("./db/users.json");
    let data = db.getAll();
    let index = db.findIndex({key: key});
    if (index != -1) {
        data[index].settings.lang = lang;
        db.save(data);
        return {state: 200, data: data[index]};
    } else {
        return {state: 300, err: "key is not correct"};
    }
}

module.exports = { lang, change_lang }