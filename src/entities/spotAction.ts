import { ObjectId } from "mongodb";

export interface SpotAction {
  _id: ObjectId;
  id_spot: string;
  id_action: string;
}
