import { ObjectId } from "mongodb";

export interface Goal {
  _id: ObjectId;
  name: string;
  points_necessary: number;
}
