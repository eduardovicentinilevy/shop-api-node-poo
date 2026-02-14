Aqui está o conteúdo para o seu ficheiro README.md, estruturado com tópicos claros e totalmente livre de emojis, conforme solicitado:

Shop API Node POO
Sobre o Projeto
Esta é uma API RESTful para E-commerce desenvolvida com Node.js e Express. O foco principal deste projeto é demonstrar a aplicação de arquitetura de software profissional, utilizando Programação Orientada a Objetos (POO) para regras de negócio e SQL puro para manipulação de dados complexos. O sistema gerencia utilizadores, produtos e pedidos, simulando um ambiente real de loja virtual com controlo de estoque e segurança.

Destaques Técnicos
Programação Orientada a Objetos (POO): O código foge do padrão funcional simples, utilizando Classes e Métodos Estáticos para encapsular a lógica de acesso ao banco de dados e regras de negócio.

Integridade de Dados (SQL ACID): O sistema implementa transações manuais no banco de dados SQLite. Durante a finalização de um pedido, o sistema garante que a criação do registo e a baixa no estoque ocorram simultaneamente; se uma falha acontecer, toda a operação é revertida (Rollback).

Segurança e Autenticação: Utilização de JSON Web Tokens (JWT) para controlo de sessões stateless. O sistema diferencia permissões entre Administradores (que podem criar produtos) e Clientes (que podem apenas comprar), além de utilizar hash (Bcrypt) para proteger as senhas.

Tecnologias e Arquitetura
Linguagem: Node.js (JavaScript)

Framework: Express

Banco de Dados: SQLite3 (SQL Puro)

Segurança: JWT e Bcryptjs

Padrão de Projeto: MVC (Model-View-Controller) com Service Pattern

Funcionalidades Principais
Cadastro de Utilizadores: Criação de contas com validação de e-mail único e criptografia de senha.

Gestão de Produtos: Rotas protegidas para criação de produtos, exclusivas para administradores.

Carrinho de Compras: Sistema de checkout que recebe uma lista de itens, calcula totais e atualiza o inventário em tempo real.

Automação (Seed): Script incluído para povoar o banco de dados com dados de teste instantaneamente.

Como Executar o Projeto
Instalação: Execute o comando npm install no terminal para baixar as dependências listadas.

Configuração: O projeto já inclui configurações padrão, mas pode ajustar as variáveis no arquivo .env se necessário.

Popular Banco de Dados: Execute node seed.js para criar as tabelas e inserir utilizadores e produtos de teste.

Iniciar Servidor: Execute npm run dev para iniciar a API em modo de desenvolvimento.

Testes: Utilize ferramentas como Postman ou Insomnia para realizar requisições nas rotas disponíveis (ex: /api/login, /api/checkout).
