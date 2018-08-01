var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT;
var app = express();
var db = require("./models")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require("./routes/api-routes")(app);


db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("server listening on:" + PORT);
    });
});

