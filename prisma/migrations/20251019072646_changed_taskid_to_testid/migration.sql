/*
  Warnings:

  - You are about to drop the column `taskId` on the `Quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "taskId",
ADD COLUMN     "testId" TEXT;
