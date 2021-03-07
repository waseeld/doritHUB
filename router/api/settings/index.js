const express = require('express');
const router = express.Router();
const langs = require('../../../lib/until/lang');
const user = require('../../../lib/until/user');

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

router.route("/lang")
  .get((req, res) => {
    let key = req.headers.key;
    let data = langs.lang(key);
    res.json(data);
  })
  .put((req, res) => {
    let key = req.headers.key;
    let lang = req.body.lang
    let data = langs.change_lang(key, lang);
    res.json(data);
  })

router.route("/users")
  .get((req, res) => {
    let key = req.headers.key;
    let data = user.getAllUser(key);
    res.json(data)
  })
  .post((req, res) => {
    let key = req.headers.key;
    let data = user.addUser(key, req.body);
    res.json(data);
  })

router.route("/users/:userID")
  .get((req, res) => {
    let key = req.headers.key;
    let id = req.params.userID;
    id = parseInt(id);
    let data = user.getUser(key, id);
    res.json(data);
  })
  .put((req, res) => {
    let key = req.headers.key;
    let id = req.params.userID;
    id = parseInt(id);
    let data = user.updateUser(key, id, req.body);
    res.json(data);
  })
  .delete((req, res) => {
    res.send("dfsf")
  })


module.exports = router;