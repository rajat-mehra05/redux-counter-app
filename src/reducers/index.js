//combining reducers here
import { countReducer } from "./counterReducer";
import { toggleReducer } from "./toggleReducer";
import { combineReducers } from "redux";

export let rootReducer = combineReducers({
  counter: countReducer,
  toggle: toggleReducer,
});
