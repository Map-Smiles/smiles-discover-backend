import { ObjectId } from "mongodb";

export interface Interaction {
  _id: ObjectId;
  id_action: string;
  id_spot: string;
  id_user: string;
  created_at: Date;
}
