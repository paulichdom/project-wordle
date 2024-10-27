import React from 'react';
import styles from './Guess.module.css';

type GuessSlotProps = {
  guessCharacter?: string;
};

const GuessSlot: React.FC<GuessSlotProps> = ({ guessCharacter }) => {
  return (
    <span className={styles.cell}>
      {guessCharacter ? guessCharacter.toUpperCase() : ''}
    </span>
  );
};

export default GuessSlot;
