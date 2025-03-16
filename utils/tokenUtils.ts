import jwt from "jsonwebtoken";

export function generateToken(userId: string): string {
  const config = useRuntimeConfig();
  const token = jwt.sign({ userId }, config.JWT_SECRET);
  return token;
}

export function verifyToken(token: string) {
  const config = useRuntimeConfig();
  const decoded = jwt.verify(token, config.JWT_SECRET);
  return decoded;
}
