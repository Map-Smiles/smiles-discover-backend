import { Pocket } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ListPocketsHandler = RequestHandler<Empty, Pocket[]>;

export type ShowPocketHandler = RequestHandler<Empty, Pocket>;

export type UpdatePocketHandler = RequestHandler<Partial<Pocket>, Pocket>;

export type CreatePocketHandler = RequestHandler<Partial<Pocket>, Pocket>;
