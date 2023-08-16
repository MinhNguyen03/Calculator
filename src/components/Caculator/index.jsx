import classNames from "classnames/bind";
import styles from "./Calculator.module.scss";
import Button from "../Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);

  let result;
  const handleButtonClick = (buttonContent) => {
    try {
      switch (buttonContent) {
        case "DE":
          if (hasCalculated) {
            setDisplayValue("");
            setHasCalculated(false);
          } else setDisplayValue((prevValue) => prevValue.slice(0, -1));
          break;
        case "AC":
          setDisplayValue("");
          break;
        case "=":
          result = eval(displayValue);
          console.log(result);
          if (isNaN(result)) {
            setDisplayValue("Error");
          } else {
            setDisplayValue(result);
          }
          setHasCalculated(true);
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          setHasCalculated(false);
          setDisplayValue((prevValue) => prevValue + buttonContent);
          break;
        default:
          if (hasCalculated) {
            setDisplayValue(buttonContent);
            setHasCalculated(false);
          } else {
            setDisplayValue((prevValue) => prevValue + buttonContent);
          }
          break;
      }
    } catch {
      setDisplayValue("Error");
    }
  };

  return (
    <div className={cx("calculator")}>
      <input
        type="text"
        className={cx("display")}
        value={displayValue}
        readOnly
      />
      <div className={cx("button")}>
        <Button ac content={"AC"} onClick={() => handleButtonClick("AC")} />
        <Button content={"DE"} onClick={() => handleButtonClick("DE")} />
        <Button content={"."} onClick={() => handleButtonClick(".")} />
        <Button
          calculation
          content={"/"}
          onClick={() => handleButtonClick("/")}
        />
        <Button content={"7"} onClick={() => handleButtonClick("7")} />
        <Button content={"8"} onClick={() => handleButtonClick("8")} />
        <Button content={"9"} onClick={() => handleButtonClick("9")} />
        <Button
          calculation
          content={"x"}
          onClick={() => handleButtonClick("*")}
        />
        <Button content={"4"} onClick={() => handleButtonClick("4")} />
        <Button content={"5"} onClick={() => handleButtonClick("5")} />
        <Button content={"6"} onClick={() => handleButtonClick("6")} />
        <Button
          calculation
          content={"+"}
          onClick={() => handleButtonClick("+")}
        />
        <Button content={"1"} onClick={() => handleButtonClick("1")} />
        <Button content={"2"} onClick={() => handleButtonClick("2")} />
        <Button content={"3"} onClick={() => handleButtonClick("3")} />
        <Button
          calculation
          content={"-"}
          onClick={() => handleButtonClick("-")}
        />
        <Button content={"00"} onClick={() => handleButtonClick("00")} />
        <Button content={"0"} onClick={() => handleButtonClick("0")} />
        <Button equal content={"="} onClick={() => handleButtonClick("=")} />
      </div>
    </div>
  );
}

export default Calculator;
