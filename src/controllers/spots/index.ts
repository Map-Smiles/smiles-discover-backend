import * as services from "@services";

import {
  ListSpotsByUserHandler,
  ListSpotsHandler,
  ShowSpotHandler,
} from "./interfaces";

export const listSpots: ListSpotsHandler = async (req, res, next) => {
  try {
    const spots = await services.listSpots();
    return res.status(200).json(spots);
  } catch (err) {
    next(err);
  }
};

export const showSpot: ShowSpotHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const spots = await services.getSpot(id);
    return res.status(200).json(spots);
  } catch (err) {
    next(err);
  }
};

export const listSpotsByUser: ListSpotsByUserHandler = async (
  req,
  res,
  next
) => {
  try {
    const spots = await services.listSpotsByUser(req.user.id);
    return res.status(200).json(spots);
  } catch (err) {
    next(err);
  }
};
