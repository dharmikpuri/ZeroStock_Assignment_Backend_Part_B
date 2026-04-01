const express = require("express");
const router = express.Router();

const {
  createInventory,
  getAllInventory,
} = require("../controller/inventory.controller");

router.post("/inventory", createInventory);
router.get("/inventory", getAllInventory);

module.exports = router;