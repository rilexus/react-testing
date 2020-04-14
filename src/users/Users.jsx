import React, { useState } from "react";
import { fetchUser } from "../api/api";

const Users = () => {
  const [user, setUsers] = useState([]);

  const fetch = async () => {
    const users = await fetchUser();
    setUsers(users);
  };

  return (
    <div>
      <ul>
        {user.map(({ id, first_name }) => {
          return <li key={id}>{first_name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          fetch();
        }}
      >
        fetch users
      </button>
    </div>
  );
};

export default Users;
