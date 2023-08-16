import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({
  content,
  equal = false,
  ac = false,
  calculation = false,
  onClick,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  };
  const classes = cx("button", {
    equal,
    ac,
    calculation,
  });
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
