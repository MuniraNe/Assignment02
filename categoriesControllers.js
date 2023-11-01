const Category = require("../model/categories");

// Get all categories
exports.getCategories = async (req, res, next) => {
  try {
    let categories = await Category.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

// Get a single category by ID
exports.getCategory = async (req, res, next) => {
  try {
    let id = req.params.id;
    let category = await Category.findById(id);
    if (category != null) {
      res.json(category);
    } else {
      throw new Error("Category not found");
    }
  } catch (error) {
    next(error);
  }
};

// Create a new category
exports.addCategory = async (req, res, next) => {
  try {
    let data = await Category.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// Update a category by ID
exports.updateCategory = async (req, res, next) => {
  try {
    let id = req.params.id;
    let category = new Category(req.body);
    category._id = id;
    let data = await Category.findByIdAndUpdate(id, category);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// Remove a category by ID
exports.removeCategory = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = await Category.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
