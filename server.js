const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

let students = [
    {
        id: 1,
        nome: "Rafael",
        curso: "ADS"
    },
    {
        id: 2,
        nome: "Maria",
        curso: "Engenharia"
    }
];

app.get("/students", function (req, res) {

    res.json(students);

});

app.post("/students", function (req, res) {

    const newStudent = {
        id: students.length + 1,
        nome: req.body.nome,
        curso: req.body.curso
    };

    students.push(newStudent);

    res.status(201).json(newStudent);

});

app.delete("/students/:id", function (req, res) {

    const studentId = Number(req.params.id);

    students = students.filter(function (student) {

    return student.id !== studentId;

});

res.json(students);

}); 

app.put("/students/:id", function (req, res) {

    const studentId = Number(req.params.id);

    const student = students.find(function (student) {

        return student.id === studentId;

    });

    student.nome = req.body.nome;

    student.curso = req.body.curso;

    res.json(student);

});

app.get("/", function (req, res) {

    res.send("API de alunos funcionando!");

});

app.listen(PORT, function () {

    console.log(`Servidor rodando na porta ${PORT}`);

});