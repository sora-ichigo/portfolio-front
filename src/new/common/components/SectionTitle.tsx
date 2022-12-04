import React from "react";
import { IconType } from "react-icons";

import { styled } from "../../stitches.config";

type Props = { text: string; icon: IconType; position: "center" | "left" };

export const SectionTitle: React.FC<Props> = (props) => {
  return (
    <Base position={props.position}>
      <Icon>{React.createElement(props.icon)}</Icon>
      <Title>{props.text}</Title>
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
  alignItems: "center",

  variants: {
    position: {
      center: { justifyContent: "center" },
      left: { justifyContent: "flex-start" },
    },
  },

  "&:after": {
    position: "absolute",
    zIndex: -1,
    background: "$grey2",
    content: "",
    width: "100%",
    height: "4px",
  },
});

const Icon = styled("div", {
  backgroundColor: "$white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  border: "4px solid $grey1",
  color: "$grey4",
  height: "48px",
  width: "48px",
});

const Title = styled("h2", {
  backgroundColor: "$white",
  paddingRight: "16px",
  paddingLeft: "12px",
  fontSize: "12px",
  fontFamily: "$lato",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
});
