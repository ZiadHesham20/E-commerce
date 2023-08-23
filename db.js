import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce_usersdb',
  port:'3308'
});

export default pool;