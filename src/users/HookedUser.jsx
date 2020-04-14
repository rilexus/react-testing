import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers/useFetchUsers";

const HookedUser = () => {
  const user = useFetchUsers();
  return (
    <div>
      <div>
        <ul>
          {user.map(({ id, first_name }) => {
            return <li key={id}>{first_name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HookedUser;
