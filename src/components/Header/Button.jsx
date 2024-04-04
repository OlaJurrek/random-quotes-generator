// import React from "react";
import styled from "styled-components";

const Button = ({ label, icon }) => (
    <StyledButton type="button">
        <span>{label}</span>
        {icon && icon}
    </StyledButton>
);

const StyledButton = styled.button`
    padding: 8px 24px;
    font-size: 1.15rem;
    font-variation-settings: "wght" 480;
    letter-spacing: .2px;
    background-color: var(--white);
    border: var(--borderWidth) solid var(--black);
    border-radius: var(--borderRadius);
    cursor: pointer;
`;

export default Button;