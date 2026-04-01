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

const getInventoryGroupedBySupplier = async (req, res) => {
  try {
    const result = await Inventory.aggregate([
      // Join supplier data
      {
        $lookup: {
          from: "suppliers",
          localField: "supplier_id",
          foreignField: "_id",
          as: "supplier",
        },
      },
      {
        $unwind: "$supplier",
      },

      // Group by supplier
      {
        $group: {
          _id: "$supplier._id",
          supplier_name: { $first: "$supplier.name" },
          total_value: {
            $sum: {
              $multiply: ["$quantity", "$price"],
            },
          },
          items: {
            $push: {
              product_name: "$product_name",
              quantity: "$quantity",
              price: "$price",
            },
          },
        },
      },

      // Sort by total value (DESC)
      {
        $sort: { total_value: -1 },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Aggregation Error:", error.message);

    res.status(500).json({
      message: "Failed to fetch aggregated data",
    });
  }
};

module.exports = {
  createInventory,
  getAllInventory,
  getInventoryGroupedBySupplier
};