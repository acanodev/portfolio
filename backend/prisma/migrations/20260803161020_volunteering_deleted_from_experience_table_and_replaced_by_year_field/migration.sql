/*
  Warnings:

  - You are about to drop the column `category` on the `experience` table. All the data in the column will be lost.
  - Added the required column `year` to the `experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `experience` DROP COLUMN `category`,
    ADD COLUMN `year` INTEGER NOT NULL;
