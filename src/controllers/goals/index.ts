import { ValidationError } from "yup";

import { apiErrors } from "@helpers";

import {
  ListGoalsHandler,
  ShowGoalHandler,
  UpdateGoalHandler,
  CreateGoalHandler,
} from "./interfaces";
import { createGoalSchema } from "./validations";

export const listGoals: ListGoalsHandler = (req, res, next) => {
  const idUser = req.user.id;

  return res.status(200).json([]);
};

export const showGoal: ShowGoalHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const updateGoal: UpdateGoalHandler = (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json();
};

export const createGoal: CreateGoalHandler = (req, res, next) => {
  try {
    const body = createGoalSchema.validateSync(req.body, {
      stripUnknown: true,
    });

    const goal = {
      _id: "12345",
      name: body.name,
      points_necessary: body.points_necessary,
      target_date: body.target_date,
    };

    return res.status(200).json(goal);
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(apiErrors.badRequest(err.errors.join(", ")));
    }

    next(err);
  }
};
