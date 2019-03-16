var express = require("express");
var router = express.Router();
var burgerModel = require("../models/burger.js");

router.get("/",function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
   burgerModel.all(function(burgerData){
     res.render("index",{burger_data:burgerData});
   });
});

router.post("/burgers/create",function(req, res){
  burgerModel.create(req.body.burgerName, function(result){
    res.redirect("/");
  });
});

router.put("/burgers/:id",function(req, res){
  burgerModel.update(req.params.id, function(result){
   res.sendStatus(200);
  });
});

module.exports = router;