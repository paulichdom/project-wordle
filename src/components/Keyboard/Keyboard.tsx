import styles from "./Keyboard.module.css";
import { SyntheticEvent } from "react";

const keys = {
  first_row: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  second_row: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  third_row: ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
};

const handleClickKey = (event: SyntheticEvent) => {
  event.preventDefault();
  console.log("click key", event);
};

function Keyboard() {
  return (
    <div className={styles["keyboard"]}>
      <div className={styles["keyboard-row"]}>
        {keys.first_row.map((key) => (
          <button
            className={styles["key"]}
            key={Math.random()}
            onClick={handleClickKey}
            onKeyDown={(event: SyntheticEvent) => {
              event.preventDefault();
              console.log("onKeyDown", event);
            }}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.second_row.map((key) => (
          <button className={styles["key"]} key={Math.random()}>
            {key}
          </button>
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.third_row.map((key) => (
          <button className={styles["key"]} key={Math.random()}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
