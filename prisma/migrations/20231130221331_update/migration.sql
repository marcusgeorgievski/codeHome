/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "contactEmail" TEXT,
ADD COLUMN     "extraLink" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "personal" TEXT,
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
