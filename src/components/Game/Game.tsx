import React, { FormEvent, useState } from 'react';
import styles from './Game.module.css';
import { GuessBoard } from '../GuessBoard';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Input from '../Input';

const Game = () => {
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

  return (
    <form className={styles.wrapper} onSubmit={handleFormSubmit}>
      <GuessBoard guesses={guesses} />
      <Input userGuess={userGuess} handleUserInput={handleUserInput} />
    </form>
  );
};

export default Game;
