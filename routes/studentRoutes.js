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
router.get("/students/:id", getStudentById);

router.post("/students", authMiddleware, createStudent);

router.delete("/students/:id", authMiddleware, deleteStudent);

router.put("/students/:id", authMiddleware, updateStudent);
router.post("/login", login);
router.post("/register", register);
module.exports = router;