import Guess from '../Guess';
import styles from './GuessBoard.module.css';

export const GuessBoard: React.FC<{guesses: string[]}> = ({guesses}) => {
  return (
    <div className={styles.board}>
      <div key={guesses.length} className={styles.guessesContainer}>
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} />
        ))}
      </div>
      
    </div>
  );
};
