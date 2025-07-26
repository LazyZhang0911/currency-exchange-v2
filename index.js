import express from 'express';

import {router as userRoutes} from './src/routes/userRoutes.js';
import {router as watchlistRoutes} from './src/routes/watchlistRoutes.js';
import {router as currencyRoutes} from './src/routes/currencyRoutes.js';

const app = express();

app.use(express.json());

// 挂载路由
app.use('/api', userRoutes);
app.use('/api', watchlistRoutes);
app.use('/api', currencyRoutes);

const PORT = 8088;
app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
});
