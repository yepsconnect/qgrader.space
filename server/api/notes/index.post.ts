export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId } = event.context;

  const note = await Note.create({ user: userId, ...body });
  return note;
});
