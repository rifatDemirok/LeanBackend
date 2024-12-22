// backend/models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const kanbanSchema = new mongoose.Schema({
  kanbanNo: {
    type: String,
    required: true,
    unique: true,
  },
  kanbanType: {
    type: String,
    required: true,
  },
  productCode: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  sourceWarehouse: {
    type: String,
    required: true,
  },
  targetWarehouse: {
    type: String,
    required: true,
  },
  boxType: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: false,
  }
});

module.exports = mongoose.model("Kanban", kanbanSchema);
