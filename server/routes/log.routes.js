const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");

// create a log
router.post('/', logController.createLog);

// get all logs
router.get('/', logController.allLogs);

// get a single log
router.get('/:id', logController.oneLog);

// update a single log
router.put('/:id', logController.updateLog);

// delete a single log
router.delete('/:id', logController.deleteLog);

module.exports = router;