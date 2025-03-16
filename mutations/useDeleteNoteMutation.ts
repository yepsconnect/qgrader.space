export default () => {
  const queryCache = useQueryCache();
  const { token } = useTokenQuery();

  const { mutate: deleteNote, ...rest } = useMutation({
    mutation: (id: string) =>
      $fetch<Note>(`/api/notes`, {
        method: "DELETE",
        headers: { Authorization: token.value! },
        params: { id },
      }),
    onSuccess: () => queryCache.invalidateQueries({ key: ["notes"] }),
  });

  return { deleteNote, ...rest };
};
