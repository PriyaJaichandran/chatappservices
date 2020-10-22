var express = require('express');
const bodyParser = require("body-parser");
var app = express();
var constants = require('./app/constants/globalconstants')

app.listen(constants.PORT, () => {})

app.get("/", (req, res) => {
    res.json("Reached to API")
})
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    next();
});
const db = require("./app/models");
db.sequelize.sync();

require("./app/routers/UserdetailsRouter")(app);