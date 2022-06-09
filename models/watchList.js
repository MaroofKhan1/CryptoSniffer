const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const coinSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }], 
    price: String,
    image: String,
    hour: String,
    volume: String,
    cap: String,
    name: String

})

module.exports = mongoose.model('Coin', coinSchema);