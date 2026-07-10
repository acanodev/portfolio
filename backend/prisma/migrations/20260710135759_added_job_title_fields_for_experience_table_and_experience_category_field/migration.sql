/*
  Warnings:

  - Added the required column `category` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_title_en` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_title_es` to the `experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `experience` ADD COLUMN `category` ENUM('experience', 'volunteering') NOT NULL,
    ADD COLUMN `job_title_en` VARCHAR(191) NOT NULL,
    ADD COLUMN `job_title_es` VARCHAR(191) NOT NULL;
