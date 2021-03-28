import { ObjectId } from "mongodb";

import { Action } from "@entities";

export interface Spot {
  _id: ObjectId | string;
  id_spot_type: string;
  name: string;
  description: string;
  carousel: string[];
  latitude: number;
  longitude: number;
}

export interface INormalizedSpot extends Spot {
  type: string;
  actions: Action[];
  isAvailable: boolean;
  interactionDate: Date;
}
