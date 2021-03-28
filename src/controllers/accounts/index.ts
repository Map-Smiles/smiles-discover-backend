import * as services from "@services";

import { ShowAccountHandler } from "./interfaces";

export const showAccount: ShowAccountHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const accounts = await services.getAccount(id);
    return res.status(200).json(accounts);
  } catch (err) {
    next(err);
  }
};
