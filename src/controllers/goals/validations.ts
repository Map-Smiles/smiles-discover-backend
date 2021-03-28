import * as yup from "yup";

export const createGoalSchema = yup.object().shape({
  name: yup.string().required(),
  points_necessary: yup.number().required(),
  target_date: yup.string().required(),
});
