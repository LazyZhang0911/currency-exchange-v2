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

const app = express();

app.use(express.json());

// 挂载路由
app.use('/api', userRoutes);
app.use('/api', watchlistRoutes);
app.use('/api', currencyRoutes);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
});
