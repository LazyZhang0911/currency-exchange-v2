CREATE DATABASE IF NOT EXISTS conygre
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- select db
USE conygre;

-- Create currency schema
CREATE TABLE currency (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    country VARCHAR(100),
    code CHAR(3) NOT NULL UNIQUE
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Insert data
INSERT INTO currency (name, symbol, country, code) VALUES
('United States Dollar', '$', 'United States', 'USD'),
('Euro', '€', 'European Union', 'EUR'),
('Japanese Yen', '¥', 'Japan', 'JPY'),
('British Pound', '£', 'United Kingdom', 'GBP'),
('Chinese Yuan', '¥', 'China', 'CNY'),
('Hong Kong Dollar', 'HK$', 'Hong Kong', 'HKD');


