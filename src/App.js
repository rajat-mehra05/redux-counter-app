import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions/counterActions";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(5));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="main">
      <h1> Counter: {counter} </h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
