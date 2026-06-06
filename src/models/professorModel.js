// Importa a conexão com o banco de dados MySQL (camada database)
const conexao = require('../database/conexao');

// Função responsável por INSERIR um novo professor no banco
async function criar(nome, disciplina, email, salario) {
  // Comando SQL de inserção usando "?" (placeholders) para evitar SQL Injection
  const sql = 'INSERT INTO professores (nome, disciplina, email, salario) VALUES (?, ?, ?, ?)';
  // Executa o comando de forma assíncrona, substituindo os "?" pelos valores
  const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario]);
  // Retorna o resultado da operação (contém o insertId gerado pelo banco)
  return resultado;
}

// Função responsável por LISTAR todos os professores cadastrados
async function listarTodos() {
  // Comando SQL que seleciona todos os registros da tabela professores
  const sql = 'SELECT * FROM professores';
  // Executa a consulta e desestrutura o array de linhas retornadas
  const [linhas] = await conexao.execute(sql);
  // Retorna a lista completa de professores
  return linhas;
}

// Função responsável por BUSCAR um professor específico pelo id
async function buscarPorId(id) {
  // Comando SQL que filtra o professor pelo id informado
  const sql = 'SELECT * FROM professores WHERE id = ?';
  // Executa a consulta passando o id como parâmetro
  const [linhas] = await conexao.execute(sql, [id]);
  // Retorna apenas o primeiro registro encontrado (ou undefined se não existir)
  return linhas[0];
}

// Função responsável por ATUALIZAR os dados de um professor existente
async function atualizar(id, nome, disciplina, email, salario) {
  // Comando SQL de atualização dos campos do professor com o id informado
  const sql = 'UPDATE professores SET nome = ?, disciplina = ?, email = ?, salario = ? WHERE id = ?';
  // Executa o comando passando os novos valores e o id por último
  const [resultado] = await conexao.execute(sql, [nome, disciplina, email, salario, id]);
  // Retorna o resultado da operação (contém affectedRows)
  return resultado;
}

// Função responsável por DELETAR um professor pelo id
async function deletar(id) {
  // Comando SQL que remove o professor com o id informado
  const sql = 'DELETE FROM professores WHERE id = ?';
  // Executa o comando passando o id como parâmetro
  const [resultado] = await conexao.execute(sql, [id]);
  // Retorna o resultado da operação (contém affectedRows)
  return resultado;
}

// Exporta todas as funções do model para serem usadas no controller
module.exports = {
  criar,
  listarTodos,
  buscarPorId,
  atualizar,
  deletar
};
