
let products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Phone", category: "Electronics" },
  { id: 3, name: "Table", category: "Furniture" },
  { id: 4, name: "microtik", category: "Electronics" },
  { id: 4, name: "camera", category: "Electronics" },
];


const getAllProducts = (req, res) => {

  const { name, category } = req.query;
  let result = products;

  if (name) {
    result = result.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (category) {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  res.json(result);
};

const getSingleProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

module.exports = { getAllProducts, getSingleProduct, products };
