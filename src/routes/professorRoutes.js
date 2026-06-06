// Importa o Express (necessário para criar o roteador)
const express = require('express');

// Cria um objeto de rotas (Router) do Express
const router = express.Router();

// Importa o controller de professores (camada que contém as regras das requisições)
const professorController = require('../controllers/professorController');

// Rota POST -> cadastrar um novo professor
router.post('/professores', professorController.cadastrar);

// Rota GET -> listar todos os professores
router.get('/professores', professorController.listar);

// Rota GET -> buscar um professor específico pelo id
router.get('/professores/:id', professorController.buscarPorId);

// Rota PUT -> atualizar um professor pelo id
router.put('/professores/:id', professorController.atualizar);

// Rota DELETE -> remover um professor pelo id
router.delete('/professores/:id', professorController.deletar);

// Exporta o roteador para ser usado no app.js
module.exports = router;
