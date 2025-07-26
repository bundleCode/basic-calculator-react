import styles from "./Display.module.css";
function Display() {
  return (
    <>
      <input
        type="text"
        className={`form-control mx-auto p-3 border border-secondary ${styles.display}`}
      />
    </>
  );
}

export default Display;
