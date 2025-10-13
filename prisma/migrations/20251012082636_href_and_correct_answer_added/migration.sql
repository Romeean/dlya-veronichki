/*
  Warnings:

  - A unique constraint covering the columns `[href]` on the table `Quiz` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "href" TEXT;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "correctAnswer" TEXT NOT NULL DEFAULT 'nothing';

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_href_key" ON "Quiz"("href");
