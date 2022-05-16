import React from "react";
import styled, { css } from "styled-components";
import { GlobalStyled } from "../../Styles/GlobalStyled";
import Counter from "../Counter";
import { PropsFromRedux, connector } from "./selectors";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) =>
    props.theme === "dark" &&
    css`
      color: #ffffff;
      background-color: #333333;
    `};
`;

type OwnProps = {};
type Props = OwnProps & PropsFromRedux;

const App = (props: Props) => {
  return (
    <Wrapper theme={props.theme}>
      <button onClick={props.setAppTheme}>Light / Dark</button>
      <Counter />
      <GlobalStyled />
    </Wrapper>
  );
};

export default connector(App);
