const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const coinSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref:'User'
    }], 
    price: String,
    image: String,
    hour: String,
    volume: String,
    cap: String 

})

module.exports = mongoose.model('Coin', coinSchema);