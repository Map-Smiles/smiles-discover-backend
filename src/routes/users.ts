import { Router } from "express";

import { usersController } from "@controllers";

const usersRouter = Router();

usersRouter.get("/:id", usersController.showUser);

export default usersRouter;
