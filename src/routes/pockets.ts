import { Router } from "express";

const pocketsRouter = Router();

pocketsRouter.get("/", (request, response) => {
  return response.status(200).json({ message: "List pockets" });
});
pocketsRouter.get("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Show pocket id ${request.params.id}` });
});
pocketsRouter.put("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Update pocket id ${request.params.id}` });
});

pocketsRouter.post("/", (request, response) => {
  return response.status(200).json({ message: "Create pocket" });
});

export default pocketsRouter;
