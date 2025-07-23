-- 创建数据库，并设置字符集为 utf8mb4
CREATE DATABASE IF NOT EXISTS currency
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 选择数据库
USE currency;

-- 创建 currency 表
CREATE TABLE currency (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    country VARCHAR(100),
    code CHAR(3) NOT NULL UNIQUE
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- 插入数据
INSERT INTO currency (name, symbol, country, code) VALUES
('United States Dollar', '$', 'United States', 'USD'),
('Euro', '€', 'European Union', 'EUR'),
('Japanese Yen', '¥', 'Japan', 'JPY'),
('British Pound', '£', 'United Kingdom', 'GBP'),
('Chinese Yuan', '¥', 'China', 'CNY'),
('Hong Kong Dollar', 'HK$', 'Hong Kong', 'HKD');


