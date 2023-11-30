import { FormEvent, useState } from 'react';
import styles from './Input.module.css';

function Input() {
  const [userGuess, setUserGuess] = useState<string>('');

  const handleSubmitAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserGuess('');
    console.log({ userGuess });
  };

  return (
    <form
      className={styles.guessInputForm}
      onSubmit={(event) => handleSubmitAction(event)}
    >
      <label htmlFor="guess-input" className={styles.guessLabel}>
        Enter guess:
        <input
          className={styles.inputField}
          id="guess-input"
          type="text"
          placeholder=""
          pattern="\w{3,16}"
          required
          value={userGuess}
          onChange={(event) => {
            const upperCasedInput = event.target.value.toUpperCase();
            setUserGuess(upperCasedInput);
          }}
        />
      </label>
    </form>
  );
}

export default Input;
