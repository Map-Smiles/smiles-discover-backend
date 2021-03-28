import { ValidationError } from "yup";

import { apiErrors } from "@helpers";

import {
  ListPocketsHandler,
  ShowPocketHandler,
  UpdatePocketHandler,
  CreatePocketHandler,
} from "./interfaces";
import { createPocketSchema } from "./validations";

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
  try {
    const body = createPocketSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    const pocket = {
      _id: "12345",
      id_user: req.user.id,
      id_goal: body.id_goal,
      balance: 0,
      thumbnail: body.thumbnail_url,
    };

    return res.status(200).json(pocket);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};
