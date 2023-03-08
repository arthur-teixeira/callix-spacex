import express, { Express, Request, Response } from 'express';


const app: Express = express();
const port = 8000;

app.get('/', (_: Request, res: Response) => {
    res.send('TS working');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
