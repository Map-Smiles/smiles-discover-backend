import { ObjectId } from "mongodb";

export interface Pocket {
  _id: ObjectId | string;
  id_user: string;
  id_goal: string;
  balance: number;
  thumbnail: string;
}
