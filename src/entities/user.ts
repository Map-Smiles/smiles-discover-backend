import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId | string;
  name: string;
  email: string;
  password_hash: string;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
}
