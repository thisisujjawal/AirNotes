const mongodbConnection = require('./db');
const express = require('express')
const cors = require('cors') ;
const donenv = require("dotenv");

const app = express();
app.use(cors());
donenv.config({path : "./config.env"})


mongodbConnection();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/notes' , require('./routes/notes'));
app.get('/' , (req,res)=>{
  res.send("Hello Ujjawal");
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
