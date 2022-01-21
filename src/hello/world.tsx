import React from "react";
import styled from "styled-components";

export const World: React.FC = () => (
  <>
    <p className="text-3xl font-bold underline font-main">a</p>
    <StyledText>Hello world!!</StyledText>
  </>
);

const StyledText = styled.p`
  color: red;
  font-size: 36px;
`;
