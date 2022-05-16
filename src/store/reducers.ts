import { combineReducers } from "redux";
import appReducer from "../containers/App/reducer";
import counterReducer from "../containers/Counter/reducer";

const reducers = combineReducers({
  [appReducer.name]: appReducer.reducer,
  [counterReducer.name]: counterReducer.reducer,
});

export default reducers;
