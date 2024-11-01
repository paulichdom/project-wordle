export type GuessStatus = 'correct' | 'incorrect' | 'misplaced';

export type Guess = {
  letter: string;
  status: GuessStatus;
};

export const checkGuess = (
  userGuess: string,
  correctAnswer: string
): Guess[] => {
  const checkedGuesses: Guess[] = [];

  [...userGuess].forEach((guessLetter, guessIndex) => {
    if ([...correctAnswer].includes(guessLetter)) {
      [...correctAnswer].forEach((answerLetter, answerIndex) => {
        if (guessLetter === answerLetter && guessIndex === answerIndex) {
          checkedGuesses.push({ letter: guessLetter, status: 'correct' });
        }

        if (guessLetter === answerLetter && guessIndex !== answerIndex) {
          checkedGuesses.push({ letter: guessLetter, status: 'misplaced' });
        }
      });
    } else {
      checkedGuesses.push({ letter: guessLetter, status: 'incorrect' });
    }
  });

  return checkedGuesses;
};
