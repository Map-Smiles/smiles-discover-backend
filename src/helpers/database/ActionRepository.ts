import { Db } from "mongodb";

import { Action } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class ActionRepository extends AbstractRepository<Action> {
  constructor(db: Db) {
    super(db, "actions");
  }
}
