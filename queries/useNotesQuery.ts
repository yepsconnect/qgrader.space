export default defineQuery(() => {
  const { token } = useTokenQuery();

  const filter = reactive({
    limit: 10,
    offset: 0,
  });

  const { data: notes, ...rest } = useQuery({
    key: ["notes", filter],
    query: () => {
      return $fetch<Note[]>("/api/notes", {
        method: "GET",
        params: filter,
        headers: { Authorization: token.value! },
      });
    },
    enabled: () => !!token.value,
  });

  return { filter, notes, ...rest };
});
