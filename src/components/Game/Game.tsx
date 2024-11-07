import React, { FormEvent, useState } from "react";

import { GuessBoard } from "../GuessBoard";
import GuessInput from "../GuessInput";
import GameOverDialog from "../StatusBanner/GameOverDialog.tsx";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.ts";
import { CORRECT_ANSWER, NUM_OF_GUESSES_ALLOWED } from "../../constants";

import styles from "./Game.module.css";

const Game = () => {
  const [userGuess, setUserGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>(
    range(NUM_OF_GUESSES_ALLOWED).map(() => "")
  );

  const handleSetGuesses = () => {
    if (guesses.every((guess) => guess !== "")) return;

    if (guesses.every((guess) => guess === "")) {
      return setGuesses([
        userGuess,
        ...range(NUM_OF_GUESSES_ALLOWED - 1).map(() => ""),
      ]);
    }

    if (guesses.some((guess) => guess === "")) {
      const nextGuesses = [...guesses];
      nextGuesses[guesses.findIndex((guess) => guess === "")] = userGuess;
      return setGuesses([...nextGuesses]);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSetGuesses();
    setUserGuess("");
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value.toUpperCase());
  };

  const handleGameReset = () => {
    setGuesses(range(NUM_OF_GUESSES_ALLOWED).map(() => ""));
  };

  const checkedGuesses = guesses.map((guess) =>
    checkGuess(guess, CORRECT_ANSWER)
  );

  const correctAnswerIndex = checkedGuesses.findIndex(
    (guess) =>
      guess.length > 0 && guess.every((letter) => letter.status === "correct")
  );

  const isGameOver =
    correctAnswerIndex > -1 ||
    checkedGuesses.every((guess) => guess.length > 0);

  return (
    <form className={styles.wrapper} onSubmit={handleFormSubmit}>
      <GuessBoard guesses={guesses} />
      <GameOverDialog
        isGameOver={isGameOver}
        correctAnswer={CORRECT_ANSWER}
        correctAnswerIndex={correctAnswerIndex}
        handleGameReset={handleGameReset}
      />
      <GuessInput
        userGuess={userGuess}
        handleUserInput={handleUserInput}
        isDisabled={isGameOver}
      />
    </form>
  );
};

export default Game;
