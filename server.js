require('dotenv').config();
const express = require('express');
const db = require('./src/config/database');

const app = express();
app.use(express.json());

// Rota inicial para teste
app.get('/', (req, res) => {
  res.json({ 
    message: "API Shop-POO ativa!",
    status: "Conectado ao SQLite"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});