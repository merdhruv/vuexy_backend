const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors);
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to MongoDB!');
  });
app.get("/", (req,res)=>{
  res.json("hello");
})

const DataRoute = require("./routes/dataRoutes")
app.use("/data", DataRoute);


app.listen(PORT, ()=> console.log("server is running"))