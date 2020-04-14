export const fetchUser = async () =>
  fetch("https://reqres.in/api/users", { method: "get" })
    .then((d) => d.json())
    .then(({ data }) => data);
