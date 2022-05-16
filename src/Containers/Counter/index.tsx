import React from "react";
import styled from "styled-components";
import { PropsFromRedux, connector } from "./selectors";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  & button {
    height: 4rem;
    border: 1px solid;
    cursor: pointer;
    user-select: none;
  }

  & h1 {
    display: block;
    width: 5rem;
    text-align: center;
    user-select: none;
  }
`;

type OwnProps = {};
type Props = OwnProps & PropsFromRedux;

const Counter = (props: Props) => {
  return (
    <React.Fragment>
      <FlexRow>
        <button onClick={props.onDecrease}>Decrease</button>
        <h1>{props.number}</h1>
        <button onClick={props.onIncrease}>Increase</button>
      </FlexRow>
    </React.Fragment>
  );
};

export default connector(Counter);
