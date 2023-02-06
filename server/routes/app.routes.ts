import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Hola Mundo'
    }).status(200)
});

export default router;