import cors from "cors";
import express from "express";
import helmet from "helmet";

import { errorHandler, logging } from "@middlewares";
import {
  accountsRouter,
  actionsRouter,
  goalsRouter,
  healthCheckRouter,
  interactionsRouter,
  pocketsRouter,
  spotsRouter,
  usersRouter,
} from "@routes";

const app = express();

// Middlewares
app.disable("etag");
app.use(helmet());
app.use(cors());
app.use(logging);
app.use(express.json());

// Static user id used in some requests
app.use((req, res, next) => {
  req.user = { id: "6060e7e07baca7ea59defe4d" };
  next();
});

// Routers
app.use("/accounts", accountsRouter);
app.use("/actions", actionsRouter);
app.use("/goals", goalsRouter);
app.use("/health-check", healthCheckRouter);
app.use("/interactions", interactionsRouter);
app.use("/pockets", pocketsRouter);
app.use("/spots", spotsRouter);
app.use("/users", usersRouter);

// Error handling
app.use(errorHandler);

export default app;
