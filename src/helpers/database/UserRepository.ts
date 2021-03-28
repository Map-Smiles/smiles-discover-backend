import { Db } from "mongodb";

import { User } from "@entities";

import { AbstractRepository } from "./AbstractRepository";

export class UserRepository extends AbstractRepository<User> {
  constructor(db: Db) {
    super(db, "users");
  }
}
