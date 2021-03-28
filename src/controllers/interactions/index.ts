import { ValidationError } from "yup";

import { apiErrors } from "@helpers";
import * as services from "@services";

import {
  ListInteractionsHandler,
  ShowInteractionHandler,
  UpdateInteractionHandler,
  CreateInteractionHandler,
} from "./interfaces";
import {
  createInteractionSchema,
  updateInteractionschema,
} from "./validations";

export const listInteractions: ListInteractionsHandler = async (
  req,
  res,
  next
) => {
  try {
    const interactions = await services.listInteractions();
    return res.status(200).json(interactions);
  } catch (err) {
    next(err);
  }
};

export const showInteraction: ShowInteractionHandler = async (
  req,
  res,
  next
) => {
  const { id } = req.params;

  try {
    const interactions = await services.getInteraction(id);
    return res.status(200).json(interactions);
  } catch (err) {
    next(err);
  }
};

export const updateInteraction: UpdateInteractionHandler = async (
  req,
  res,
  next
) => {
  const { id } = req.params;

  try {
    const body = updateInteractionschema.validateSync(req.body, {
      stripUnknown: true,
    });

    await services.updateInteraction(id, body);

    return res.status(200);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};

export const createInteraction: CreateInteractionHandler = async (
  req,
  res,
  next
) => {
  try {
    const body = createInteractionSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    const interaction = await services.createInteraction({
      id_user: req.user.id,
      ...body,
    });

    return res.status(200).json(interaction);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};
