const express = require("express");
const router = express.Router();

const {
  createInventory,
  getAllInventory,
  getInventoryGroupedBySupplier,
} = require("../controller/inventory.controller");

router.post("/inventory", createInventory);
router.get("/inventory", getAllInventory);
router.get("/inventory/summary", getInventoryGroupedBySupplier);

module.exports = router;