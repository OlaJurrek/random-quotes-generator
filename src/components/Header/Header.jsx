// import React from "react";
import styled from "styled-components";

const Header = () => (
    <StyledHeader>
        <StyledH1>Random qoutes generator</StyledH1>
    </StyledHeader>
);

const StyledHeader = styled.header`
    margin: 37px 0 40px;
    border-top: 10px dotted #000;
    border-bottom: 10px dotted #000;
    padding: 10px 0 15px;
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-size: 3rem;
    letter-spacing: .07rem;
`

export default Header;