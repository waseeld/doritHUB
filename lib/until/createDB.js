const fs = require('fs');
module.exports = () => {
    let db = [{ "_id": 2, "name": "admin", "username": "admin", "pass": "4234", "type_user": "root", "key": null, "settings": { "lang": "en" } }];
    db = JSON.stringify(db);
    try {
        if (fs.existsSync('./db/users.json')) {
            console.log("The db exists.");
        } else {
            console.log('The db does not exist.');
            console.log("Don't worry i will create empty db");
            try {
                fs.writeFileSync("./db/users.json", db);
            } catch (error) {
                fs.mkdirSync("./db");
                fs.writeFileSync("./db/users.json", db);
            }
        }
    } catch (err) {
        console.error(err);
    }
}