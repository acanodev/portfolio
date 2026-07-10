-- CreateTable
CREATE TABLE `experience` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(191) NOT NULL,
    `description_en` VARCHAR(191) NULL,
    `description_es` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExperienceTechnology` (
    `experience_id` INTEGER NOT NULL,
    `technology_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`experience_id`, `technology_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ExperienceTechnology` ADD CONSTRAINT `ExperienceTechnology_experience_id_fkey` FOREIGN KEY (`experience_id`) REFERENCES `experience`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExperienceTechnology` ADD CONSTRAINT `ExperienceTechnology_technology_id_fkey` FOREIGN KEY (`technology_id`) REFERENCES `technologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
