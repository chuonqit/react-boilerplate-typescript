import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Space from "../../components/Space";
import { PropsFromRedux, connector } from "./selectors";

const H1 = styled.h1`
  display: block;
  width: 5rem;
  text-align: center;
  user-select: none;
`;

type OwnProps = {};
type Props = OwnProps & PropsFromRedux;

const Counter = (props: Props) => {
  return (
    <React.Fragment>
      <Space size={40}>
        <Button onClick={props.onDecrease}>Decrease</Button>
        <H1>{props.number}</H1>
        <Button onClick={props.onIncrease}>Increase</Button>
      </Space>
    </React.Fragment>
  );
};

export default connector(Counter);
