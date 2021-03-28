import { Db } from "mongodb";

import { Goal } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class GoalRepository extends AbstractRepository<Goal> {
  constructor(db: Db) {
    super(db, "goals");
  }
}
