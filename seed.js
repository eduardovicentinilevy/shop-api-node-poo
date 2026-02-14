const db = require('./src/config/database');
const User = require('./src/models/User');
const Product = require('./src/models/Product');
const Order = require('./src/models/Order');

const runSeed = async () => {
  try {
    console.log("🌱 Iniciando a plantação de dados...");

    // 1. Criar Usuário
    const user = await User.create("Eduardo Admin", "admin@loja.com", "123456");
    console.log(`✅ Usuário criado: ${user.name} (ID: ${user.id})`);

    // 2. Criar Produtos
    const p1 = await Product.create("Notebook Gamer", 5000.00, 10);
    const p2 = await Product.create("Mouse RGB", 150.00, 50);
    console.log(`✅ Produtos criados: ${p1.name} e ${p2.name}`);

    // 3. Simular uma Compra
    const carrinho = [
      { id: p1.id, quantity: 1, price: p1.price },
      { id: p2.id, quantity: 2, price: p2.price }
    ];

    const pedido = await Order.createOrder(user.id, carrinho);
    console.log(`✅ Pedido realizado com sucesso! Total: R$ ${pedido.total}`);
    console.log(`🆔 ID do Pedido: ${pedido.orderId}`);

    console.log("\n🚀 Banco de dados povoado! Pode testar a API.");
  } catch (err) {
    console.error("❌ Erro ao rodar seed:", err);
  }
};

// Espera 1 segundo para garantir conexão e roda
setTimeout(runSeed, 1000);