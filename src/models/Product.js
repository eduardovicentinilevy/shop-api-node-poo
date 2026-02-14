const db = require('../config/database');

class Product {
  static create(name, price, stock) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO products (name, price, stock) VALUES (?, ?, ?)`,
        [name, price, stock],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, name, price, stock });
        }
      );
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
}

module.exports = Product;