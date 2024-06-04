import styled from "styled-components";

function NumberInput({ id, value }) {
  return (
    <StyledInput
      id={id}
      max="200"
      maxLength={3}
      pattern="[\d]{1,3}"
      required
      type="number"
      value={value}
    />
  );
}

const StyledInput = styled.input`
  display: inline-block;
  padding: 8px 30px 8px 10px;
  font-size: 1.15rem;
  font-variation-settings: "wght" 480;
  letter-spacing: 0.2px;
  border: var(--borderWidth) solid var(--black);
  border-radius: var(--borderRadius);
  max-width: 5.4rem;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: var(--lightOrange);
  // For hiding arrows
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default NumberInput;
