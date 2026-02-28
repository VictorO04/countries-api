-- CreateTable
CREATE TABLE "Countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "flagUrl" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");
