import styles from './Input.module.css';
import { i18n } from '../../i18n';
import { NUM_OF_SLOTS_ALLOWED } from '../../constants';

type InputProps = {
  userGuess: string;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ userGuess, handleUserInput }) => {
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
        />
      </div>
    </div>
  );
};

export default Input;
