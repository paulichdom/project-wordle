import React, { FormEvent, useState } from 'react';
import styles from './Input.module.css';
import { i18n } from '../../i18n';
import { Game } from '../Game';
import { range } from '../../utils';

function Input() {
  const [userGuess, setUserGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>(range(6).map(() => ''));

  const handleSetGuesses = () => {
    if (guesses.every((e) => e !== '')) return;

    if (guesses.every((e) => e === '')) {
      return setGuesses([userGuess, ...range(5).map(() => '')])
    }

    if(guesses.some((e) => e === '')) {
      guesses[guesses.findIndex((e) => e === '')] = userGuess;
      return guesses
    }
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSetGuesses();
    setUserGuess('');
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value.toUpperCase());
  };

  return (
    <div className={styles.wrapper}>
      <Game guesses={guesses} />
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
            pattern="\w{5}"
            maxLength={5}
            required
            value={userGuess}
            onChange={handleUserInput}
          />
        </div>
      </form>
    </div>
  );
}

export default Input;
