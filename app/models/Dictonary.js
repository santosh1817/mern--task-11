const mongoose = require('mongoose');

const dictinorySchema = new mongoose.Schema({
 word: {
    type: String,
    // required: true,
  },
  definition:{
      type:String,

  },
  
 
});

module.exports = mongoose.model('Dictinory', dictinorySchema);
