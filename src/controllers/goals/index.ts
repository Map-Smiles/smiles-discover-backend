import {
  ListGoalsHandler,
  ShowGoalHandler,
  UpdateGoalHandler,
  CreateGoalHandler,
} from "./interfaces";

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
  return res.status(200).json();
};
