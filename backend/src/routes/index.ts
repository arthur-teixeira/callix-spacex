import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (_: Request, res: Response) => {
    res.send('Hello from router');
});

export default router;
