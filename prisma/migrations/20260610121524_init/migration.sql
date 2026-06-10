-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
