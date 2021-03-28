import { Account } from "@entities";
import { Empty, RequestHandler } from "@interfaces";

export type ShowAccountHandler = RequestHandler<Empty, Account>;
