require('dotenv').config();
const express = require('express');
const db = require('./src/config/database');
const routes = require('./src/routes');

const app = express();
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: "API Running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});