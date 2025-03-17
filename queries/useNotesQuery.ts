export default defineQuery(() => {
  const { token } = useTokenQuery();

  const { data: notes, ...rest } = useQuery({
    key: ["notes"],
    query: () => {
      return $fetch<Note[]>("/api/notes", {
        method: "GET",
        headers: { Authorization: token.value! },
      });
    },
    enabled: () => !!token.value,
  });

  return { notes, ...rest };
});
