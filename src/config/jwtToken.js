
import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
