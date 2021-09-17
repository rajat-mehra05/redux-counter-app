//increment

export const incrementCounter = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

//decrement
export const decrementCounter = () => {
  return {
    type: "DECREMENT",
  };
};
