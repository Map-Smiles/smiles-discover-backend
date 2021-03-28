import * as yup from "yup";

export const createInteractionSchema = yup.object().shape({
  id_action: yup.string().required(),
  id_spot: yup.string().required(),
  created_at: yup.date().required(),
});
