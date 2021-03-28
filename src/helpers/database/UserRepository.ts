import { Db, ObjectId, UpdateQuery } from "mongodb";

import { User } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class UserRepository extends AbstractRepository<User> {
  constructor(db: Db) {
    super(db, "users");
  }

  async updateUserById(
    id: ObjectId | string,
    update: UpdateQuery<User> | Partial<User>
  ) {
    const result = await this.findByIdOrFail(id);

    const filter = {
      _id: result._id,
    };

    return this.collection.updateOne(filter, update);
  }
}
