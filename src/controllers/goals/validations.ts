import * as yup from "yup";

export const createGoalSchema = yup.object().shape({
  name: yup.string().required(),
  points_necessary: yup.number().required(),
  target_date: yup.string().required(),
});

export const updateGoalSchema = yup.object().shape({
  name: yup.string(),
  points_necessary: yup.number(),
  target_date: yup.string(),
});
