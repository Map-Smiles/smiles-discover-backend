import { Db, ObjectId, UpdateQuery } from "mongodb";

import { Goal } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class GoalRepository extends AbstractRepository<Goal> {
  constructor(db: Db) {
    super(db, "goals");
  }

  async updateGoalById(
    id: ObjectId | string,
    update: UpdateQuery<Goal> | Partial<Goal>
  ) {
    const result = await this.findByIdOrFail(id);

    const filter = {
      _id: result._id,
    };

    return this.collection.updateOne(filter, update);
  }
}
