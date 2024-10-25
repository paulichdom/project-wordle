import Guess from '../Guess';
import styles from './Game.module.css';

export const Game: React.FC<{guesses: string[]}> = ({guesses}) => {
  return (
    <div className={styles.wrapper}>
      <div key={guesses.length} className={styles.guessesContainer}>
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} />
        ))}
      </div>
      
    </div>
  );
};
