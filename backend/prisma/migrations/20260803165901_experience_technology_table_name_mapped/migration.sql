/*
  Warnings:

  - You are about to drop the `ExperienceTechnology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ExperienceTechnology` DROP FOREIGN KEY `ExperienceTechnology_experience_id_fkey`;

-- DropForeignKey
ALTER TABLE `ExperienceTechnology` DROP FOREIGN KEY `ExperienceTechnology_technology_id_fkey`;

-- DropTable
DROP TABLE `ExperienceTechnology`;

-- CreateTable
CREATE TABLE `experience_technology` (
    `experience_id` INTEGER NOT NULL,
    `technology_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`experience_id`, `technology_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `experience_technology` ADD CONSTRAINT `experience_technology_experience_id_fkey` FOREIGN KEY (`experience_id`) REFERENCES `experience`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `experience_technology` ADD CONSTRAINT `experience_technology_technology_id_fkey` FOREIGN KEY (`technology_id`) REFERENCES `technologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
