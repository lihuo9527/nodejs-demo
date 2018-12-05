import { Router, Request, Response } from 'express';
import { rejects } from 'assert';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!!!!');
});

router.get('/:name', async (req: Request, res: Response) => {
    try {
        await new sendData().init();
        res.send("Hello" + 444);
    } catch (e) {
        console.error(e);
    }
});

export const RouterController: Router = router;

class sendData {
    init() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => resolve('4444'), 10000);
            }
        );

    }
}