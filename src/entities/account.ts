import { ObjectId } from "mongodb";

export interface Account {
  _id: ObjectId | string;
  id_user: string;
  balance: number;
}
