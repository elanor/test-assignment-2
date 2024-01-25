const { Pool } = require('pg');

const pool = new Pool({
  user: 'melajus',
  host: 'database-service',
  database: 'testdatabase2',
  password: 'test123',
  port: 5432,
});

module.exports = pool;
