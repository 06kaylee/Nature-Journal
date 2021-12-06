const Log = require("../models/log");

// create and save a new log
exports.createLog = (req, res) => {
    console.log(`From log controller: ${req.body.item_type}`);

    const newLog = new Log({
        item_type: req.body.item_type,
        item_name: req.body.item_name,
        unique_features: req.body.unique_features ? req.body.unique_features : "",
        notes: req.body.notes ? req.body.notes : "",
        status: req.body.status
    });
    
    console.log(newLog);
    newLog.save(newLog)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: `Error occurred while creating new log: ${err}`
            });
        });
};

// get all logs
exports.allLogs = (req, res) => {
    Log.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error occurred while retrieving all logs: ${err}`
            });
        });
}

// get a single log by id
exports.oneLog = (req, res) => {
    const id = req.params.id;
    Log.findById(id)
        .then((data) => {
            if(!data) {
                res.status(400).send({
                    message: `Couldn't find log with the id of ${id}`
                });
            }
            else {
                res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error retrieving log with id ${id}: ${err}`
            });
        });
}

// update a single log by id
exports.updateLog = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can't be empty"
        });
    }

    const id = req.params.id;

    Log.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot update log with id of ${id}`
                });
            }
            else {
                res.send({ message: "Log was updated successfully" })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error updating log with id of ${id}: ${err}`
            })
        })
}

// delete a single log by id
exports.deleteLog = (req, res) => {
    const id = req.params.id;

    Log.findByIdAndDelete(id)
        .then((data) => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot delete log with id of ${id}`
                })
            }
            else {
                res.send({
                    message: 'Log was deleted successfully'
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error deleting log with id of ${id}: ${err}`
            })
        })
}
