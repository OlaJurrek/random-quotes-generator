import styles from "./Button.module.css";

const Button = ({ children, handleClick, type }) => {
  let btnType;
  if (type === "special") {
    console.log("special button");
  } else if (type === "button" || type === "submit") {
    btnType = type;
  } else {
    throw new Error("Unrecognized button type");
  }
  return (
    <button type={btnType} className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
