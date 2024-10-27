import React, { FormEvent, useState } from 'react';
import styles from './Input.module.css';
import { i18n } from '../../i18n';
import { Game } from '../Game';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_SLOTS_ALLOWED } from '../../constants';

const Input = () => {
  const [userGuess, setUserGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>(
    range(NUM_OF_GUESSES_ALLOWED).map(() => '')
  );

  const handleSetGuesses = () => {
    if (guesses.every((guess) => guess !== '')) return;

    if (guesses.every((guess) => guess === '')) {
      return setGuesses([
        userGuess,
        ...range(NUM_OF_GUESSES_ALLOWED - 1).map(() => ''),
      ]);
    }

    if (guesses.some((guess) => guess === '')) {
      const nextGuesses = [...guesses];
      nextGuesses[guesses.findIndex((guess) => guess === '')] = userGuess;
      return setGuesses([...nextGuesses]);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSetGuesses();
    setUserGuess('');
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value.toUpperCase());
  };

  const minLengthPattern = `\\w{${NUM_OF_SLOTS_ALLOWED}}`;

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
            pattern={minLengthPattern}
            maxLength={NUM_OF_SLOTS_ALLOWED}
            required
            value={userGuess}
            onChange={handleUserInput}
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
