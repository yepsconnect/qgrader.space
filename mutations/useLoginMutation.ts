export default () => {
  const queryCache = useQueryCache();

  const { mutate: login, ...rest } = useMutation({
    mutation: (body: { email: string; password: string }) =>
      $fetch<{ user: User; token: string }>(`/api/login`, {
        method: "POST",
        body,
      }),
    onSuccess: (data) => {
      queryCache.setQueryData(["user"], data.user);
      queryCache.setQueryData(["token"], data.token);
      localStorage.setItem("token", data.token);
      navigateTo({ name: "dashboard" });
    },
  });

  return { login, ...rest };
};
