const mongoose = require("mongoose");

// Schema for Light
// Wall1

const Wall1Lightschema = new mongoose.Schema(
  {
    wallNo: { type: Number, required: true },
    sNo: { type: Number, required: true }, // Adjusted field name
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: Number },
    MRP: { type: Number },
    x: { type: String, required: true },
    y: { type: String, required: true },
    width: { type: String},
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const Wall1BollardsSchema = new mongoose.Schema(
  {
    wallNo: { type: Number },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: Number },
    MRP: { type: Number },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);


const Wall1Light = mongoose.model("Wall1Lights", Wall1Lightschema);
const Wall1Bollards = mongoose.model("Wall1Bollards", Wall1BollardsSchema);

module.exports = {Wall1Light , Wall1Bollards};
