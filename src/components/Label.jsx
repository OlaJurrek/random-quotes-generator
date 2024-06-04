import styled from "styled-components";

function Label({ children, htmlFor }) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  display: inline-block;
  padding: 16px 32px;
  font-size: 1.15rem;
  font-variation-settings: "wght" 480;
  letter-spacing: 0.2px;
  background-color: var(--white);
  border: var(--borderWidth) solid var(--black);
  border-radius: var(--borderRadius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export default Label;
