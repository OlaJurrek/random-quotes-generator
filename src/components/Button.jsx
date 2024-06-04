import FormItem from "./FormItem";

const Button = ({ children, className, handleClick, type }) => {
  let btnType;
  if (type === 'special') {
    console.log('special button');
  } else if (type === 'button' || type === 'submit') {
    btnType = type;
  } else {
    throw new Error('Unrecognized button type');
  }
  return (
    <FormItem as="button" type={btnType} className={className} onClick={handleClick}>
      {children}
    </FormItem>
  );
};

export default Button;
