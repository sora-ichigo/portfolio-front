-- CreateTable
CREATE TABLE `blog_from_manual_items` (
    `id` VARCHAR(36) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `posted_at` DATETIME(0) NOT NULL,
    `site_url` VARCHAR(255) NOT NULL,
    `thumbnail_url` VARCHAR(2048) NOT NULL,
    `service_name` VARCHAR(36) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_from_rss_items` (
    `id` VARCHAR(36) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `posted_at` DATETIME(0) NOT NULL,
    `site_url` VARCHAR(255) NOT NULL,
    `thumbnail_url` VARCHAR(2048) NOT NULL,
    `service_name` VARCHAR(36) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rss_feeds` (
    `id` VARCHAR(36) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `url_index`(`url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schema_migrations` (
    `version` BIGINT NOT NULL,
    `dirty` BOOLEAN NOT NULL,

    PRIMARY KEY (`version`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
