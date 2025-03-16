export default defineEventHandler(async (event) => {
  const { userId } = event.context;

  console.log(userId);

  const notes = await Note.find({ user: userId }).sort({ date: -1 });
  return notes;
});
