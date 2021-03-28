import { middleware } from "@interfaces";

export const logging: middleware = (req, res, next) => {
  console.info(`🛩 REQUEST: ${req.method} ${req.url} ${req.body}`);
  next();
};
