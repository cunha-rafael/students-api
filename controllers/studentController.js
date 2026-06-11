const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
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

async function register(req, res) {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            erro: "username e password são obrigatórios"
        });
    }

    const userExists = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (userExists) {
        return res.status(400).json({
            erro: "Usuário já existe"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword
        }
    });

    res.status(201).json({
        id: user.id,
        username: user.username
    });
}

async function login(req, res) {

    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (!user) {
        return res.status(401).json({
            erro: "Usuário ou senha inválidos"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return res.status(401).json({
            erro: "Usuário ou senha inválidos"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
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
    register,
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