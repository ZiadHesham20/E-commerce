import Cookies from "js-cookie";
import pool from "../../../db";


export default async function handler(req,res){
  const newUser = req.body;
  //console.log(newUser);
    try {
      const [rows, fields] = await pool.query(`INSERT INTO users(First_Name,Last_Name,Email,Password,Age) VALUES ('${newUser.firstName}','${newUser.lastName}','${newUser.email}','${newUser.password}','${newUser.age}');`);
      res.status(200).json({ message: 'Registeration Success' });
        
      
      } catch (err) {
        
        if (err.code == 'ER_DUP_ENTRY') {
          res.status(200).json({message:'Email already exists'})
        }else{
          res.status(500).json({ message: 'Internal server error' });
        }
        
      }
}