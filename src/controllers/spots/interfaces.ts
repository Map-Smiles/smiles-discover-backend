import { Spot } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ListSpotsHandler = RequestHandler<Empty, Spot[]>;

export type ShowSpotHandler = RequestHandler<Empty, Spot>;

export type ListSpotsByUserHandler = RequestHandler<Empty, Spot[]>;
