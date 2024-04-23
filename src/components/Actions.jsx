import styled from "styled-components";
import Button from "./Button";
import texts from "../texts";
import IconWandSparkles from "../assets/icons/WandSparklesIcon";
import IconCopy from "../assets/icons/CopyIcon";

const Actions = ({ copyAll }) => {
  return (
    <StyledSection>
      <Button type="special">
        <label>{texts.buttons.number}</label>
      </Button>
      <Button type="submit">
        <span>{texts.buttons.generate}</span>
        <IconWandSparkles width=".8em" height=".8em" aria-hidden="true" />
      </Button>
      <Button type="button" handleClick={copyAll}>
        <span>{texts.buttons.copyAll}</span>
        <IconCopy width=".9em" aria-hidden="true" />
      </Button>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 80px;
`;

export default Actions;
