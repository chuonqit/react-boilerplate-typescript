import styled from "styled-components";

type Props = {
  direction?: "row" | "column";
  size?: "small" | "middle" | "large" | number;
  align?: "start" | "end" | "center" | "baseline";
  justify?: "start" | "end" | "center" | "baseline";
};

const Space = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ size }) =>
    size === "small"
      ? "6px"
      : size === "middle"
      ? "12px"
      : size === "large"
      ? "24px"
      : `${size}px`};
`;

Space.defaultProps = {
  direction: "row",
  size: "small",
  align: "center",
  justify: "center",
};

export default Space;
