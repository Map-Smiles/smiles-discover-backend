import httpError, { HttpError } from "http-errors";

import { IHttpResponse } from "@interfaces";

export const UNEXPECTED_ERROR = {
  message: "Sorry! An unexpected error has ocurred. Please try again",
};

export function lambdaUnexpectedError(err: Error): IHttpResponse {
  console.error(`❌ ${err.message}:`, err);

  return {
    statusCode: 500,
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    },
    body: JSON.stringify(UNEXPECTED_ERROR),
  };
}

export const apiErrors = {
  forbidden: (msg?: string): HttpError => new httpError.Forbidden(msg),
  badRequest: (msg?: string): HttpError => new httpError.BadRequest(msg),
  internalSeverError: (): HttpError =>
    new httpError.InternalServerError(UNEXPECTED_ERROR.message),
};
