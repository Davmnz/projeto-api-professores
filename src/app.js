// Importa o framework Express
const express = require('express');

// Importa o arquivo de rotas dos professores
const professorRoutes = require('./routes/professorRoutes');

// Cria a instância (aplicação) do Express
const app = express();

// Middleware que permite a API ler/entender requisições com corpo em JSON
app.use(express.json());

// Registra as rotas de professores na aplicação
// Tudo que estiver definido em professorRoutes ficará disponível na API
app.use(professorRoutes);

// Exporta o app para ser utilizado no server.js
module.exports = app;
