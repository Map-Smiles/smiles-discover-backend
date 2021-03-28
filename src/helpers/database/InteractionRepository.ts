import { Db, ObjectId, UpdateQuery } from "mongodb";

import { Interaction } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class InteractionRepository extends AbstractRepository<Interaction> {
  constructor(db: Db) {
    super(db, "interactions");
  }

  async updateInteractionById(
    id: ObjectId | string,
    update: UpdateQuery<Interaction> | Partial<Interaction>
  ) {
    const result = await this.findByIdOrFail(id);

    const filter = {
      _id: result._id,
    };

    return this.collection.updateOne(filter, update);
  }
}
