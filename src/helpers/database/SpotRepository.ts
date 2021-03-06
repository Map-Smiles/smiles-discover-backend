import { Db, ObjectId, UpdateQuery } from "mongodb";

import { Spot } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class SpotRepository extends AbstractRepository<Spot> {
  constructor(db: Db) {
    super(db, "spots");
  }

  async updateSpotById(
    id: ObjectId | string,
    update: UpdateQuery<Spot> | Partial<Spot>
  ) {
    const result = await this.findByIdOrFail(id);

    const filter = {
      _id: result._id,
    };

    return this.collection.updateOne(filter, update);
  }
}
