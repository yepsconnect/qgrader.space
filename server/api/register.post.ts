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
  if (user) {
    throw createError({
      statusCode: 400,
      statusMessage: "User already exists",
    });
  }

  const username = email.split("@")[0];
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashedPassword,
    username,
  });

  const { password: _, ...userWithoutPassword } = newUser.toObject();

  const config = useRuntimeConfig();
  const token = generateToken(userWithoutPassword._id.toString());

  return { user: userWithoutPassword, token };
});
