// Importa o model de professores (camada que acessa o banco de dados)
const professorModel = require('../models/professorModel');

// Controller responsável por CADASTRAR um professor (POST /professores)
async function cadastrar(req, res) {
  try {
    // Extrai os dados enviados no corpo (body) da requisição
    const { nome, disciplina, email, salario } = req.body;

    // Validação simples: verifica se todos os campos foram preenchidos
    if (!nome || !disciplina || !email || salario === undefined) {
      // Retorna status 400 (requisição inválida) com uma mensagem em JSON
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    // Chama o model para inserir o professor no banco de dados
    const resultado = await professorModel.criar(nome, disciplina, email, salario);

    // Retorna status 201 (criado) com a mensagem de sucesso e o id gerado
    return res.status(201).json({
      mensagem: 'Professor cadastrado com sucesso',
      id: resultado.insertId
    });
  } catch (erro) {
    // Em caso de erro inesperado, retorna status 500 (erro interno do servidor)
    return res.status(500).json({ mensagem: 'Erro ao cadastrar professor', erro: erro.message });
  }
}

// Controller responsável por LISTAR todos os professores (GET /professores)
async function listar(req, res) {
  try {
    // Chama o model para buscar todos os professores
    const professores = await professorModel.listarTodos();
    // Retorna status 200 (sucesso) com a lista de professores em JSON
    return res.status(200).json(professores);
  } catch (erro) {
    // Em caso de erro, retorna status 500 com a mensagem do erro
    return res.status(500).json({ mensagem: 'Erro ao listar professores', erro: erro.message });
  }
}

// Controller responsável por BUSCAR um professor por id (GET /professores/:id)
async function buscarPorId(req, res) {
  try {
    // Pega o id enviado na URL (parâmetro de rota)
    const { id } = req.params;
    // Chama o model para buscar o professor pelo id
    const professor = await professorModel.buscarPorId(id);

    // Se nenhum professor for encontrado, retorna status 404 (não encontrado)
    if (!professor) {
      return res.status(404).json({ mensagem: 'Professor não encontrado' });
    }

    // Retorna status 200 com os dados do professor encontrado
    return res.status(200).json(professor);
  } catch (erro) {
    return res.status(500).json({ mensagem: 'Erro ao buscar professor', erro: erro.message });
  }
}

// Controller responsável por ATUALIZAR um professor (PUT /professores/:id)
async function atualizar(req, res) {
  try {
    // Pega o id da URL e os novos dados do corpo da requisição
    const { id } = req.params;
    const { nome, disciplina, email, salario } = req.body;

    // Verifica se o professor existe antes de tentar atualizar
    const professor = await professorModel.buscarPorId(id);
    if (!professor) {
      return res.status(404).json({ mensagem: 'Professor não encontrado' });
    }

    // Validação simples dos campos enviados
    if (!nome || !disciplina || !email || salario === undefined) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    // Chama o model para atualizar o professor no banco
    await professorModel.atualizar(id, nome, disciplina, email, salario);

    // Retorna status 200 com a mensagem de sucesso
    return res.status(200).json({ mensagem: 'Professor atualizado com sucesso' });
  } catch (erro) {
    return res.status(500).json({ mensagem: 'Erro ao atualizar professor', erro: erro.message });
  }
}

// Controller responsável por DELETAR um professor (DELETE /professores/:id)
async function deletar(req, res) {
  try {
    // Pega o id enviado na URL
    const { id } = req.params;

    // Verifica se o professor existe antes de tentar remover
    const professor = await professorModel.buscarPorId(id);
    if (!professor) {
      return res.status(404).json({ mensagem: 'Professor não encontrado' });
    }

    // Chama o model para remover o professor do banco
    await professorModel.deletar(id);

    // Retorna status 200 com a mensagem de sucesso
    return res.status(200).json({ mensagem: 'Professor removido com sucesso' });
  } catch (erro) {
    return res.status(500).json({ mensagem: 'Erro ao deletar professor', erro: erro.message });
  }
}

// Exporta todas as funções do controller para serem usadas nas rotas
module.exports = {
  cadastrar,
  listar,
  buscarPorId,
  atualizar,
  deletar
};
