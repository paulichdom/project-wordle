import React from "react";
import Guess from "../Guess";
import styles from "./GuessBoard.module.css";

type GuessBoardProps = {
  guesses: string[];
  correctAnswer: string;
};

export const GuessBoard: React.FC<GuessBoardProps> = ({
  guesses,
  correctAnswer,
}) => {
  return (
    <div className={styles.board}>
      <div key={guesses.length} className={styles.guessesContainer}>
        {guesses.map((guess, index) => (
          <Guess key={index} guess={guess} answer={correctAnswer} />
        ))}
      </div>
    </div>
  );
};
