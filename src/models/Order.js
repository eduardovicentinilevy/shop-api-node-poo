const db = require('../config/database');

class Order {
  static createOrder(userId, cartItems) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run("BEGIN TRANSACTION");

        const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        db.run(`INSERT INTO orders (user_id, total) VALUES (?, ?)`, [userId, total], function(err) {
          if (err) {
            db.run("ROLLBACK");
            return reject(err);
          }
          
          const orderId = this.lastID;
          const stmt = db.prepare(`INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)`);
          const updateStock = db.prepare(`UPDATE products SET stock = stock - ? WHERE id = ?`);

          cartItems.forEach(item => {
            stmt.run(orderId, item.id, item.quantity);
            updateStock.run(item.quantity, item.id);
          });

          stmt.finalize();
          updateStock.finalize();

          db.run("COMMIT", (err) => {
            if (err) reject(err);
            else resolve({ message: "Success", orderId, total });
          });
        });
      });
    });
  }
}

module.exports = Order;