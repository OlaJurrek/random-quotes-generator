// import React from "react";
import styled from "styled-components";

const Button = ({ children, className, handleClick, type }) => {
  let btnType;
  if (type === 'special') {
    console.log('special button');
  } else if (type === 'button' || type === 'submit') {
    btnType = type;
  } else {
    throw new Error('Unrecognized button type');
  }
  return (
    <StyledButton type={btnType} className={className} onClick={handleClick}>
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


export default Button;
