import { Db, ObjectId, UpdateQuery } from "mongodb";

import { Pocket } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class PocketRepository extends AbstractRepository<Pocket> {
  constructor(db: Db) {
    super(db, "pockets");
  }

  async updatePocketById(
    id: ObjectId | string,
    update: UpdateQuery<Pocket> | Partial<Pocket>,
    session?
  ) {
    const result = await this.findByIdOrFail(id);

    const filter = {
      _id: result._id,
    };

    return this.collection.updateOne(filter, update, { session });
  }
}
