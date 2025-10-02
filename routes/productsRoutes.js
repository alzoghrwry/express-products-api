const express = require("express");
const { getAllProducts, getSingleProduct } = require("../controllers/productsController");

const router = express.Router();

router.get("/api/products", getAllProducts);
router.get("/api/products/:id", getSingleProduct);

module.exports = router;
