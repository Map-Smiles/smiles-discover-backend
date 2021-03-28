import { User } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ShowUserHandler = RequestHandler<Empty, User>;
