import bcrypt from "bcrypt";
import { generateToken } from "~/utils/tokenUtils";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "User not found",
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid password",
    });
  }

  const { password: _, ...userWithoutPassword } = user.toObject();

  const token = generateToken(userWithoutPassword._id.toString());

  return { user: userWithoutPassword, token };
});
