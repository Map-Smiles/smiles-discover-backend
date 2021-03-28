import { ObjectId } from "mongodb";

export interface SpotType {
  _id: ObjectId;
  type: string;
}
