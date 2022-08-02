const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    
},{
    toJSON: { virtuals: true },
    // toObject: {virtuals: true }
});

module.exports = mongoose.model('Trip', TripSchema);