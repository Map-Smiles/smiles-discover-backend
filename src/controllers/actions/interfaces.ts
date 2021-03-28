import { Action } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ListActionsHandler = RequestHandler<Empty, Action[]>;

export type ShowActionHandler = RequestHandler<Empty, Action>;
