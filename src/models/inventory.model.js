const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  supplier_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0, // rule
  },
  price: {
    type: Number,
    required: true,
    min: 1, // rule
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);