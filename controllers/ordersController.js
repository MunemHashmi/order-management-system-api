const Order = require('../models/Order');

const ordersController = {
  getAll: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    try {
      const { product, user, quantity } = req.body;
      const order = new Order({ product, user, quantity });
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { product, user, quantity } = req.body;
      const order = await Order.findByIdAndUpdate(id, { product, user, quantity }, { new: true });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByIdAndDelete(id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  }
};

module.exports = ordersController;
