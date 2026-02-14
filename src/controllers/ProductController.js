const Product = require('../models/Product');

exports.listAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await Product.create(name, price, stock);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};