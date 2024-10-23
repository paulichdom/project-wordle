import React, { FormEvent, useState } from 'react';
import styles from './Input.module.css';
import { i18n } from '../../i18n';

export type InputProps = {
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
};

function Input({ setGuesses }: InputProps) {
  const [userGuess, setUserGuess] = useState<string>('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGuesses((prevValue) => {
      if (prevValue.every((e) => e !== '')) return prevValue;

      prevValue[prevValue.findIndex((e) => e === '')] = userGuess;

      return prevValue;
    });
    setUserGuess('');
  };

  const minLengthPattern = 'w{5}';

  const convertToUpperCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value.toUpperCase());
  };

  return (
    <form className={styles.guessInputForm} onSubmit={handleFormSubmit}>
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
          maxLength={5}
          required
          value={userGuess}
          onChange={convertToUpperCase}
        />
      </div>
    </form>
  );
}

export default Input;
