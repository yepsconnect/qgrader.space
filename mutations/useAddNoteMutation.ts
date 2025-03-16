export default () => {
  const queryCache = useQueryCache();
  const { token } = useTokenQuery();

  const { mutate: addNote, ...rest } = useMutation({
    mutation: (body: any) => {
      return $fetch<Note>(`/api/notes`, {
        method: "POST",
        headers: { Authorization: token.value! },
        body,
      });
    },
    onSuccess: () => {
      navigateTo({ name: "cupping" });
      queryCache.invalidateQueries({ key: ["notes"] });
    },
  });

  return { addNote, ...rest };
};
