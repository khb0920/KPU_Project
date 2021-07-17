const mysql = require("mysql");

const db = mysql.createConnection({
    host:"kpu-project.cusgmbstchjg.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "dhdltlfgdj1!",
    database: "project",
});

db.connect();

module.exports = db;