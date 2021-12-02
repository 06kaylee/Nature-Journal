const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// fake data
let logs = [
    {
      id: 1,
      type: 'Bird',
      name: "Clark's Nutcracker",
      unique_features: 
        `
          The size of a jay but the shape of a crow.
          Short tails and rounded, crestless heads.
          Long, straight, and sharp-tipped bill.
        `,
      notes:
        `
          They are native to the mountains of western North America.
          During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River. 
        `,
      image: 'https://placekitten.com/500/500',
      status: 'public'
    },
    {
      id: 2,
      type: 'Bird',
      name: "Canada Jays",
      unique_features: 
        `
          The size of a jay but the shape of a crow.
          Short tails and rounded, crestless heads.
          Long, straight, and sharp-tipped bill.
        `,
      notes:
        `
          They are native to the mountains of western North America.
          During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River. 
        `,
      image: 'https://placekitten.com/500/500',
      status: 'private'
    },
    {
      id: 3,
      type: 'Bird',
      name: "Steller's Jay",
      unique_features: 
        `
          The size of a jay but the shape of a crow.
          Short tails and rounded, crestless heads.
          Long, straight, and sharp-tipped bill.
        `,
      notes:
        `
          They are native to the mountains of western North America.
          During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River. 
        `,
      image: 'https://placekitten.com/500/500',
      status: 'public'
    }
];

app.get('/logs', (req, res) => {
    res.send(logs);
})

app.get('/logs/:id', (req, res) => {
    const id = Number(req.params.id);
    const log = logs.find(log => log.id === id);
    res.send(log);
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})