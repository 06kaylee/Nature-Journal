const mongoose = require("mongoose");
const Log = require("./models/log");

mongoose.connect('mongodb://localhost:27017/natureJournal')
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch((err) => {
        console.log(`Mongo err: ${err}`);
    })


const seedProducts = [
    {
        item_type: 'Bird',
        item_name: "Clark's Nutcracker",
        unique_features: `The size of a jay but the shape of a crow.
        Short tails and rounded, crestless heads.
        Long, straight, and sharp-tipped bill.`,
        notes: `They are native to the mountains of western North America.
        During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River.`,
        status: "Public"
    },
    {
        item_type: 'Rabbit',
        item_name: 'Angora Rabbit',
        unique_features: `They are bred mainly for their wool; it is harvested every 3-4 months. There are many different breeds (english, french, german, giant).`,
        notes: `It originated in present-day Turkey. It became a popular pet of the French royalty in the mid-18th century.`,
        status: "Private"
    },
    {
        item_type: 'Plant',
        item_name: "Sweetheart Hoya",
        unique_features: `It can reach lengths of up to 13 feet. It is slow growing. It blooms during the summer.`,
        notes: "It is native to Southeast Asia. The plant is sometimes named 'lucky-heart'.",
        status: "Public"
    },
    {
        item_type: 'Tree',
        item_name: 'Dogwood Tree',
        unique_features: `It has white to light yellow flowers that bloom in the spring. It does not grow well in semi-arid to arid climates. It will also not grow well in frequently flooded areas.`,
        notes: `There are over 50 species within the Dogwood genus. They vary from shrubs to deciduous trees.`,
        status: "Private"
    }
]

// const clearDb = async() => {
//     await Log.deleteMany({});
// }

// clearDb();

Log.insertMany(seedProducts)
    .then(res => {
        console.log(res);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    })