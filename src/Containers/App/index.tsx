import React from "react";
import { GlobalStyled } from "../../Styles/GlobalStyled";

type Props = {};

const App = (props: Props) => {
  return (
    <React.Fragment>
      <GlobalStyled />
      <h1>Hello, Friends!</h1>
    </React.Fragment>
  );
};

export default App;
