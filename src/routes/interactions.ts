import { Router } from "express";

const interactionsRouter = Router();

interactionsRouter.get("/", (request, response) => {
  return response.status(200).json({ message: "List interactions" });
});
interactionsRouter.get("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Show interaction id ${request.params.id}` });
});
interactionsRouter.put("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Update interaction id ${request.params.id}` });
});

interactionsRouter.post("/", (request, response) => {
  return response.status(200).json({ message: "Create interaction" });
});

export default interactionsRouter;
