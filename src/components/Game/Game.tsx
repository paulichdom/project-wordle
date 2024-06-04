import { useState } from 'react';
import Input from '../Input';
import { range } from '../../utils';
import Guess from '../Guess';
import styles from './Game.module.css';

// TODO: make this a component rerender when guesses change
export const Game = () => {
  const [guesses, setGuesses] = useState<string[]>(range(6).map(() => ''));
  console.log({ guesses });

  return (
    <div className={styles.wrapper}>
      <div className={styles.guessesContainer}>
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} />
        ))}
      </div>
      <Input setGuesses={setGuesses} />
    </div>
  );
};
