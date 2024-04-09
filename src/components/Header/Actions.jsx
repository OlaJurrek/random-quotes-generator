// import React from "react";
import styled from "styled-components";
import Button from "./Button";
import IconWandSparkles from "../../assets/icons/WandSparklesIcon";
import IconCopy from "../../assets/icons/CopyIcon";

const Actions = () => (
  <StyledSection>
    <Button label="Number of quotes" type="special"></Button>
    <Button label="Generate quote" type="submit">
      <IconWandSparkles width=".8em" height=".8em" />
    </Button>
    <Button label="Copy all quotes" type="button">
      <IconCopy width=".9em" />
    </Button>
  </StyledSection>
);

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default Actions;
