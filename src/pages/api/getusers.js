import pool from '../../../db';

export default async function handler(req, res) {
  
  try {
    
    const [rows, fields] = await pool.query('SELECT email,password,is_admin FROM users');
    res.status(200).json(rows,fields);
  
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}