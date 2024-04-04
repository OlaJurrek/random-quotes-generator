// import React from "react";
import styled from "styled-components";
import Button from "./Button";
import IconWandSparkles from "../../assets/icons/IconWandSparkles";

const Actions = () => (
    <StyledSection>
        <Button label="Generate quote" icon={IconWandSparkles} />
    </StyledSection>
);

const StyledSection = styled.section`
    display: flex;
`

export default Actions;