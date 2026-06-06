// Importa a aplicação Express já configurada (definida em src/app.js)
const app = require('./src/app');

// Define a porta em que o servidor irá rodar
const PORTA = 3000;

// Inicia o servidor e fica "escutando" requisições na porta definida
app.listen(PORTA, () => {
  // Mensagem exibida no terminal quando o servidor sobe com sucesso
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
