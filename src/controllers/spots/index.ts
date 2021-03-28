import {
  ListSpotsHandler,
  ShowSpotHandler,
  ListSpotsByUserHandler,
} from "./interfaces";

export const listSpots: ListSpotsHandler = (req, res, next) => {
  return res.status(200).json([]);
};

export const showSpot: ShowSpotHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const listSpotsByUser: ListSpotsByUserHandler = (req, res, next) => {
  const idUser = req.user.id;

  return res.status(200).json([]);
};
