import styles from "./Wrapper.module.css";

import Header from "../Header/Header";
import Actions from "../Actions";
import Quotes from "../Quotes/Quotes";

import { copyToClipboard } from "../../helpers";

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

const Wrapper = () => {
  function formatQuotes(data) {
    let quotes = "";
    for (let i = 0; i < data.length; i++) {
      quotes += `${data[i].content} - ${data[i].author}`;
      if (i !== data.length - 1) {
        quotes += "\n";
      }
    }
    return quotes;
  }

  function copyAll() {
    const quotes = formatQuotes(data);
    copyToClipboard(quotes);
  }
  return (
    <div className={styles.wrapper}>
      <Header />
      <Actions copyAll={copyAll} />
      <Quotes data={data} />
    </div>
  );
};

export default Wrapper;
