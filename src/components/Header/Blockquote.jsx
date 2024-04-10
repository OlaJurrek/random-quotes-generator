import styled, { css } from "styled-components";

function Blockquote({ author, content }) {
  return (
    <StyledBlockquote>
      <p>{content}</p>
      <Circle />
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
  padding: 50px 70px 30px;
  border: var(--borderWidth) solid var(--black);
  border-radius: var(--borderRadius);

  &::before {
    ${sharedPseudoElementsStyle}
    top: var(--verticalOffset);
    left: calc(var(--size) / -2);
    background-image: url("/quote-left.svg?url.");
  }

  &::after {
    ${sharedPseudoElementsStyle}
    bottom: var(--verticalOffset);
    right: calc(var(--size) / -2);
    background-image: url("/quote-right.svg?url.");
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



export default Blockquote;
