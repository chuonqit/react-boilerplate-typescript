import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../Redux/configureStore";
import { createSelector } from "reselect";
import { onDecrease, onIncrease } from "./reducer";

export const counterSelector = (state: RootState) => state.counter;

export const selectNumber = createSelector(
  counterSelector,
  (state) => state.number
);

export const mapStateToProps = (state: RootState) => {
  return {
    number: selectNumber(state),
  };
};

export const mapDispatchToProps = {
  onDecrease,
  onIncrease,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
