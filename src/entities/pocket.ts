import { ObjectId } from "mongodb";

export interface Pocket {
  _id: ObjectId;
  id_user: string;
  id_goal: string;
  balance: number;
}
