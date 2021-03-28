import { Db } from "mongodb";

import { Spot } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class SpotRepository extends AbstractRepository<Spot> {
  constructor(db: Db) {
    super(db, "spots");
  }
}
