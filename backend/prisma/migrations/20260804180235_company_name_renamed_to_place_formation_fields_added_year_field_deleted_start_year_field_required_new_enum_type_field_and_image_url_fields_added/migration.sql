/*
  Warnings:

  - You are about to drop the column `company_name` on the `experience` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `experience` table. All the data in the column will be lost.
  - Added the required column `place` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Made the column `start_year` on table `experience` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `experience` DROP COLUMN `company_name`,
    DROP COLUMN `year`,
    ADD COLUMN `formation_en` VARCHAR(191) NULL,
    ADD COLUMN `formation_es` VARCHAR(191) NULL,
    ADD COLUMN `image_url` TEXT NULL,
    ADD COLUMN `place` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` ENUM('job', 'education') NOT NULL,
    MODIFY `job_title_en` VARCHAR(191) NULL,
    MODIFY `job_title_es` VARCHAR(191) NULL,
    MODIFY `start_year` INTEGER NOT NULL;
