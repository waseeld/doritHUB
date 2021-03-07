const express = require('express');
const api = express.Router();

const login = require('./login/index');
const pm2 = require('./pm2/index');
const settings = require('./settings/index');

api.use("/login", login);
api.use("/pm2", pm2);
api.use("/settings", settings);

module.exports = api;