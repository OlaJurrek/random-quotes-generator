import React from "react";
import styles from "./Actions.module.css";

import Button from "../Button.jsx";
import VisuallyHidden from "../VisuallyHidden.jsx";

import texts from "../../texts.js";

import IconWandSparkles from "../../assets/icons/WandSparklesIcon.jsx";
import IconCopy from "../../assets/icons/CopyIcon.jsx";
import ArrowUpIcon from "../../assets/icons/ArrowUp.jsx";
import ArrowDownIcon from "../../assets/icons/ArrowDown.jsx";

const Actions = ({ copyAll }) => {
  const [value, setValue] = React.useState(1);

  const maxNumOfQuotes = 200;

  const arrowUpClassName = `${styles.arrowButton} ${styles.arrowButtonUp}`;
  const arrowDownClassName = `${styles.arrowButton} ${styles.arrowButtonDown}`;

  function handleStepUp() {
    if (value >= maxNumOfQuotes) {
      return;
    }
    if ((value === "") | isNaN(value)) {
      setValue(1);
      return;
    }
    setValue(Number.parseInt(value) + 1);
    // TODO
    // Show error | feedback for user
  }

  function handleStepDown() {
    if (value <= 0 || value === "") {
      return;
    }
    setValue(Number.parseInt(value) - 1);
    // TODO
    // Show error | feedback for user
  }

  function handleArrowUpKeyDown(event) {
    if (event.code === "ArrowUp") {
      event.preventDefault();
      handleStepUp();
    }
  }

  function handleArrowDownKeyDown(event) {
    if (event.code === "ArrowDown") {
      event.preventDefault();
      handleStepDown();
    }
  }

  return (
    <section className={styles.section}>
      <div style={{ display: "flex", position: "relative" }}>
        <label htmlFor="numOfQoutes" className={styles.label}>
          {texts.buttons.number}
        </label>
        <input
          className={styles.numberInput}
          id="numOfQoutes"
          value={value}
          max={maxNumOfQuotes}
          maxLength={3}
          pattern="[\d]{1,3}"
          required
          type="number"
          onChange={(event) => {
            if (event.target.value === "") {
              setValue(event.target.value);
            } else {
              setValue(Number.parseInt(event.target.value));
            }
            // TODO
            // Is a way to prevent user to type to high or too low value?
          }}
        />
        <button
          className={arrowUpClassName}
          onClick={handleStepUp}
          onKeyDown={handleArrowUpKeyDown}
        >
          <ArrowUpIcon />
          <VisuallyHidden>{texts.buttons.stepUp}</VisuallyHidden>
        </button>
        <button
          className={arrowDownClassName}
          onClick={handleStepDown}
          onKeyDown={handleArrowDownKeyDown}
        >
          <ArrowDownIcon />
          <VisuallyHidden>{texts.buttons.stepDown}</VisuallyHidden>
        </button>
      </div>
      <Button type="submit">
        <span>{texts.buttons.generate}</span>
        <IconWandSparkles width=".8em" height=".8em" aria-hidden="true" />
      </Button>
      <Button type="button" handleClick={copyAll}>
        <span>{texts.buttons.copyAll}</span>
        <IconCopy width=".9em" aria-hidden="true" />
      </Button>
    </section>
  );
};

export default Actions;
