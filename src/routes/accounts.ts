import { Router } from "express";

import { accountsController } from "@controllers";

const accountsRouter = Router();

accountsRouter.get("/:id", accountsController.showAccount);

export default accountsRouter;
