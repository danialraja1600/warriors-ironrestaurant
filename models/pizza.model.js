const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: Number,
    isVeggie: {
        type: Boolean,
        default: false
    },
    dough: {
        type: String, 
        enum: ["thin", "thick", "with cheese"]
    },
    imageFile: String
});

//create Model
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
