const Order = require('../models/Order');

exports.checkout = async (req, res) => {
  try {
    const result = await Order.createOrder(req.user.id, req.body.items);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};