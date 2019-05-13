import { Router, Request, Response } from 'express';
import * as mysql from 'mysql';
import { User } from '../../db-config';
import { redisConfig, mysqlConfig } from '../../environments/environments';
import { login } from './login';
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
let client = redis.createClient(redisConfig.port, redisConfig.host);
client.on('ready', function () {
    console.log('connected');
});
const router: Router = Router();
let pool = mysql.createPool(mysqlConfig);
router.get('/', async (req: Request, res: Response) => {
    console.log(req.cookies.sessionId);
    let id = ''
    if (req.cookies.sessionId) {
        id = await client.getAsync(req.cookies.sessionId.split('.')[0]);
        new login().call(1);
    }


    console.log(id)
    //let id = await client.getAsync(req.cookies.sessionId.split('.')[0]);
    res.send("   Hello" + 444 + id);
});

// router.get('/:name', async (req: Request, res: Response) => {
//     try {
//         await new sendData().init();
//         res.send("Hello" + 444);
//     } catch (e) {
//         console.error(e);
//     }
// });

export const RouterController: Router = router;


