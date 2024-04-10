import styled from "styled-components";
import Blockquote from "./BlockQuote";

const data = [
  {
    _id: "OSaopvW0IUd",
    content: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius",
    tags: ["Wisdom"],
    authorSlug: "confucius",
    length: 58,
    dateAdded: "2020-03-11",
    dateModified: "2023-04-14",
  },
  {
    _id: "TPsLPsnjVANf",
    content: "The best cure for the body is a quiet mind.",
    author: "Napoleon",
    tags: ["Famous Quotes"],
    authorSlug: "napoleon",
    length: 43,
    dateAdded: "2020-04-15",
    dateModified: "2023-04-14",
  },
  {
    _id: "iuhPAoY96b4z",
    content:
      "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
    author: "Jonathan Swift",
    tags: ["Famous Quotes"],
    authorSlug: "jonathan-swift",
    length: 95,
    dateAdded: "2020-10-14",
    dateModified: "2023-04-14",
  },
];

function Quotes() {
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
