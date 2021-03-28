import { Goal } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ListGoalsHandler = RequestHandler<Empty, Goal[]>;

export type ShowGoalHandler = RequestHandler<Empty, Goal>;

export type UpdateGoalHandler = RequestHandler<Partial<Goal>, Goal>;

export type CreateGoalHandler = RequestHandler<Partial<Goal>, Goal>;
