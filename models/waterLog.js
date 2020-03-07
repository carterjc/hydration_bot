const mongoose = require('mongoose');

const waterLogSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    water_amount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("waterLog", waterLogSchema);