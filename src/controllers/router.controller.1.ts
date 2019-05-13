import { Router, Request, Response } from 'express';
import { User } from '../../db-config';
import { MysqlOnce } from '../share/methods';
import redisClient from './db/redis';
import pool from './db/mysql';
redisClient.on('ready', () => { console.log('connected'); });
const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    console.log(req.cookies.sessionId);
    let id = ''
    if (req.cookies.sessionId) {
        id = await redisClient.getAsync(req.cookies.sessionId.split('.')[0]);
    }
    let sql = `SELECT * FROM sys_config WHERE ?`;
    let obj: any = null;
    try {
        obj = await MysqlOnce(pool, sql, { variable: 'diagnostics.allow_i_s_tables' });
    } catch (e) {
        console.log(e);
    }




    console.log(obj['variable']);
    //let id = await client.getAsync(req.cookies.sessionId.split('.')[0]);
    res.send("   Hello" + 333 + id + obj['variable']);
});

// router.get('/:name', async (req: Request, res: Response) => {
//     try {
//         await new sendData().init();
//         res.send("Hello" + 444);
//     } catch (e) {
//         console.error(e);
//     }
// });

export const accountController: Router = router;
