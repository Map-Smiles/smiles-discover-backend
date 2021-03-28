import { ObjectId } from "mongodb";

export interface Goal {
  _id: ObjectId | string;
  name: string;
  points_necessary: number;
  target_date: string;
}
