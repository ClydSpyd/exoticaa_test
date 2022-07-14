export const react_query_config = {
  staleTime: 2000,
  retry: 3,
  onSuccess: (data) => console.log(data),
  onError: () => console.log("Failed to retreive data"),
};
