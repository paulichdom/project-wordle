import { range } from '../../utils';
import styles from './Guess.module.css';

export default function Guess({ guess }: { guess: string }) {
  return (
    <>
      {guess.split('').length < 1 &&
        range(5).map((_, index) => (
          <span key={index} className={styles.cell}>
            {guess}
          </span>
        ))}
      {guess &&
        [...guess].map((char, index) => (
          <span key={index} className={styles.cell}>
            {char.toUpperCase()}
          </span>
        ))}
    </>
  );
}
