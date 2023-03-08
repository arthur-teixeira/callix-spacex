import express, { Express } from 'express';
import routes from './src/routes';

const app: Express = express();
const port = 8000;

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
