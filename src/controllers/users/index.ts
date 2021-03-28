import * as services from "@services";

import { ShowUserHandler } from "./interfaces";

export const showUser: ShowUserHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const users = await services.getUser(id);
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
