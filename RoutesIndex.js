const express = require("express");
const router = express.Router();

const productController = require("../controllers/index");
const categoriesController = require("../controllers/categoriesControllers");

// Routes for products
router.get("/product", productController.getProducts);
router.get("/product/:id", productController.getProduct);
router.post("/product", productController.add);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.remove);

// Routes for categories
router.get("/categories", categoriesController.getCategories);
router.get("/categories/:id", categoriesController.getCategory);
router.post("/categories", categoriesController.addCategory);
router.put("/categories/:id", categoriesController.updateCategory);
router.delete("/categories/:id", categoriesController.removeCategory);

router.get("/", productController.home);

module.exports = router;
