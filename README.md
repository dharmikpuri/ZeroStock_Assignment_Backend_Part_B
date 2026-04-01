# 🚀 Inventory Management API (Part B)

This backend service allows suppliers to add inventory and enables fetching inventory data with grouping and total value calculation.

---

## 📌 Features

* Create suppliers
* Add inventory items linked to suppliers
* Fetch all inventory
* Get inventory grouped by supplier
* Calculate total inventory value (quantity × price)
* Basic validation for inputs

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```id="pb-struct"
src/
 ├── config/
 │    └── db.js
 ├── models/
 │    ├── supplier.model.js
 │    └── inventory.model.js
 ├── controllers/
 │    ├── supplier.controller.js
 │    └── inventory.controller.js
 ├── routes/
 │    ├── supplier.routes.js
 │    └── inventory.routes.js
 ├── server.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```id="pb-clone"
git clone https://github.com/dharmikpuri/ZeroStock_Assignment_Backend_Part_B
```

---

### 2. Install Dependencies

```id="pb-install"
npm install
```

---

### 3. Add Environment Variable

Create `.env` file:

```id="pb-env"
CONNECTION_URL=your_mongodb_connection_string
```

---

### 4. Run the Server

```id="pb-run"
npm run server
```

Server will run on:

```id="pb-port"
http://localhost:5001
```

---

## 🔗 API Endpoints

---

### ➤ Create Supplier

```id="pb-supplier"
POST /api/supplier
```

Body:

```json id="pb-supplier-body"
{
  "name": "ZeeroStock ventures",
  "city": "Nashik"
}
```

---

### ➤ Create Inventory

```id="pb-inventory"
POST /api/inventory
```

Body:

```json id="pb-inventory-body"
{
  "supplier_id": "valid_supplier_id",
  "product_name": "XYZ",
  "quantity": 10,
  "price": 50000
}
```

---

### ➤ Get All Inventory

```id="pb-get"
GET /api/inventory
```

---

### ➤ Get Inventory Summary (Important)

```id="pb-summary"
GET /api/inventory/summary
```

👉 Returns inventory grouped by supplier with total value.

---

## 🧠 How It Works

* Suppliers are stored in one collection
* Inventory items reference suppliers using `supplier_id`
* Before adding inventory, supplier is validated
* Aggregation is used to:

  * Group inventory by supplier
  * Calculate total value
  * Sort results

---

## ⚠️ Validations

* Supplier must exist before adding inventory
* Quantity ≥ 0
* Price > 0

---

## 💡 Why MongoDB?

* Flexible schema (easy to modify)
* Good for quick development
* Supports aggregation for complex queries

---
