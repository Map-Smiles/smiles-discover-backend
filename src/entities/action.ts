import { ObjectId } from "mongodb";

export interface Action {
  _id: ObjectId | string;
  name: string;
  points: number;
}
