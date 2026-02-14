const db = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
  static create(name, email, password) {
    return new Promise(async (resolve, reject) => {
      const hash = await bcrypt.hash(password, 8);
      db.run(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, hash],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, name, email, role: 'customer' });
        }
      );
    });
  }

  static findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }
}

module.exports = User;