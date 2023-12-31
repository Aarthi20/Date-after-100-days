const express = require("express");
var addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
    const date = new Date();
    const newDate = addDays(
        new Date(date.getFullYear(), date.getMonth(), date.getDate()),
        100
    );
    response.send(
        `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    );
});

module.exports = app;
