const Supplier = require("../models/supplier.model");

const createSupplier = async (req, res) => {
  try {
    const { name, city } = req.body;

    if (!name || !city) {
      return res.status(400).json({
        message: "Name and city are required",
      });
    }

    const supplier = await Supplier.create({ name, city });

    res.status(201).json({
      success: true,
      data: supplier,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create supplier",
    });
  }
};

module.exports = { createSupplier };