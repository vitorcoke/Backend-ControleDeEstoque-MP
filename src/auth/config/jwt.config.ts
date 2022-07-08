const JWT_SECRET = process.env.JWT_SECRET_KEY || "Key not found";

export const jwtConstants = {
  secret: JWT_SECRET,
};
