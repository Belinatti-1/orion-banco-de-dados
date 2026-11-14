
 // Exercício 3 — MongoDB CRUD Básico
 // Orion Bootcamp

 // Selecionar o banco de dados
 const banco = db.getSiblingDB("orion_db");

 // 1. Criar a coleção posts
 banco.createCollection("posts");

 // 2. Inserir o primeiro documento
 banco.posts.insertOne({
     titulo: "Introdução ao MongoDB",
     autor: "João Silva",
     conteudo: "Aprendendo os conceitos básicos de NoSQL."
 });

 // 3. Inserir o segundo documento com campo adicional
 banco.posts.insertOne({
     titulo: "Schema Flexível",
     autor: "Maria Souza",
     conteudo: "MongoDB permite documentos com estruturas diferentes.",
     tags: ["nosql", "flexivel"]
 });

 // 4. Consultar todos os documentos
 print("=== DOCUMENTOS CADASTRADOS ===");
 printjson(banco.posts.find().toArray());
