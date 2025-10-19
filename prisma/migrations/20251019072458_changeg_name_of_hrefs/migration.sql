/*
  Warnings:

  - You are about to drop the column `href` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `hrefCategory` on the `Quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "href",
DROP COLUMN "hrefCategory",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "taskId" TEXT;
