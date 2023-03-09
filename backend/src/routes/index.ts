import { Router } from "express";
import buildController from "../core/buildController";
import { getLaunchesController } from "../factories/ControllersFactory";

const router = Router();

router.get('/past', buildController(getLaunchesController, 'getPastLaunches'));
router.get('/next', buildController(getLaunchesController, 'getNextLaunch'));
router.get('/previous', buildController(getLaunchesController, 'getPreviousLaunch'));
router.get('/upcoming', buildController(getLaunchesController, 'getUpcomingLaunches'));

export default router;
