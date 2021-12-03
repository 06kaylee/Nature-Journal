const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Log = require("./models/log");

const app = express();

mongoose.connect('mongodb://localhost:27017/natureJournal')
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log(`Mongo error: ${err}`);
  })

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/logs', async (req, res) => {
  const logs = await Log.find({});
  res.send(logs);
})

app.get('/logs/:id', async (req, res) => {
  const id = req.params.id;
  const log = await Log.findById(id);
  res.send(log);
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})