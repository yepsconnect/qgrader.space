export default defineQuery(() => {
  const { data: token, ...rest } = useQuery({
    key: ["token"],
    query: async () => {
      return localStorage.getItem("token");
    },
    enabled: !!import.meta.client,
  });

  return { token, ...rest };
});
