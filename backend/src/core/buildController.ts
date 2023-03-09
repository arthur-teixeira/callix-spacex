import { NextFunction, Request, Response } from "express"

export default (controllerCreator: any, method: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const controller = controllerCreator();
        await controller[method](req, res, next);
    };
};
