const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getStudents(req, res) {

    const students = await prisma.student.findMany();

    res.json(students);

}

function createStudent(req, res) {

    const newStudent = {
        id: students.length + 1,
        nome: req.body.nome,
        curso: req.body.curso
    };

    students.push(newStudent);

    res.status(201).json(newStudent);

}

function deleteStudent(req, res) {

    const studentId = Number(req.params.id);

    students = students.filter(function (student) {

        return student.id !== studentId;

    });

    res.json(students);

}

function updateStudent(req, res) {

    const studentId = Number(req.params.id);

    const student = students.find(function (student) {

        return student.id === studentId;

    });

    student.nome = req.body.nome;

    student.curso = req.body.curso;

    res.json(student);

}

module.exports = {
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
};