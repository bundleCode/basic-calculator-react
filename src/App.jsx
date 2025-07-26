import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [calKeys, setCalKeys] = useState("");

  const calculate = (strVals) => {
    let splitOprators = ["+", "-", "*", "/"];
    //getting the operator from user input calKeys
    let op = splitOprators.find((op) => strVals.includes(op));
    let res = 0.0;
    let strValues = strVals.split(op);
    let numbers = strValues.map(Number); //Convert a List of String Numbers to a List of Actual Numbers
    if (op === "+") {
      res = numbers.reduce((res, val) => res + val);
    } else if (op === "-") {
      res = numbers.reduce((res, val) => res - val);
    } else if (op === "*") {
      res = numbers.reduce((res, val) => res * val);
    } else if (op === "/") {
      res = numbers.reduce((res, val) => res / val);
    }
    return res;
  };

  const handleOnClicked = (key) => {
    if (key === "C") {
      setCalKeys("");
    } else if (key === "=") {
      // let result = calculate(calKeys); manually calculate which is similiar to eval function.
      let result = eval(calKeys);
      setCalKeys(result);
    } else {
      let newVal = calKeys + key; //string concatenation
      // remove a leading arithmetic operator from the input string.
      newVal = newVal.replace(/^[+\-*/]/, "");

      //now producing list of ["++", "+-", "+*", "+/", "-+", "--", ...]
      const opList = ["+", "-", "*", "/"];
      const subStringList = opList.flatMap((op1) =>
        opList.map((op2) => op1 + op2)
      );

      let strSub = subStringList.find((str) => newVal.includes(str));
      // Replace the first occurrence of the substring
      newVal = newVal.replace(strSub, key);
      setCalKeys(newVal);
    }
  };

  return (
    <>
      <header className="bg-dark text-light py-3">
        <h1 className="fw-bold text-uppercase text-center">
          React Bootstrap Calculator
        </h1>
      </header>
      <div
        className={`border border-secondary rounded shadow-lg pt-3 pb-0 mx-auto bg-light mt-4 ${styles["calculator-container"]}`}
      >
        <Display calVal={calKeys} />
        <ButtonContainer
          buttonNames={buttons}
          handleOnClick={handleOnClicked}
        />
      </div>
    </>
  );
}

export default App;
