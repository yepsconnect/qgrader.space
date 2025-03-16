export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  // const { userId } = event.context;

  // const note = await Note.findOneAndDelete({ _id: id, user: userId });
  const note = await Note.findOneAndDelete({ _id: id });
  return note;
});
