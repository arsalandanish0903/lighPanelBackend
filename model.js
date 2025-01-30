const mongoose = require('mongoose');

const WallItemSchema = new mongoose.Schema({
    "wallNo": { type: Number, required: true },
    "sNo": { type: Number, required: true }, // Adjusted field name
    "Model": { type: String, required: true },
    "Dimensions": { type: String },
    "ListPrice": { type: Number, required: true },
    "MRP": { type: Number, required: false },
    "x": { type: String, required: true },
    "y": { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Lights", WallItemSchema);


const BolllardsSchema = new mongoose.Schema({
    "wallNo": { type: Number },
    "sNo": { type: Number },
    "Model": { type: String },
    "Dimensions": { type: String },
    "ListPrice": { type: Number },
    "MRP": { type: Number},
    "x": { type: String },
    "y": { type: String }
}, {timestamps: true});

module.exports = mongoose.model("Bollards", BolllardsSchema)
