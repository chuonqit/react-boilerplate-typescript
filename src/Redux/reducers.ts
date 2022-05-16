import { combineReducers } from "redux";
import appReducer from "../Containers/App/reducer";
import counterReducer from "../Containers/Counter/reducer";

const reducers = combineReducers({
  [appReducer.name]: appReducer.reducer,
  [counterReducer.name]: counterReducer.reducer,
});

export default reducers;
