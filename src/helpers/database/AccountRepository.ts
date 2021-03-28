import { Db, ObjectId, UpdateOneOptions, UpdateQuery } from "mongodb";

import { Account } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class AccountRepository extends AbstractRepository<Account> {
  constructor(db: Db) {
    super(db, "accounts");
  }

  async updateAccountById(
    id: ObjectId | string,
    update: UpdateQuery<Account> | Partial<Account>,
    options?: UpdateOneOptions
  ) {
    const result = await this.findByIdOrFail(id);

    const filter = {
      _id: result._id,
    };

    return this.collection.updateOne(filter, update, options);
  }
}
