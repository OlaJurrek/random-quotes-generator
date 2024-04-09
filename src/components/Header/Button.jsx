// import React from "react";
import styled from "styled-components";

const Button = ({ label, children }) => {
  return (
    <StyledButton type="button">
      <Label>{label}</Label>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 24px;
  font-size: 1.15rem;
  font-variation-settings: "wght" 480;
  letter-spacing: 0.2px;
  background-color: var(--white);
  border: var(--borderWidth) solid var(--black);
  border-radius: var(--borderRadius);
  cursor: pointer;
`;

const Label = styled.span`
  white-space: nowrap;
`;

export default Button;
