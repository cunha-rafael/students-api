const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getStudents(req, res) {

    const students = await prisma.student.findMany();

    res.json(students);

}

async function createStudent(req, res) {

    const newStudent = await prisma.student.create({
        data: {
            nome: req.body.nome,
            curso: req.body.curso
        }
    });

    res.status(201).json(newStudent);

}

async function deleteStudent(req, res) {

    const studentId = Number(req.params.id);

    await prisma.student.delete({
        where: {
            id: studentId
        }
    });

    res.json({
        mensagem: "Aluno removido com sucesso"
    });

}

async function updateStudent(req, res) {

    const studentId = Number(req.params.id);

    const updatedStudent = await prisma.student.update({
        where: {
            id: studentId
        },
        data: {
            nome: req.body.nome,
            curso: req.body.curso
        }
    });

    res.json(updatedStudent);

}

module.exports = {
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
};