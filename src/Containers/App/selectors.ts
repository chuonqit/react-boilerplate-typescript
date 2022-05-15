import { connect } from "react-redux";
import { createSelector } from "reselect";
import { AppDispatch, RootState } from "../../Redux/configureStore";
import { setAppTheme } from "./reducer";

const appSelector = (state: RootState) => state.app;

export const selectTheme = createSelector(appSelector, (state) => {
  return state.theme;
});

export const mapStateToProps = (state: RootState) => {
  return {
    theme: selectTheme(state),
  };
};

export const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    handleChangeTheme: () => dispatch(setAppTheme()),
  };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
