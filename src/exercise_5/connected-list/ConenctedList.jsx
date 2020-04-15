import React from "react";
import { connect } from "react-redux";
import { ACTION_TYPES } from "../../redux/rootReducer";
import SimpleList from "../simple-list/SimpleList";

const _List = ({ list, addToList }) => {
  return (
    <div>
      <div>
        <SimpleList list={list} />
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
