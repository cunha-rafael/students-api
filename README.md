# Students API

API REST desenvolvida com Node.js, Express, PostgreSQL e Prisma ORM.

## Sobre o Projeto

Este projeto foi criado com o objetivo de praticar desenvolvimento backend utilizando tecnologias amplamente utilizadas no mercado.

A API permite realizar operações de cadastro, consulta, atualização e remoção de alunos através de rotas REST.

## Tecnologias Utilizadas

* Node.js
* Express
* PostgreSQL
* Prisma ORM
* Git e GitHub
* Postman

## Funcionalidades

* Listar alunos
* Cadastrar alunos
* Atualizar alunos
* Remover alunos
* Validação de dados
* Tratamento de erros

## Estrutura do Projeto

students-api/

├── controllers/

├── routes/

├── prisma/

├── server.js

├── package.json

└── README.md

## Instalação

Clone o repositório:

git clone https://github.com/cunha-rafael/students-api.git

Acesse a pasta:

cd students-api

Instale as dependências:

npm install

## Configuração do Banco de Dados

Configure a variável DATABASE_URL no arquivo .env:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/studentsdb"

Execute as migrations:

npx prisma migrate dev

Gere o Prisma Client:

npx prisma generate

## Executando o Projeto

Inicie o servidor:

node server.js

Servidor disponível em:

http://localhost:3000

## Rotas da API

### Listar alunos

GET /students

### Cadastrar aluno

POST /students

Exemplo:

{
"nome": "Maria",
"curso": "Engenharia"
}

### Atualizar aluno

PUT /students/:id

Exemplo:

{
"nome": "Maria Silva",
"curso": "Ciência da Computação"
}

### Remover aluno

DELETE /students/:id

## Exemplos de Resposta

Sucesso:

[
{
"id": 1,
"nome": "Maria",
"curso": "Engenharia"
}
]

Erro de validação:

{
"erro": "nome e curso são obrigatórios"
}

Aluno não encontrado:

{
"erro": "Aluno não encontrado"
}

## Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

* APIs REST
* CRUD
* PostgreSQL
* Prisma ORM
* Estruturação de projetos Node.js
* Validação de dados
* Tratamento de erros
* Versionamento com Git e GitHub

## Autor

Rafael Cunha

GitHub:
https://github.com/cunha-rafael
