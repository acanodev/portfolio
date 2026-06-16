/*
  Warnings:

  - You are about to drop the column `name` on the `softskills` table. All the data in the column will be lost.
  - Added the required column `name_en` to the `softskills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_es` to the `softskills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `softskills` DROP COLUMN `name`,
    ADD COLUMN `name_en` VARCHAR(191) NOT NULL,
    ADD COLUMN `name_es` VARCHAR(191) NOT NULL;
