const express = require("express");

const router = express.Router();

const {
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
} = require("../controllers/studentController");

router.get("/students", getStudents);

router.post("/students", createStudent);

router.delete("/students/:id", deleteStudent);

router.put("/students/:id", updateStudent);

module.exports = router;