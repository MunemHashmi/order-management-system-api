const Product = require('../models/Product');

const productsController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const product = new Product({ name, price, description });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, description } = req.body;
      const product = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  }
};

module.exports = productsController;
