import React from "react";
import styled from "styled-components";

export const World: React.FC = () => <StyledText>Hello world!!</StyledText>;

const StyledText = styled.p`
  color: red;
  font-size: 36px;
`;
