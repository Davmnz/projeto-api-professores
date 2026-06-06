# API REST — Cadastro de Professores (MVC)

API REST desenvolvida com **Node.js**, **Express** e **MySQL** seguindo a arquitetura **MVC** e usando **async/await**. Realiza um CRUD completo de professores.

## Tecnologias
- JavaScript (Node.js)
- Express
- MySQL (driver `mysql2`)
- Arquitetura MVC
- Programação assíncrona com `async/await`

> Sem ORM, sem callbacks tradicionais, sem MongoDB/Firebase.

## Estrutura do projeto
```
projeto-api-professores/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── professorController.js   # regras das requisições
│   ├── models/
│   │   └── professorModel.js        # acesso ao banco de dados
│   ├── routes/
│   │   └── professorRoutes.js       # rotas da API
│   ├── database/
│   │   └── conexao.js               # conexão com o MySQL
│   └── app.js                       # configuração do Express
├── database.sql                     # script de criação do banco
├── package.json
└── server.js                        # ponto de entrada do servidor
```

## Como rodar

### 1. Criar o banco de dados
Abra o MySQL e execute o conteúdo do arquivo `database.sql`. Ele cria o banco `escola` e a tabela `professores`.

### 2. Instalar as dependências
```bash
npm install
```

### 3. Ajustar a conexão (se necessário)
Edite `src/database/conexao.js` e configure `user` e `password` de acordo com o seu MySQL.

### 4. Iniciar o servidor
```bash
npm run dev    # com nodemon (reinicia automaticamente)
# ou
npm start      # com node
```
O servidor sobe em `http://localhost:3000`.

## Endpoints

| Método | Rota                | Descrição                  |
|--------|---------------------|----------------------------|
| POST   | `/professores`      | Cadastrar professor        |
| GET    | `/professores`      | Listar todos os professores|
| GET    | `/professores/:id`  | Buscar professor por id    |
| PUT    | `/professores/:id`  | Atualizar professor        |
| DELETE | `/professores/:id`  | Remover professor          |

## Testando no Postman

**POST** `http://localhost:3000/professores` — body (JSON):
```json
{
  "nome": "Carlos Lima",
  "disciplina": "Redes",
  "email": "carlos@escola.com",
  "salario": 6200.00
}
```

**PUT** `http://localhost:3000/professores/1` — body (JSON):
```json
{
  "nome": "Carlos Lima Silva",
  "disciplina": "Redes de Computadores",
  "email": "carlos.silva@escola.com",
  "salario": 6800.00
}
```

**GET** `http://localhost:3000/professores` e **GET** `http://localhost:3000/professores/1` — sem body.

**DELETE** `http://localhost:3000/professores/1` — sem body.

> Dica: no Postman, em requisições POST/PUT, vá em **Body → raw → JSON**.
