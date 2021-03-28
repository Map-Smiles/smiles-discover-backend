import { ObjectId } from "mongodb";

export interface Spot {
  _id: ObjectId;
  id_spot_type: string;
  name: string;
  latitude: number;
  longitude: number;
}
