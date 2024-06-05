import styles from "./Quotes.module.css";

import Blockquote from "../Blockquote/Blockquote";

function Quotes({ data }) {
  return (
    <ul className={styles.quotesList}>
      {data.map((quote) => (
        <Blockquote
          key={quote._id}
          author={quote.author}
          content={quote.content}
        />
      ))}
    </ul>
  );
}

export default Quotes;
