const bcrypt = require('bcryptjs');

class User {
  constructor(name, email, password, role = 'customer') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }
}

module.exports = User;