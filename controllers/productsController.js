let nextId = 4; 

const createProduct = (req, res) => {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ message: "Name and category are required" });
  }
  const newProduct = { id: nextId++, name, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};


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

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  products,
};
