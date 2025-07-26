import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ buttonNames }) => {
  return (
    <>
      <div className={`${styles["button-container"]}`}>
        {buttonNames.map((btnName) => (
          <button
            className={`btn fw-normal rounded border border-secondary ${styles.mybutton}`}
          >
            {btnName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
