import { ValidationError } from "yup";

import { apiErrors } from "@helpers";
import * as services from "@services";

import {
  ListPocketsHandler,
  ShowPocketHandler,
  UpdatePocketHandler,
  CreatePocketHandler,
} from "./interfaces";
import { createPocketSchema, updatePocketSchema } from "./validations";

export const listPockets: ListPocketsHandler = async (req, res, next) => {
  try {
    const pockets = await services.listPockets();
    return res.status(200).json(pockets);
  } catch (err) {
    next(err);
  }
};

export const showPocket: ShowPocketHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const pockets = await services.getPocket(id);
    return res.status(200).json(pockets);
  } catch (err) {
    next(err);
  }
};

export const updatePocket: UpdatePocketHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const body = updatePocketSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    await services.updatePocket(id, body, req.user.id);

    return res.status(200);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
  return res.status(200);
};

export const createPocket: CreatePocketHandler = async (req, res, next) => {
  try {
    const body = createPocketSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    const pocket = await services.createPocket({
      id_user: req.user.id,
      balance: 0,
      ...body,
    });

    return res.status(200).json(pocket);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};
