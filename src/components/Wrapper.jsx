import styled from "styled-components";
import Header from "./Header";
import Actions from "./Actions";
import Quotes from "./Quotes";

const Wrapper = () => (
    <StyledWrapper>
        <Header />
        <Actions />
        <Quotes />
    </StyledWrapper>
);

const StyledWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto 3rem;
`

export default Wrapper;