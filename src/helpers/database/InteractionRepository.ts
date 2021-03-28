import { Db } from "mongodb";

import { Interaction } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class InteractionRepository extends AbstractRepository<Interaction> {
  constructor(db: Db) {
    super(db, "interactions");
  }
}
