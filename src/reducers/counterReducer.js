//reducer -> handles state change (takes care of action)
export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
