import Guess from '../Guess';
import styles from './Game.module.css';

// TODO: make this a component rerender when guesses change
export const Game: React.FC<{guesses: string[]}> = ({guesses}) => {
  console.log({guesses})

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
