import { ObjectId } from "mongodb";

import { Spot, Action, INormalizedSpot } from "@entities";
import { apiErrors } from "@helpers";
import container from "@helpers/container";

async function normalizeSpot(spot: Spot): Promise<INormalizedSpot> {
  const { type } = await container.db.spotsTypes.findByIdOrFail(
    spot.id_spot_type
  );

  const spotsActions = await container.db.spotsActions.find({
    id_spot: String(spot._id),
  });

  const actionsIds = spotsActions.map((spotAction) => {
    return new ObjectId(spotAction.id_action);
  });

  const actions = await container.db.actions.find({
    _id: { $in: actionsIds },
  });

  const interaction = await container.db.interactions.findOne({
    id_spot: String(spot._id),
  });

  const isAvailable = false;

  return {
    ...spot,
    type,
    actions,
    isAvailable,
    interactionDate: interaction.created_at,
  };
}

export async function listSpots(): Promise<INormalizedSpot[]> {
  console.info(`🔧 Getting list of Spots`);
  const spots = await container.db.spots.find();

  const normalizedSpots: INormalizedSpot[] = [];

  spots.map(async (spot) => {
    const normalizedSpot = await normalizeSpot(spot);
    normalizedSpots.push(normalizedSpot);
  });

  return normalizedSpots;
}

export async function getSpot(id: string): Promise<Spot> {
  console.info(`🔧 Getting Spot from db`);
  const spot = await container.db.spots.findById(id);

  if (!spot) {
    throw apiErrors.spotNotFound(id);
  }

  return spot;
}

export async function listSpotsByUser(
  idUser: string
): Promise<INormalizedSpot[]> {
  console.info(`🔧 Getting list of Interactions`);
  const interactions = await container.db.interactions.find({
    id_user: idUser,
  });

  const spotsIds = interactions.map((interaction) => {
    return new ObjectId(interaction.id_spot);
  });

  console.info(`🔧 Getting list of Spots`);
  const spots = await container.db.spots.find({
    id_user: { $in: spotsIds },
  });

  const normalizedSpots: INormalizedSpot[] = [];

  spots.map(async (spot) => {
    const normalizedSpot = await normalizeSpot(spot);
    normalizedSpots.push(normalizedSpot);
  });

  return normalizedSpots;
}
