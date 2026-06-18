const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentRoutes");

const PORT = 3000;

app.use(express.json());

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.use(studentRoutes);

app.get("/", function (req, res) {

    res.send("API de alunos funcionando!");

});

app.listen(PORT, function () {

    console.log(`Servidor rodando na porta ${PORT}`);

});