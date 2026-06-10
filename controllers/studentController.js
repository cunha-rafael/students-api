const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

async function getStudents(req, res) {
    const students = await prisma.student.findMany();

    res.json(students);
}

async function createStudent(req, res) {
    const { nome, curso } = req.body;

    if (!nome || !curso) {
        return res.status(400).json({
            erro: "nome e curso são obrigatórios"
        });
    }

    const newStudent = await prisma.student.create({
        data: {
            nome,
            curso
        }
    });

    res.status(201).json(newStudent);
}

async function deleteStudent(req, res) {
    const studentId = Number(req.params.id);

    try {
        await prisma.student.delete({
            where: {
                id: studentId
            }
        });

        res.json({
            mensagem: "Aluno removido com sucesso"
        });

    } catch (error) {
        res.status(404).json({
            erro: "Aluno não encontrado"
        });
    }
}

async function updateStudent(req, res) {
    const studentId = Number(req.params.id);

    try {
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

    } catch (error) {
        res.status(404).json({
            erro: "Aluno não encontrado"
        });
    }
}

function login(req, res) {

    const { usuario, senha } = req.body;

    if (usuario !== "admin" || senha !== "123456") {
        return res.status(401).json({
            erro: "Usuário ou senha inválidos"
        });
    }

    const token = jwt.sign(
        {
            usuario: usuario
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        token
    });
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent,
    login
};

async function getStudentById(req, res) {

    const studentId = Number(req.params.id);

    const student = await prisma.student.findUnique({
        where: {
            id: studentId
        }
    });

    if (!student) {
        return res.status(404).json({
            erro: "Aluno não encontrado"
        });
    }

    res.json(student);
}