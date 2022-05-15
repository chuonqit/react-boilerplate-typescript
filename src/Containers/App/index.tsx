import React from "react";
import styled from "styled-components";
import { GlobalStyled } from "../../Styles/GlobalStyled";
import { connector } from "./selectors";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type Props = {
  theme: string;
  handleChangeTheme: () => void;
};

const App = (props: Props) => {
  return (
    <Wrapper>
      <GlobalStyled />
      <h1>{props.theme}</h1>
      <button onClick={() => props.handleChangeTheme()}>Change Theme</button>
    </Wrapper>
  );
};

export default connector(App);
