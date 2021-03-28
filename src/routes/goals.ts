import { Router } from "express";

const goalsRouter = Router();

goalsRouter.get("/", (request, response) => {
  return response.status(200).json({ message: "List goals" });
});
goalsRouter.get("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Show goal id ${request.params.id}` });
});
goalsRouter.put("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Update goal id ${request.params.id}` });
});

goalsRouter.post("/", (request, response) => {
  return response.status(200).json({ message: "Create goal" });
});

export default goalsRouter;
