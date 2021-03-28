import { Db } from "mongodb";

import { SpotAction } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class SpotActionRepository extends AbstractRepository<SpotAction> {
  constructor(db: Db) {
    super(db, "spots_actions");
  }
}
