import React from "react";
import styled from "styled-components";
import { theme } from "./ui/Theme.js";

const StyledSquareButton = styled.button`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border-radius: 8px;
  border: none;
  font-size: inherit;
  background-color: ${theme.color.primary};
  position: relative;
`;

const StyledTopLeftText = styled.div`
  color: black;
  font-family: "JalnanGothic";
  font-size: 1rem;
  word-break: keep-all;
  text-align: left;
`;

const StyledBottomRightImage = styled.div`
  position: absolute;
  bottom: 6px;
  right: 12px;
`;

function SquareButton({ text, image, onClick }) {
  return (
    <StyledSquareButton onClick={onClick}>
      <StyledTopLeftText>{text}</StyledTopLeftText>
      <StyledBottomRightImage>{image}</StyledBottomRightImage>
    </StyledSquareButton>
  );
}

export default SquareButton;