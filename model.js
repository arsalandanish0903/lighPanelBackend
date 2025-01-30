const mongoose = require("mongoose");

// Schema for Lights
const WallItemSchema = new mongoose.Schema(
  {
    wallNo: { type: Number, required: true },
    sNo: { type: Number, required: true }, // Adjusted field name
    Model: { type: String, required: true },
    Dimensions: { type: String },
    ListPrice: { type: Number, required: true },
    MRP: { type: Number },
    x: { type: String, required: true },
    y: { type: String, required: true },
  },
  { timestamps: true }
);

// Schema for Bollards
const BollardsSchema = new mongoose.Schema(
  {
    wallNo: { type: Number },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: Number },
    MRP: { type: Number },
    x: { type: String },
    y: { type: String },
  },
  { timestamps: true }
);

// Correct way to export multiple models
const Lights = mongoose.model("Lights", WallItemSchema);
const Bollards = mongoose.model("Bollards", BollardsSchema);

module.exports = { Lights, Bollards };
