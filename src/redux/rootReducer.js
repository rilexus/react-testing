export const ACTION_TYPES = {
  addToList: "ADD_TO_LEST",
};
export const initListState = {
  list: [],
};
export const rootReducer = (state = initListState, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.addToList: {
      const { elem } = action.payload;
      return {
        ...state,
        list: [...state.list, elem],
      };
    }
    default:
      return state;
  }
};
