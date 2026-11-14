
-- Exercício 1 — SQL Básico
-- Orion Bootcamp

CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    curso_id INTEGER,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

INSERT INTO cursos (nome_curso) VALUES
('Desenvolvimento Web'),
('Ciência de Dados'),
('Banco de Dados');

INSERT INTO alunos (nome, email, curso_id) VALUES
('João Silva', 'joao@exemplo.com', 1),
('Maria Souza', 'maria@exemplo.com', 1),
('Ana Oliveira', 'ana@exemplo.com', 2),
('Lucas Santos', 'lucas@exemplo.com', 2);

SELECT * FROM cursos;
SELECT * FROM alunos;
