import styled from "styled-components";

function FormItem({className, children }) {
  return <StyledFormItem className={className}>{children}</StyledFormItem>
}

const StyledFormItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 16px 32px;
  font-size: 1.15rem;
  font-variation-settings: "wght" 480;
  letter-spacing: 0.2px;
  background-color: var(--white);
  border: var(--borderWidth) solid var(--black);
  border-radius: var(--borderRadius);
  cursor: pointer;
`;

export default FormItem;