import { Router } from "express";

const healthCheckRouter = Router();

healthCheckRouter.get("/", (_, response) => {
  const currentDate = new Date().toLocaleDateString("en-us");
  const currentTime = new Date().toLocaleTimeString("en-us");
  const timeStamp = `The current time is: ${currentTime} on: ${currentDate}`;
  return response.status(200).json({ timeCheck: timeStamp });
});

export default healthCheckRouter;
