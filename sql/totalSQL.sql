-- 创建数据库，并设置字符集为 utf8mb4
CREATE DATABASE IF NOT EXISTS currency
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 选择数据库
USE currency;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `default_currency` varchar(45) DEFAULT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT IGNORE INTO `users` (`name`, `email`, `password`, `default_currency`) VALUES
('Alice Smith', 'alice.smith@example.com', 'hashed_password_alice', 'USD');

INSERT IGNORE INTO `users` (`name`, `email`, `password`, `default_currency`) VALUES
('Bob Johnson', 'bob.j@example.com', 'hashed_password_bob', 'EUR');

INSERT IGNORE INTO `users` (`name`, `email`, `password`, `default_currency`, `create_time`) VALUES
('Charlie Brown', 'charlie.b@example.com', 'hashed_password_charlie', 'GBP', '2024-01-01 10:00:00');

INSERT IGNORE INTO `users` (`name`, `email`, `password`) VALUES
('Diana Prince', 'diana.p@example.com', 'hashed_password_diana');

INSERT IGNORE INTO `users` (`name`, `email`, `password`, `is_active`) VALUES
('Eve Adams', 'eve.a@example.com', 'hashed_password_eve', 0); -- 使用 0 表示 FALSE

INSERT IGNORE INTO `users` (`name`, `email`, `password`, `default_currency`) VALUES
('Frank White', 'frank.w@example.com', 'hashed_password_frank', 'AUD');

-- 创建 currency 表
CREATE TABLE IF NOT EXISTS currency (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    country VARCHAR(100),
    code CHAR(3) NOT NULL UNIQUE
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- 插入数据
INSERT IGNORE INTO currency (name, symbol, country, code) VALUES
('United States Dollar', '$', 'United States', 'USD'),
('Euro', '€', 'European Union', 'EUR'),
('Japanese Yen', '¥', 'Japan', 'JPY'),
('British Pound', '£', 'United Kingdom', 'GBP'),
('Chinese Yuan', '¥', 'China', 'CNY'),
('Hong Kong Dollar', 'HK$', 'Hong Kong', 'HKD');