import styles from "./GuessInput.module.css";

import { i18n } from "../../i18n";
import { NUM_OF_SLOTS_ALLOWED } from "../../constants";

type GuessInputProps = {
  userGuess: string;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

const GuessInput: React.FC<GuessInputProps> = ({
  userGuess,
  handleUserInput,
  isDisabled,
}) => {
  const minLengthPattern = `\\w{${NUM_OF_SLOTS_ALLOWED}}`;

  return (
    <div className={styles.wrapper}>
      <label htmlFor="guess-input" className={styles.guessLabel}>
        {i18n.game.input_label}
      </label>
      <div className={styles.inputRow}>
        <input
          className={styles.inputField}
          id="guess-input"
          type="text"
          title={i18n.game.input_title}
          pattern={minLengthPattern}
          maxLength={NUM_OF_SLOTS_ALLOWED}
          required
          value={userGuess}
          onChange={handleUserInput}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default GuessInput;
