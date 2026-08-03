-- AlterTable
ALTER TABLE `experience` ADD COLUMN `end_year` INTEGER NULL,
    ADD COLUMN `start_year` INTEGER NULL,
    MODIFY `year` INTEGER NULL;
