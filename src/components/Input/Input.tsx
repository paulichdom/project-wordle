import React, { FormEvent, useState } from 'react';
import styles from './Input.module.css';

export type InputProps = {
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
};

function Input({ setGuesses }: InputProps) {
  const [userGuess, setUserGuess] = useState<string>('');

  const handleSubmitAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGuesses((prevValue) => {
      console.log({ prevValue });
      if (prevValue.length === 6) return prevValue;

      prevValue[prevValue.findIndex(e => e === '')] = userGuess;

      return prevValue;
    });
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
      </label>
      <div className={styles.inputRow}>
        <input
          className={styles.inputField}
          id="guess-input"
          type="text"
          title="Enter 5 letter word"
          placeholder=""
          pattern="\w{5}"
          maxLength={5}
          required
          value={userGuess}
          onChange={(event) => {
            const upperCasedInput = event.target.value.toUpperCase();
            setUserGuess(upperCasedInput);
          }}
        />
        {/* <span id="validity"></span> */}
      </div>
    </form>
  );
}

export default Input;
