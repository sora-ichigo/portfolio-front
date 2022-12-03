import React from "react";
import Image from "next/image";

import { styled } from "../../stitches.config";

type HeaderData = {
  name: string;
  description: string;
  iconUrl: string;
};

type Props = {
  data: HeaderData;
};

export const GlobalHeader: React.FC<Props> = (props) => {
  return (
    <Header>
      <Icon src={props.data.iconUrl} width={160} height={160} priority={true} alt="Ichigo Sora" />
      <Name>{props.data.name}</Name>
      <Description>{props.data.description}</Description>
    </Header>
  );
};

const Header = styled("div", {
  paddingTop: "1.5rem",
  textAlign: "center",
  "@md": {
    paddingTop: "2rem",
  },
});

const Icon = styled(Image, {
  display: "inline-block",
  borderRadius: "50%",
  width: "140px",
  height: "140px",
  "@md": {
    width: "160px",
    height: "160px",
  },
});

const Name = styled("h1", {
  marginTop: "16px",
  marginBottom: "0px",
  fontSize: "1.5rem",
  lineHeight: "1",
});

const Description = styled("p", {
  marginTop: "4px",
  marginBottom: "0px",
  padding: "4px 12px",
  display: "inline-block",
  borderRadius: "4px",
  fontStyle: "italic",
  background: "#FAF46A",
});
