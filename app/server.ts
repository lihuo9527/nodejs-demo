import express from 'express';
import { RouterController } from './controllers/router.controller';

import { accountController } from './controllers/router.controller.1';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import s from 'connect-redis';
import { redisConfig, node } from '../environments/environments';
const redisStore = s(session);
const app: express.Application = express();
const port: number = Number(process.env.PORT) || node.port;
app.use(cookieParser());
app.use(
    session({
        name: "sessionId",
        secret: 'keyboard cat',
        store: new redisStore(redisConfig),
        cookie: {
            maxAge: 60000 * 60 * 4
        }
    }));
app.use('/login', RouterController);
app.use('/account', accountController);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});