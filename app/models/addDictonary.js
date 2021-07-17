const mongoose = require('mongoose');

const dictinorySchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('AddDictinory', dictinorySchema);
