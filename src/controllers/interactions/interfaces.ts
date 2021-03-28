import { Interaction } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ListInteractionsHandler = RequestHandler<Empty, Interaction[]>;

export type ShowInteractionHandler = RequestHandler<Empty, Interaction>;

export type UpdateInteractionHandler = RequestHandler<
  Partial<Interaction>,
  Interaction
>;

export type CreateInteractionHandler = RequestHandler<
  Partial<Interaction>,
  Interaction
>;
