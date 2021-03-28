import { Db } from "mongodb";

import { Pocket } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class PocketRepository extends AbstractRepository<Pocket> {
  constructor(db: Db) {
    super(db, "pockets");
  }
}
