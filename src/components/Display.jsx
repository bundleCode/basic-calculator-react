import styles from "./Display.module.css";
function Display({ calVal }) {
  return (
    <>
      <input
        type="text"
        value={calVal}
        className={`form-control mx-auto p-3 border border-secondary ${styles.display} text-end fs-4`}
        readOnly
        disabled
      />
    </>
  );
}

export default Display;
