import React from "react";

const SimpleList = ({ list }) => {
  return (
    <ul role={"list"}>
      {list.map(({ value }) => {
        // https://www.w3.org/WAI/PF/aria/roles#abstract_roles_header
        return (
          <li role={"listItem"} key={`li-${value}`}>
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default SimpleList;
