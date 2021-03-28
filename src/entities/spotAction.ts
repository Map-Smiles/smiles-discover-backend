import { ObjectId } from "mongodb";

export interface SpotAction {
  _id: ObjectId | string;
  id_spot: string;
  id_action: string;
}
