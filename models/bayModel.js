const mongoose = require('mongoose');

const BaySchema = new mongoose.Schema({
  bay_name: {
    type: String,
    required: true,
  },
  bay_description: {
    type: String,
    required: true,
  },
  no_of_manpower: {
    type: Number,
    required: true,
  },
  is_active: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

// Explicitly set the collection name to 'Bay allocation'
module.exports = mongoose.model('Bay', BaySchema, 'Bay allocation');
