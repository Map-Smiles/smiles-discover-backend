import { Db } from "mongodb";

import { SpotType } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class SpotTypeRepository extends AbstractRepository<SpotType> {
  constructor(db: Db) {
    super(db, "spots_types");
  }
}
