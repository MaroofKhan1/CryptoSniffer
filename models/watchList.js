const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const watchListSchema = new Schema({
    users: [{
        name: {type: String},
        // price: 
        Image: {type: String}
    }]
})

module.exports = mongoose.model