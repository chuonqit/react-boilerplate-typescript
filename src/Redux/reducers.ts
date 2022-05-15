import { combineReducers } from "redux";
import appReducer from "../Containers/App/reducer";

const reducers = combineReducers({
  [appReducer.name]: appReducer.reducer,
});

export default reducers;
