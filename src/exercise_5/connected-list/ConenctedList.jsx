import React from "react";
import { connect } from "react-redux";
import { ACTION_TYPES } from "../redux/rootReducer";

const _List = ({ list, addToList }) => {
  return (
    <div>
      <div>
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
      </div>
      <div>
        <button
          // role="button" // HTML button has the role="button" attached to it by default
          onClick={() => {
            addToList({ value: Math.random() });
          }}
        >
          add to list
        </button>
      </div>
    </div>
  );
};

const props = (state) => ({
  list: state.list,
});
const actions = (dispatch) => ({
  addToList: (elem) =>
    dispatch({ type: ACTION_TYPES.addToList, payload: { elem } }),
});
export const ConenctedList = connect(props, actions)(_List);
