import express from 'express';

import { RouterController } from './controllers/router.controller';
const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;
app.use('/', RouterController);
app.use()
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});