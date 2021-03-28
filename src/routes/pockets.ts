import { Router } from "express";

import { pocketsController } from "@controllers";

const pocketsRouter = Router();

pocketsRouter.get("/", pocketsController.listPockets);
pocketsRouter.get("/:id", pocketsController.showPocket);
pocketsRouter.put("/:id", pocketsController.updatePocket);
pocketsRouter.post("/", pocketsController.createPocket);

export default pocketsRouter;
