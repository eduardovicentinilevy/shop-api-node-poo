Esta API de E-commerce foi desenvolvida para demonstrar o domínio de conceitos avançados de Backend com Node.js. O projeto utiliza Programação Orientada a Objetos para gerenciar o ciclo de vida de produtos, usuários e pedidos, garantindo uma estrutura de código modular e de fácil manutenção.

Funcionamento e Regras de Negócio
Gestão de Pedidos e Transações: O sistema utiliza transações SQL para garantir a integridade dos dados. Ao finalizar um pedido, a API valida o estoque, registra a venda e atualiza a quantidade disponível em uma única operação atômica. Caso ocorra qualquer erro, o sistema realiza um Rollback automático.

Segurança e Níveis de Acesso: A autenticação é baseada em JSON Web Tokens (JWT). O sistema diferencia permissões entre clientes e administradores, protegendo rotas críticas como a criação de produtos e a gestão de estoque através de Middlewares de autorização.

Respostas HTTP Semânticas: A API segue rigorosamente os padrões de resposta HTTP, retornando o Status 201 Created após a criação bem-sucedida de pedidos e registros, confirmando a persistência correta no banco de dados SQLite.

Estrutura Técnica
Persistência: Banco de dados relacional SQLite utilizando SQL puro para máxima performance e controle sobre as queries.

Segurança: Criptografia de senhas com a biblioteca Bcrypt e proteção de rotas com JWT.

Arquitetura: Padrão MVC (Model-View-Controller) com separação clara entre lógica de banco de dados, rotas e controladores.

Endpoints da API
Listar Produtos (Público): GET http://localhost:3000/api/products

Autenticação (Login): POST http://localhost:3000/api/login

Finalizar Compra (Checkout): POST http://localhost:3000/api/checkout

Cadastro de Usuário: POST http://localhost:3000/api/register

Guia de Testes
Instalação: Execute o comando npm install para baixar todas as dependências do projeto.

Povoamento: Utilize o comando node seed.js para criar as tabelas e inserir os dados iniciais de teste.

Execução: Inicie o servidor com o comando npm run dev.

Fluxo de Compra: Realize o login via POST na rota de login para obter o token de acesso e utilize este token no cabeçalho de autorização para realizar o checkout e receber o status 201 de confirmação.