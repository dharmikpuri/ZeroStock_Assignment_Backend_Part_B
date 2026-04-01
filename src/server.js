require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const supplierRoutes = require("./routes/supplier.routes");
const inventoryRoutes = require("./routes/inventory.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", supplierRoutes);
app.use("/api", inventoryRoutes);

// DB connect
connectDB();


const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});