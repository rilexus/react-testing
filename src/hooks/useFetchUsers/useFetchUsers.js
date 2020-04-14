import { useEffect, useState } from "react";
import { fetchUser } from "../../api/api";

export const useFetchUsers = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    const fetch = () => {
      fetchUser().then(setUsers);
    };

    fetch();
  }, []);

  return user;
};
