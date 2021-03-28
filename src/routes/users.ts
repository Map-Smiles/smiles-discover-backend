import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (request, response) => {
  return response.status(200).json({ message: "List users" });
});
usersRouter.get("/spots", (request, response) => {
  return response.status(200).json({ message: "Show user spots" });
});

export default usersRouter;
