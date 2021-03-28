import * as yup from "yup";

export const createPocketSchema = yup.object().shape({
  id_goal: yup.string().required(),
  thumbnail: yup.string().required(),
});
