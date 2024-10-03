 Descrição do Projeto (README em Português)

 Sobre o Projeto

Este projeto é um site completo de E-Commerce desenvolvido utilizando Angular no frontend, Node.js no backend e MongoDB como banco de dados. O objetivo é criar uma aplicação de comércio eletrônico que ofereça uma experiência completa de compra, com funcionalidades como navegação por produtos, sistema de busca, carrinho de compras, autenticação de usuário (login/registro) e gerenciamento de pedidos.

Funcionalidades Principais

### 1. **Início do Projeto**
   - configuração das ferramentas de desenvolvimento necessárias.

### 2. **Criação da Aplicação Angular**
   - Criação da pasta do projeto.
   - Instalação do Angular CLI.
   - Criação da aplicação frontend.

### 3. **Adição de Componentes de Interface**
   - Adicionar um cabeçalho (header) com HTML e CSS.

### 4. **Listagem de Produtos**
   - Criar o modelo de dados para produtos (Foods).
   - Adicionar dados de exemplo (`data.ts`) com produtos de teste.
   - Adicionar imagens à pasta de assets.
   - Criar o serviço para manipulação de dados de produtos.
   - Criar componente de "Home" para exibir a lista de produtos com HTML, CSS e TS.

### 5. **Funcionalidade de Busca**
   - Adicionar métodos de busca ao serviço de produtos.
   - Criar rota de busca e exibir resultados na "Home".
   - Criar componente de busca e integrá-lo à tela principal.

### 6. **Barra de Tags**
   - Criar modelo para tags.
   - Adicionar tags ao `data.ts`.
   - Criar métodos no serviço para listar todas as tags e produtos por tag.
   - Criar rota e componente para exibir tags e seus produtos.

### 7. **Página do Produto**
   - Criar métodos no serviço para acessar informações de produtos específicos.
   - Criar componente para a página de detalhes de cada produto.

### 8. **Página de Carrinho de Compras**
   - Criar modelo para itens do carrinho e para o carrinho.
   - Criar serviço de carrinho de compras.
   - Adicionar botão "Adicionar ao Carrinho" na página de produtos.
   - Criar componente para a página de carrinho, incluindo rotas, lógica, HTML e CSS.

### 9. **Página de Não Encontrado (404)**
   - Criar componente para exibir mensagens de erro 404.
   - Adicionar lógica para exibir o componente nas páginas principais: Home, Produto e Carrinho.

### 10. **Conexão com Backend**
   - Criar pasta backend, configurar TypeScript e instalar pacotes necessários.
   - Copiar dados do `data.ts` para o backend.
   - Configurar servidor usando Express e CORS.
   - Integrar APIs ao backend e conectar com o frontend.

### 11. **Página de Login**
   - Criar componente de login e adicionar rota.
   - Implementar autenticação de usuário utilizando APIs e JSON Web Token (JWT).
   - Criar serviço de usuário e implementar funcionalidades como login, logout e armazenamento de dados no Local Storage.

### 12. **Componentes Reutilizáveis para Login**
   - Criar componentes personalizados para campos de entrada, validação e botões.

### 13. **Conexão do Login com MongoDB Atlas**
   - Separar APIs em roteadores.
   - Configurar MongoDB Atlas e conectar a aplicação.
   - Utilizar pacotes como Mongoose, dotenv e bcryptjs para conexão e segurança de dados.

### 14. **Página de Registro de Usuário**
   - Adicionar funcionalidade para registrar novos usuários.
   - Criar componente de registro e conectar ao serviço.

### 15. **Componente de Carregamento (Loading)**
   - Adicionar componente e serviço para exibir status de carregamento durante solicitações assíncronas.

### 16. **Página de Checkout**
   - Criar modelo de pedido e componente para a página de checkout.
   - Adicionar mapa interativo para selecionar endereço de entrega.
   - Criar métodos para salvar pedidos no backend e integrar segurança usando middleware de autenticação.

### 17. **Página de Pagamento**
   - Criar componente para página de pagamento e integrá-la ao serviço de pedidos.
   - Adicionar funcionalidade de leitura de pedidos do usuário atual.

### 18. **Integração com Paypal**
   - Adicionar componente para pagamentos com Paypal.
   - Configurar integração com API do Paypal para processar pagamentos.

### 21. **Atualização de Pacotes (Opcional)**
   - Atualizar pacotes utilizando `npm-check-updates`.
   - Garantir compatibilidade dos pacotes com versões corretas de TypeScript e demais dependências.

---

Esse projeto oferece uma aplicação completa de E-Commerce, cobrindo desde a configuração inicial até a integração com banco de dados, autenticação de usuários, carrinho de compras, pagamentos com Paypal, e até o deploy final para produção.
