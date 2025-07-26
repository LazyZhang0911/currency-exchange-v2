-- 创建数据库，并设置字符集为 utf8mb4
CREATE DATABASE IF NOT EXISTS currency
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 选择数据库
USE currency;

CREATE TABLE `users` (
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


INSERT INTO `users` (`name`, `email`, `password`, `default_currency`) VALUES
('Alice Smith', 'alice.smith@example.com', 'hashed_password_alice', 'USD');

INSERT INTO `users` (`name`, `email`, `password`, `default_currency`) VALUES
('Bob Johnson', 'bob.j@example.com', 'hashed_password_bob', 'EUR');

INSERT INTO `users` (`name`, `email`, `password`, `default_currency`, `create_time`) VALUES
('Charlie Brown', 'charlie.b@example.com', 'hashed_password_charlie', 'GBP', '2024-01-01 10:00:00');

INSERT INTO `users` (`name`, `email`, `password`) VALUES
('Diana Prince', 'diana.p@example.com', 'hashed_password_diana');

INSERT INTO `users` (`name`, `email`, `password`, `is_active`) VALUES
('Eve Adams', 'eve.a@example.com', 'hashed_password_eve', 0); -- 使用 0 表示 FALSE

INSERT INTO `users` (`name`, `email`, `password`, `default_currency`) VALUES
('Frank White', 'frank.w@example.com', 'hashed_password_frank', 'AUD');

UPDATE `users` SET `email` = 'alice.new@example.com' WHERE `id` = 1;

UPDATE `users` SET `default_currency` = 'JPY' WHERE `id` = 3;

SELECT * FROM `users`;