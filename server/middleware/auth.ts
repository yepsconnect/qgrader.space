import { verifyToken } from "~/utils/tokenUtils";

export default defineEventHandler((event) => {
  const token = event.node.req.headers["authorization"];

  if (!token) return;

  const decodedToken = verifyToken(token);

  event.context.userId = decodedToken.userId;
  event.context.isAuth = true;
});
