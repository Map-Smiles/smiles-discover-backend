import { ObjectId } from "mongodb";

export interface Action {
  _id: ObjectId;
  name: string;
  points: number;
}
