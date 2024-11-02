import React from "react";

import GuessSlot from './GuessSlot';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_SLOTS_ALLOWED } from '../../constants';

type GuessProps = {
  guess: string;
  answer: string;
}

const Guess: React.FC<GuessProps> = ({ guess, answer }) => {
  const isEmptyGuess = guess.split('').length < 1;

  if (isEmptyGuess) {
    return range(NUM_OF_SLOTS_ALLOWED).map((_, index) => (
      <GuessSlot key={`${index}-${crypto.randomUUID()}`} />
    ));
  }

  return checkGuess(guess, answer).map((checkedGuess) => (
    <GuessSlot key={crypto.randomUUID()} checkedGuess={checkedGuess} />
  ));
}

export default Guess;
