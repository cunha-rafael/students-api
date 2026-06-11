const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent,
    login
} = require("../controllers/studentController");

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);

router.post("/students", authMiddleware, createStudent);

router.delete("/students/:id", authMiddleware, deleteStudent);

router.put("/students/:id", authMiddleware, updateStudent);
router.post("/login", login);
module.exports = router;