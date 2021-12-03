const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LogSchema = new Schema({
    item_type: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    item_name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    unique_features: {
      type: String
    },
    notes: {
      type: String
    },
    item_image: {
      type: String
    },
    status: {
      type: String,
      enum: ['Public', 'Private']
    }
});

module.exports = mongoose.model('Log', LogSchema);
