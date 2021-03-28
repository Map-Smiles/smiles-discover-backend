import { Router } from "express";

import { spotsController } from "@controllers";

const spotsRouter = Router();

spotsRouter.get("/", spotsController.listSpots);
spotsRouter.get("/:id", spotsController.showSpot);
spotsRouter.get("/by-user", spotsController.listSpotsByUser);

export default spotsRouter;
