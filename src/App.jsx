import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

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
        <Display />
        <ButtonContainer buttonNames={buttons} />
      </div>
    </>
  );
}

export default App;
