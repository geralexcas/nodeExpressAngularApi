const express = require("express");

var app = express();

app.get('/', function(req, res)  {
    res.send('bienvenido a mi api video sena!')
  })
app.use("/api",require("./usuarioRoutes"));
//app.use("/api",require("./productos"));

module.exports = app;
