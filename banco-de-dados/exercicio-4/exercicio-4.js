
 // Exercício 4 — Consultas Avançadas MongoDB
 // Orion Bootcamp

 const banco = db.getSiblingDB("orion_db");

 // 1. Adicionar comentários ao primeiro post
 const resultado = banco.posts.updateOne(
     { titulo: "Introdução ao MongoDB" },
     {
         $set: {
             comentarios: [
                 {
                     autor: "Maria Souza",
                     texto: "Excelente explicação!"
                 },
                 {
                     autor: "Ana Oliveira",
                     texto: "Conteúdo muito útil!"
                 }
             ]
         }
     }
 );

 print("=== RESULTADO DO UPDATE ===");
 printjson(resultado);

 // 2. Consultar posts com a tag "nosql"
 print("=== POSTS COM TAG NOSQL ===");
 printjson(
     banco.posts.find({ tags: "nosql" }).toArray()
 );

 // 3. Consultar posts da autora Maria Souza
 print("=== POSTS DE MARIA SOUZA ===");
 printjson(
     banco.posts.find({ autor: "Maria Souza" }).toArray()
 );

 // 4. Consultar posts com comentários de Maria
 print("=== COMENTÁRIOS DE MARIA SOUZA ===");
 printjson(
     banco.posts.find({
         "comentarios.autor": "Maria Souza"
     }).toArray()
 );

 // 5. Conferir todos os documentos atualizados
 print("=== TODOS OS POSTS ===");
 printjson(banco.posts.find().toArray());
