import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { UNEXPECTED_ERROR } from "@helpers/errors";

export interface IErrorResponse {
  message: string;
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error(`❌ ${err.stack}`);

  if (createHttpError.isHttpError(err)) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json(UNEXPECTED_ERROR);
};
