import { Router } from "express";

const spotsRouter = Router();

spotsRouter.get("/", (request, response) => {
  return response.status(200).json({ message: "List spots" });
});
spotsRouter.get("/:id", (request, response) => {
  return response
    .status(200)
    .json({ message: `Show spot id ${request.params.id}` });
});

export default spotsRouter;
