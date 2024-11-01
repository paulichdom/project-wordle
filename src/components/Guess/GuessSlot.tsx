import React from 'react';
import styles from './Guess.module.css';
import { Guess } from '../../game-helpers';

type GuessSlotProps = {
  checkedGuess?: Guess;
};

const GuessSlot: React.FC<GuessSlotProps> = ({ checkedGuess }) => {
  console.log({styles})
  console.log({checkedGuess})
  const cellStyle = checkedGuess
    ? `${styles.cell} ${styles[checkedGuess.status]}`
    : `${styles.cell}`;
  const cellContent = checkedGuess ? checkedGuess.letter.toUpperCase() : '';
  return <span className={cellStyle}>{cellContent}</span>;
};

export default GuessSlot;
