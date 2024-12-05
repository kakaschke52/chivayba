const { Pool } = require('pg');
require('dotenv').config(); // Подключаем переменные окружения

// Создаем клиент PostgreSQL с настройками из .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;