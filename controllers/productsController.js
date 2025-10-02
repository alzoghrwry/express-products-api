let products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Phone", category: "Electronics" },
  { id: 3, name: "Table", category: "Furniture" },
  { id: 4, name: "Microtik", category: "Electronics" },
  { id: 5, name: "Camera", category: "Electronics" },
];

let nextId = 6;

// Get all products (with optional filters: name, category)
const getAllProducts = (req, res) => {
  const { name, category } = req.query;
  let result = products;

  if (name) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (category) {
    result = result.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(result);
};

//git one prodect
const getSingleProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

// Create new product
const createProduct = (req, res) => {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ message: "Name and category are required" });
  }
  const newProduct = { id: nextId++, name, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update product
const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const { name, category } = req.body;
  if (name) product.name = name;
  if (category) product.category = category;
  res.json(product);
};

// Delete product
const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};

// Export all controllers
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  products,
};
