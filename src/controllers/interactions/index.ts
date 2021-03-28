import {
  ListInteractionsHandler,
  ShowInteractionHandler,
  UpdateInteractionHandler,
  CreateInteractionHandler,
} from "./interfaces";

export const listInteractions: ListInteractionsHandler = (req, res, next) => {
  const idUser = req.user.id;

  return res.status(200).json([]);
};

export const showInteraction: ShowInteractionHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const updateInteraction: UpdateInteractionHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const createInteraction: CreateInteractionHandler = (req, res, next) => {
  return res.status(200).json();
};
