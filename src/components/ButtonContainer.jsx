import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ buttonNames, handleOnClick }) => {
  return (
    <>
      <div className={`${styles["button-container"]}`}>
        {buttonNames.map((btnName) => (
          <button
            className={`fw-normal rounded border border-secondary ${styles.mybutton}`}
            onClick={() => handleOnClick(btnName)}
            key={btnName}
          >
            {btnName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
