export default () => {
  const queryCache = useQueryCache();

  const { mutate: register, ...rest } = useMutation({
    mutation: (body: { email: string; password: string }) =>
      $fetch<{ user: User; token: string }>(`/api/register`, {
        method: "POST",
        body,
      }),
    onSuccess: (data) => {
      queryCache.setQueryData(["user"], data.user);
      queryCache.setQueryData(["token"], data.token);
      localStorage.setItem("token", data.token);
      navigateTo("/");
    },
  });

  return { register, ...rest };
};
