import { Router } from "express";

import { interactionsController } from "@controllers";

const interactionsRouter = Router();

interactionsRouter.get("/", interactionsController.listInteractions);
interactionsRouter.get("/:id", interactionsController.showInteraction);
interactionsRouter.put("/:id", interactionsController.updateInteraction);
interactionsRouter.post("/", interactionsController.createInteraction);

export default interactionsRouter;
