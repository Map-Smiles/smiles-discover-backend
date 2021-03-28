import { ValidationError } from "yup";

import { apiErrors } from "@helpers";

import {
  ListInteractionsHandler,
  ShowInteractionHandler,
  UpdateInteractionHandler,
  CreateInteractionHandler,
} from "./interfaces";
import { createInteractionSchema } from "./validations";

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
  try {
    const body = createInteractionSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    const interaction = {
      _id: "12345",
      id_action: body.id_action,
      id_spot: body.id_spot,
      id_user: req.user.id,
      created_at: body.created_at,
    };

    return res.status(200).json(interaction);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};
