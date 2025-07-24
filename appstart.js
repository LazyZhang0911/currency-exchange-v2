import express from 'express';
import bodyParser from 'body-parser'

export function startApp(){
    const app = express();
app.use(bodyParser.json());
app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
  });
  return app;
}
