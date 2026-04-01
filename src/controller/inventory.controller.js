const Inventory = require("../models/inventory.model");
const Supplier = require("../models/supplier.model");

const createInventory = async (req, res) => {
  try {
    const { supplier_id, product_name, quantity, price } = req.body;

    const supplier = await Supplier.findById(supplier_id);
    if (!supplier) {
      return res.status(400).json({
        message: "Invalid supplier",
      });
    }

    const item = await Inventory.create({
      supplier_id,
      product_name,
      quantity,
      price,
    });

    res.status(201).json({
      success: true,
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create inventory",
    });
  }
};

const getAllInventory = async (req, res) => {
  try {
    const items = await Inventory.find().populate("supplier_id");

    res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch inventory",
    });
  }
};

module.exports = {
  createInventory,
  getAllInventory,
};