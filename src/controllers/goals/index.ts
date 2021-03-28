import { ValidationError } from "yup";

import { apiErrors } from "@helpers";
import * as services from "@services";

import {
  ListGoalsHandler,
  ShowGoalHandler,
  UpdateGoalHandler,
  CreateGoalHandler,
} from "./interfaces";
import { createGoalSchema, updateGoalSchema } from "./validations";

export const listGoals: ListGoalsHandler = async (req, res, next) => {
  try {
    const goals = await services.listGoals();
    return res.status(200).json(goals);
  } catch (err) {
    next(err);
  }
};

export const showGoal: ShowGoalHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const goal = await services.getGoal(id);
    return res.status(200).json(goal);
  } catch (err) {
    next(err);
  }
};

export const updateGoal: UpdateGoalHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const body = updateGoalSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    await services.updateGoal(id, body);

    return res.status(200);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};

export const createGoal: CreateGoalHandler = async (req, res, next) => {
  try {
    const body = createGoalSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    const goal = await services.createGoal(body);

    return res.status(200).json(goal);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};
