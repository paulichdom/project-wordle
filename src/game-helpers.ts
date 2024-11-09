export type GuessStatus = "correct" | "incorrect" | "misplaced";

export type Guess = {
  letter: string;
  status: GuessStatus;
};

export const checkGuess = (
  userGuess: string,
  correctAnswer: string
): Guess[] => {
  const guessLetters: string[] = [...userGuess];
  const answerLetters: string[] = [...correctAnswer];
  const checkedGuesses: Guess[] = [];

  /**
   * TODO - Handle cases:
   *  1) One letter only -> 'AAAAA'
   *  3) One letter in a row -> 'HELLO'
   */
  guessLetters.forEach((guessLetter, guessIndex) => {
    if (answerLetters.includes(guessLetter)) {
      answerLetters.forEach((answerLetter, answerIndex) => {
        if (guessLetter === answerLetter && guessIndex === answerIndex) {
          checkedGuesses.push({ letter: guessLetter, status: "correct" });
        }

        if (guessLetter === answerLetter && guessIndex !== answerIndex) {
          checkedGuesses.push({ letter: guessLetter, status: "misplaced" });
        }
      });
    } else {
      checkedGuesses.push({ letter: guessLetter, status: "incorrect" });
    }
  });

  return checkedGuesses;
};
