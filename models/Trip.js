const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  taxi: {
    type: String
  },
  queue: {
    type: String
  },
  price: {
    type: Number
  },
  startedAt: {
    type: Date,
    default: Date.now
  }
},{
    toJSON: { virtuals: true },
    // toObject: {virtuals: true }
});

module.exports = mongoose.model('Trip', TripSchema);