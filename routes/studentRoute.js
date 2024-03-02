const express = require("express");
const router = express.Router();
// Combinação das importações dos controladores
const { createStudent, getAllStudents } = require("../controllers/studentController");

// Definição da rota para criar estudante
router.post("/student", createStudent);

// Definição da rota para obter todos os estudantes
router.get("/student", getAllStudents);

// Exportando o router após todas as rotas estarem definidas
module.exports = router;
