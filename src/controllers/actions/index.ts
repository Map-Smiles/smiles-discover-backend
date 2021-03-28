import * as services from "@services";

import { ListActionsHandler, ShowActionHandler } from "./interfaces";

export const listActions: ListActionsHandler = async (req, res, next) => {
  try {
    const actions = await services.listActions();
    return res.status(200).json(actions);
  } catch (err) {
    next(err);
  }
};

export const showAction: ShowActionHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const action = await services.getAction(id);
    return res.status(200).json(action);
  } catch (err) {
    next(err);
  }
};
