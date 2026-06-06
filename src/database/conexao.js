// Importa o driver mysql2 já com suporte a Promises (necessário para async/await)
const mysql = require('mysql2/promise');

// Cria um "pool" de conexões com o banco de dados MySQL
// O pool gerencia várias conexões automaticamente, de forma eficiente
const conexao = mysql.createPool({
  host: 'localhost',   // Endereço do servidor MySQL (geralmente localhost)
  user: 'root',        // Usuário do banco de dados
  password: 'Sekirobomprak7',        // Senha do banco (ajuste de acordo com o seu MySQL)
  database: 'escola',  // Nome do banco de dados utilizado pelo projeto
  port: 3306           // Porta padrão do MySQL
});

// Exporta a conexão para ser usada na camada de model
module.exports = conexao;
