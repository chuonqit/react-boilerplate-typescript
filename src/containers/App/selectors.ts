import { connect, ConnectedProps } from "react-redux";
import { createSelector } from "reselect";
import { RootState } from "../../store";
import { setAppTheme } from "./reducer";

export const appSelector = (state: RootState) => state.app;

export const selectTheme = createSelector(appSelector, (state) => state.theme);

export const mapStateToProps = (state: RootState) => {
  return {
    theme: selectTheme(state),
  };
};

export const mapDispatchToProps = {
  setAppTheme,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
