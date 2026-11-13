
-- Exercício 2 — JOINs e Filtros
-- Orion Bootcamp

-- 1. Listar alunos e seus respectivos cursos
SELECT
    alunos.nome AS aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos
    ON alunos.curso_id = cursos.id;

-- 2. Filtrar alunos de Desenvolvimento Web
SELECT
    alunos.nome AS aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos
    ON alunos.curso_id = cursos.id
WHERE cursos.nome_curso = 'Desenvolvimento Web';

-- 3. Transferir Maria para Ciência de Dados
UPDATE alunos
SET curso_id = (
    SELECT id
    FROM cursos
    WHERE nome_curso = 'Ciência de Dados'
)
WHERE nome = 'Maria Souza';

-- 4. Confirmar a atualização
SELECT
    alunos.nome AS aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos
    ON alunos.curso_id = cursos.id;

-- 5. EXTRA: identificar cursos sem alunos
SELECT
    cursos.nome_curso AS curso
FROM cursos
LEFT JOIN alunos
    ON cursos.id = alunos.curso_id
WHERE alunos.id IS NULL;
