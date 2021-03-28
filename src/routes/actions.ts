import { Router } from "express";

import { actionsController } from "@controllers";

const actionsRouter = Router();

actionsRouter.get("/", actionsController.listActions);
actionsRouter.get("/:id", actionsController.showAction);

export default actionsRouter;
