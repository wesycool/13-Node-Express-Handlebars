require('./config/connection.js')
const express = require('express')
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;




















// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });