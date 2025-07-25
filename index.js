// import { checkNumber } from "./src/numberFunctions.js";
// import { processData } from "./src/promise.js";
// import { fetchData } from "./src/restapi.js";
// console.log(checkNumber(7));



// processData("hello").then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// });

// fetchData('https://jsonplaceholder.typicode.com/todos/1')


//-----------------------------

import express from 'express';

import {router as userRoutes} from './routes/userRoutes.js';
import {router as watchlistRoutes} from './routes/watchlistRoutes.js';
import {router as currencyRoutes} from './routes/currencyRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// 挂载路由
app.use('/api', userRoutes);
app.use('/api', watchlistRoutes);
app.use('/api', currencyRoutes);

const PORT = 8088;
app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
});



// import { createAServer } from './dbconnect.js';
// import { startApp } from './appstart.js';
// const connection = createAServer();
// const app = startApp();





//   //get all tracks
//   app.get('/tracks', (req, res) => {
//     connection.query('SELECT * FROM tracks', (err, 
//       results,) => {
//       res.json(results);
// })})
//   //get a tracks by id
//   app.get('/tracks/:id', (req, res) => {
//     const trackId = req.params.id;
//     connection.query('SELECT * FROM tracks WHERE id = ?', [trackId], (err, results) => {
//       if (err) {
//         return res.status(500).json({ error: 'Database query failed' });
//       }
//       if (results.length === 0) {
//         return res.status(404).json({ error: 'Track not found' });
//       }
//       res.json(results[0]);
//     });
//   });

//   //create a new track
//   app.post('/tracks', (req, res) => {
//     let sql = "INSERT INTO tracks (id, cd_id, title)";
//     sql += `VALUES (${req.body.id}, ${req.body.cd_id}, '${req.body.title}');`;
//     connection.query(sql, function(err, result) {res.end('Track created successfully');
//   })});
//   //update a track by id
//   app.put('/tracks/:id', (req, res) => {
//     let sql = `UPDATE tracks SET title = '${req.body.title}', cd_id = ${req.body.cd_id} WHERE id = ${req.params.id};`;
//     connection.query(sql, function(err,results){
//     res.end('Item updated if it exists')
//   })});
//   //delete a track by id
//   app.delete('/tracks/:id', (req, res) => {
//     let sql = `DELETE FROM tracks WHERE id = ${req.params.id};`;
//     connection.query(sql, function(err, results) {
//       res.end('Item deleted if it exists');
//     });});


    
