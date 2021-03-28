import * as yup from "yup";

export const createPocketSchema = yup.object().shape({
  id_goal: yup.string().required(),
  thumbnail: yup.string().required(),
});

export const updatePocketSchema = yup.object().shape({
  id_goal: yup.string(),
  thumbnail: yup.string(),
  update_amount: yup.number(),
});
