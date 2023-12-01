import { useState } from "react";
import Input from '../Input';
import styles from './Game.module.css';

export const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([])

  return (
    <div className={styles.gameWrapper}>
      <div>
        {guesses && guesses.map((guess, index) => (
          <p key={index}>{guess}</p>
        ))}
      </div>
      <Input setGuesses={setGuesses}/>
    </div>
  );
};
