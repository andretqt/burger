var db = require("../models");
 //we're really getting burger.js
//let's define our routes and store them in a variable we will export

module.exports = function(app) {
    ///Reading db
    app.get('/api/burgers', function(req, res) {
        db.Burger.findAll({}).then(burgers => res.json(burgers));
    })
    //Creating new record in db
    app.post('/api/burgers', function(req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name,
            eaten: false 
        }).then(function(burger) {
            res.json(burger);
        })
    })
    //Update record in db
    app.put('/api/burgers', function (req, res){
        db.Burger.update(
            {eaten: req.body.eaten},
            { where :{id: req.body.id} }).then(function(burger) {
                res.json(burger);
            })
    });
};