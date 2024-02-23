const express = require("express")
const router = express.Router()
const {createStudent} = require("../controllers/studentController")

// Criar estudante
router.post("/student", createStudent)
module.exports = router
