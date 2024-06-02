import { range } from '../../utils';
import styles from './Guess.module.css';

export default function Guess({ guess }: { guess: string }) {
  console.log({
    guess,
    guessLength: guess.split('').length,
    guessArray: guess.split(''),
  });
  // const guess = 'hello';
  return (
    <>
      {guess.split('').length < 1 &&
        range(5).map((_, index) => (
          <span key={index} className={styles.cell}>
            {'empty'}
          </span>
        ))}
      {guess &&
        guess.split('').map((char, index) => (
          <span key={index} className={styles.cell}>
            {char.toUpperCase()}
          </span>
        ))}
    </>
  );
}
