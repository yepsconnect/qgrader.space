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
      queryCache.invalidateQueries({ key: ["notes"] });
      navigateTo("/");
    },
  });

  return { addNote, ...rest };
};
