-- CreateTable
CREATE TABLE "contas" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(50) NOT NULL,
    "valor" VARCHAR(50) NOT NULL,

    CONSTRAINT "contas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contas_descricao_key" ON "contas"("descricao");
