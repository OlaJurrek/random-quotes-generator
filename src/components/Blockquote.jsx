import styled, { css } from "styled-components";
import Button from "./Button";
import VisuallyHidden from "./VisuallyHidden";
import texts from "../texts";
import CopyIcon from "../assets/icons/CopyIcon";
import quoteLeftImg from "../assets/icons/quote-left.svg";
import quoteRightImg from "../assets/icons/quote-right.svg";

function Blockquote({ author, content }) {
  return (
    <StyledBlockquote>
      <IconButton type="button">
        <CopyIcon width=".9em" aria-hidden="true" />
        <VisuallyHidden>{texts.buttons.copy}</VisuallyHidden>
      </IconButton>
      <p>{content}</p>
      <Circle aria-hidden="true" />
      <StyledFooter>{author}</StyledFooter>
    </StyledBlockquote>
  );
}

const sharedPseudoElementsStyle = css`
  --size: 3rem;
  --verticalOffset: 15%;
  position: absolute;
  display: block;
  content: "";
  width: var(--size);
  height: var(--size);
  background-color: var(--white);
  background-repeat: no-repeat;
  background-position: center;
  background-size: calc(var(--size) / 2);
`;

const StyledBlockquote = styled.blockquote`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  max-width: calc(450rem / 16);
  text-align: center;
  padding: 50px 70px 30px;
  border: var(--borderWidth) solid var(--black);
  border-radius: var(--borderRadius);

  &::before {
    ${sharedPseudoElementsStyle}
    top: var(--verticalOffset);
    left: calc(var(--size) / -2);
    background-image: url(${quoteLeftImg});
  }

  &::after {
    ${sharedPseudoElementsStyle}
    bottom: var(--verticalOffset);
    right: calc(var(--size) / -2);
    background-image: url(${quoteRightImg});
  }
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--red);
  border-radius: 50%;
  border: 8px solid var(--orange);
`;

const StyledFooter = styled.footer`
  margin-top: -2px;
  font-variation-settings: "wght" 480;
  text-align: center;
`;

const IconButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  border: none;
`;

export default Blockquote;
