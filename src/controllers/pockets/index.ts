import {
  ListPocketsHandler,
  ShowPocketHandler,
  UpdatePocketHandler,
  CreatePocketHandler,
} from "./interfaces";

export const listPockets: ListPocketsHandler = (req, res, next) => {
  const idUser = req.user.id;

  return res.status(200).json([]);
};

export const showPocket: ShowPocketHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const updatePocket: UpdatePocketHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const createPocket: CreatePocketHandler = (req, res, next) => {
  return res.status(200).json();
};
