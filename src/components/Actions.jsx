import React from "react";
import styled from "styled-components";
import Button from "./Button";
import texts from "../texts";
import IconWandSparkles from "../assets/icons/WandSparklesIcon";
import IconCopy from "../assets/icons/CopyIcon";
import Label from "./Label";
import NumberInput from "./NumberInput";
import ArrowUpIcon from "../assets/icons/ArrowUp.jsx";
import ArrowDownIcon from "../assets/icons/ArrowDown.jsx";
import VisuallyHidden from "./VisuallyHidden";

const Actions = ({ copyAll }) => {
  const [inputValue, setInputValue] = React.useState(1);
  function handleClick() {
    setInputValue(inputValue + 1)
  }
  return (
    <StyledSection>
      <div style={{ display: "flex", position: "relative" }}>
        <Label htmlFor="numOfQoutes">{texts.buttons.number}</Label>
        <NumberInput id="numOfQoutes" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }}/>
        <ArrowButton style={{top: '8px'}} onClick={handleClick}>
          <ArrowUpIcon />
          <VisuallyHidden>{texts.buttons.stepUp}</VisuallyHidden>
        </ArrowButton>
        <ArrowButton style={{bottom: '8px'}}>
          <ArrowDownIcon />
          <VisuallyHidden>{texts.buttons.stepDown}</VisuallyHidden>
        </ArrowButton>
      </div>
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

const ArrowButton = styled.button`
position: absolute;
  right: 5px;
  background-color: transparent;
  height: 30%;
  border: none;
  cursor: pointer;
`;

export default Actions;
