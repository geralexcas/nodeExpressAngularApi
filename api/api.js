var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const express = require('express')
const app = express()
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require("./routes/indexRoutes"));


app.get('/', (req, res) => {
  res.send('bienvenido al api geralexcas!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/tienda',(err)=>{
 if(err) {
  console.log(err);
 }
console.log("conexion exitosa");
});



