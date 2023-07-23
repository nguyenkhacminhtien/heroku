const express = require('express');
const router = express.Router();
import { json } from 'body-parser';
import pool from '../../database/db';
function routers (app) {
     router.get('/', (req, res, nex) => {
        res.send('Hello World!')
     });

     router.post('/register', async (req, res, next) => {
      try {
         const userName = req.body.userName;
         const password = req.body.password;
     
         const [rows, fields] = await pool.query('INSERT INTO register (userName, password) VALUES (?, ?)', [userName, password]);
     
         // Registration successful
         res.status(200).json({ message: 'Thành công' });
       } catch (err) {
         // Error handling
         console.error('Error during registration:', err);
         res.status(500).json({ message: 'Thất bại' });
       }
     });

     router.get('/api/account', async (req, res, next) =>{
       try {
        const [rows, fields] = await pool.execute('SELECT * FROM register');
        res.json(rows)
       } catch(err) {
        res.status(500).json({masseage: 'err'})
       }
       
     });

     router.post('/api/account',async (req, res, next) =>{
       try {
        let userName = req.body.userName;
        let password = req.body.password;
        const [rows, fields] = await pool.execute('INSERT INTO register (userName, password) values (?, ?)', [userName, password])
         if(rows) {res.json('thành công')}
       } catch (err) {
        res.status(500).json({message: 'thất bại'})
       }
     });

     router.put('/api/account/:id', async(req, res, next) =>{
        try {
          const userId = req.params.id;
          const { userName, password } = req.body;

          const [rows, fields] = await pool.execute('UPDATE register SET userName=?, password=? WHERE UserId=?', [userName, password, userId]);
          res.json({ message: 'Cập nhật thông tin người dùng thành công!' });

        } catch (err) {
          res.status(500).json({message: 'update thất bại'})
        }
     });

     router.delete('/api/account/:id', async(req, res, next) =>{
      try {
        const userId = req.params.id;

        const [rows, fields] = await pool.execute('DELETE FROM register WHERE UserId=?', [userId]);
        res.json({ message: 'xóa người dùng thành công!' });

      } catch (err) {
        res.status(500).json({message: 'xóa thất bại'})
      }
     });

    return app.use('/', router);
}

export default routers;