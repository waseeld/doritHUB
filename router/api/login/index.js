const express = require('express');
const router = express.Router();
const login = require('../../../lib/until/login');

router.route("/")
    .get((req, res) => {
        const user = req.query.user;
        const pass = req.query.pass;
        let data = login.login(user, pass);
        res.json(data);
    })
    .post((req, res) => {
        const key = req.body.key;
        let data = login.check(key);
        res.json(data);
    })

module.exports = router;