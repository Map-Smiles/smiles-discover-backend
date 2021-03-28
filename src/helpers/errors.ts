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

const messages = {
  actionNotFound: (id: string) => `Could not find action with id ${id}`,
  goalNotFound: (id: string) => `Could not find goal with id ${id}`,
  interactionNotFound: (id: string) =>
    `Could not find interaction with id ${id}`,
  spotNotFound: (id: string) => `Could not find spot with id ${id}`,
  userNotFound: (id: string) => `Could not find user with id ${id}`,
  accountNotFound: (id: string) => `Could not find account with id ${id}`,
};

export const apiErrors = {
  forbidden: (msg?: string): HttpError => new httpError.Forbidden(msg),
  badRequest: (msg?: string): HttpError => new httpError.BadRequest(msg),
  internalSeverError: (): HttpError =>
    new httpError.InternalServerError(UNEXPECTED_ERROR.message),
  actionNotFound: (id: string): HttpError =>
    new httpError.NotFound(messages.actionNotFound(id)),
  goalNotFound: (id: string): HttpError =>
    new httpError.NotFound(messages.goalNotFound(id)),
  interactionNotFound: (id: string): HttpError =>
    new httpError.NotFound(messages.interactionNotFound(id)),
  spotNotFound: (id: string): HttpError =>
    new httpError.NotFound(messages.spotNotFound(id)),
  userNotFound: (id: string): HttpError =>
    new httpError.NotFound(messages.userNotFound(id)),
  accountNotFound: (id: string): HttpError =>
    new httpError.NotFound(messages.accountNotFound(id)),
};
