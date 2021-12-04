const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Log = require("./models/log");
const logRouter = require("./routes/log.routes");

const app = express();

mongoose.connect('mongodb://localhost:27017/natureJournal')
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log(`Mongo error: ${err}`);
  })

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
  
app.use(bodyParser.json({limit: '50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/logs', logRouter);




app.listen(3000, () => {
    console.log("Server listening on port 3000");
})