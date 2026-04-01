const express = require("express");
const router = express.Router();

const { createSupplier } = require("../controller/supplier.controller");

router.post("/supplier", createSupplier);

module.exports = router;