import { ShowUserHandler } from "./interfaces";

export const showUser: ShowUserHandler = (req, res, next) => {
  const idUser = req.user.id;

  return res.status(200).json();
};
