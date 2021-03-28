import { ListActionsHandler, ShowActionHandler } from "./interfaces";

export const listActions: ListActionsHandler = (req, res, next) => {
  return res.status(200).json([]);
};

export const showAction: ShowActionHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};
