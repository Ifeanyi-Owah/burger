const express = require("express");


var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(express.json());

const expressHbs = require("express-handlebars");
app.engine("handlebars", expressHbs({defaultLayout:'main'}));
app.set("view engine","handlebars");

var burgerRoutes = require("./controllers/burgers_controller");

app.use(burgerRoutes);

app.listen(PORT,function(){
    console.log("listening on port:%s",PORT);
})