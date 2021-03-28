import { ObjectId } from "mongodb";

export interface Interaction {
  _id: ObjectId | string;
  id_action: string;
  id_spot: string;
  id_user: string;
  created_at: Date;
}
