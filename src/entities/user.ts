import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password_hash: string;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
}
