const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const CreateDB = require('./lib/until/createDB');
app.use(bodyParser.json());

const api = require('./router/api/index');

app.use("/api", api);

app.listen(8080, () => {
    CreateDB();
    console.log("Go to : http://127.0.0.1:8080");
})