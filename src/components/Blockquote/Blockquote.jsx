import React from "react";
import styles from "./Blockquote.module.css";

import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

import CopyIcon from "../../assets/icons/CopyIcon";
import texts from "../../texts";
import { copyToClipboard } from "../../helpers";

function Blockquote({ author, content }) {
  const [animated, setAnimated] = React.useState(false);
  const animationDuration = 800;

  function copy() {
    setAnimated(true);
    const quote = `${content} - ${author}`;
    copyToClipboard(quote);
    setTimeout(() => {
      setAnimated(false);
    }, animationDuration * 1.5);
  }

  return (
    <blockquote className={styles.blockquote}>
      <button className={styles.iconButton} onClick={copy}>
        <CopyIcon
          width=".9em"
          aria-hidden="true"
          fill="var(--black)"
          style={{
            animation: animated ? `copy ${animationDuration}ms` : undefined,
            transformOrigin: "bottom left",
          }}
        />
        <VisuallyHidden>{texts.buttons.copy}</VisuallyHidden>
      </button>
      <p>{content}</p>
      <div className={styles.circle} aria-hidden="true" />
      <footer className={styles.footer}>{author}</footer>
    </blockquote>
  );
}

export default Blockquote;
