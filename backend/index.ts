import dotenv from 'dotenv';
dotenv.config();


import cors from 'cors';
import express, { Express } from 'express';
import routes from './src/routes';


const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
