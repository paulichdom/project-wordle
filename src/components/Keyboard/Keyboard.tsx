import styles from "./Keyboard.module.css";

const keys = {
  first_row: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  second_row: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  third_row: ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
};

function Keyboard() {
  return (
    <div className={styles["keyboard"]}>
      <div className={styles["keyboard-row"]}>
        {keys.first_row.map((key) => (
          <div className={styles["key"]} key={Math.random()}>
            {key}
          </div>
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.second_row.map((key) => (
          <div className={styles["key"]} key={Math.random()}>
            {key}
          </div>
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.third_row.map((key) => (
          <div className={styles["key"]} key={Math.random()}>
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
