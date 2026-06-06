-- Cria o banco de dados "escola" (caso ainda não exista)
CREATE DATABASE IF NOT EXISTS escola;

-- Seleciona o banco de dados "escola" para uso
USE escola;

-- Cria a tabela "professores" (caso ainda não exista)
CREATE TABLE IF NOT EXISTS professores (
  id INT PRIMARY KEY AUTO_INCREMENT,   -- Identificador único, gerado automaticamente
  nome VARCHAR(100) NOT NULL,          -- Nome do professor
  disciplina VARCHAR(100) NOT NULL,    -- Disciplina lecionada
  email VARCHAR(100) NOT NULL,         -- E-mail do professor
  salario DECIMAL(10,2) NOT NULL       -- Salário com 2 casas decimais
);

-- (Opcional) Registros de exemplo para testar a API
INSERT INTO professores (nome, disciplina, email, salario) VALUES
('Evandro de Lima Rodrigues', 'Desenvolvimento Web', 'evandro@escola.com', 7500.00),
('Ana Souza', 'Banco de Dados', 'ana.souza@escola.com', 6800.50);
