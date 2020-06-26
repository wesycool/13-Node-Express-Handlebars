const express = require('express')
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'))

app.get('/',function(req,res){
  const test = 'Welcome to Eat-Da-Burger'
  res.render('index', {test:test})
})

















// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });