import { Request, Response, Router } from "express";
import HttpClient from "../core/HttpClient";

const router = Router();
const httpClient = new HttpClient();

router.get('/launches', async (_: Request, res: Response) => {
    try {
        const launches = await httpClient.get('launches');
        res.json(launches);
    } catch (error: any) {
        res.status(400).send(error);
    }
});

export default router;
