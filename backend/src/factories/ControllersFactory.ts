import LaunchesController from "../controllers/LaunchesController";
import HttpClient from "../core/HttpClient";

export const getLaunchesController = () => {
    const httpClient = new HttpClient();
    return new LaunchesController(httpClient);
};
