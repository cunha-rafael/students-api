const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent,
    register,
    login
} = require("../controllers/studentController");

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 */

router.get("/students", getStudents);
/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Busca um aluno pelo ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *       404:
 *         description: Aluno não encontrado
 */
router.get("/students/:id", getStudentById);
/**
 * @swagger
 * /students:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/students", authMiddleware, createStudent);

router.delete("/students/:id", authMiddleware, deleteStudent);

router.put("/students/:id", authMiddleware, updateStudent);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login e retorna um token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Usuário ou senha inválidos
 */
router.post("/login", login);
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Usuário já existe ou dados inválidos
 */
router.post("/register", register);
module.exports = router;