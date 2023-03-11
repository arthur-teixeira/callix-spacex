import { NextFunction, Request, Response } from "express";
import IHttpClient from "../interfaces/IHttpClient";
import { Launch } from "../types/Launch";

export default class LaunchesController {

    private httpClient: IHttpClient;

    constructor(httpClient: IHttpClient) {
        this.httpClient = httpClient;
    };

    public async getPastLaunches(_: Request, res: Response, next: NextFunction) {
        try {
            const pastLaunches = await this.httpClient.get<Launch[]>('launches/past');
            res.json(pastLaunches);
            return next();
        } catch (error: unknown) {
            return next(error);
        }
    }

    public async getNextLaunch(_: Request, res: Response, next: NextFunction) {
        try {
            const nextLaunch = await this.httpClient.get<Launch>('launches/next');
            res.json(nextLaunch);
            return next();
        } catch (error: unknown) {
            return next(error);
        }
    }

    public async getPreviousLaunch(_: Request, res: Response, next: NextFunction) {
        try {
            const nextLaunch = await this.httpClient.get<Launch>('launches/latest');
            res.json(nextLaunch);
            return next();
        } catch (error: unknown) {
            return next(error);
        }
    }

    public async getUpcomingLaunches(_: Request, res: Response, next: NextFunction) {
        try {
            const nextLaunch = await this.httpClient.get<Launch[]>('launches/upcoming');
            res.json(nextLaunch);
            return next();
        } catch (error: unknown) {
            return next(error);
        }
    }
};
