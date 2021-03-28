import { Router } from "express";

import { goalsController } from "@controllers";

const goalsRouter = Router();

goalsRouter.get("/", goalsController.listGoals);
goalsRouter.get("/:id", goalsController.showGoal);
goalsRouter.put("/:id", goalsController.updateGoal);
goalsRouter.post("/", goalsController.createGoal);

export default goalsRouter;
