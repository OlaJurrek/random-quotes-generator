import styled from "styled-components";
import Blockquote from "./Blockquote";

function Quotes({ data }) {
  return (
    <QoutesList>
      {data.map((quote) => (
        <Blockquote
          key={quote._id}
          author={quote.author}
          content={quote.content}
        />
      ))}
    </QoutesList>
  );
}

const QoutesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export default Quotes;
