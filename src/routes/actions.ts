import { Router } from "express";

const actionsRouter = Router();

actionsRouter.get("/", (request, response) => {
  return response.status(200).json({ message: "List actions" });
});
actionsRouter.get("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Show action id ${request.params.id}` });
});

export default actionsRouter;
