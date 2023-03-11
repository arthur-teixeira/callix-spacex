import dotenv from 'dotenv';
dotenv.config();


import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import routes from './src/routes';


const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use('/', routes);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
    res.status(500).json({
        message: `Um erro inesperado ocorreu: ${err.message}`,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
