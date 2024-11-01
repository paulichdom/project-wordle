import { NUM_OF_SLOTS_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import GuessSlot from './GuessSlot';

export default function Guess({ guess }: { guess: string }) {
  const isEmptyGuess = guess.split('').length < 1;

  if (isEmptyGuess) {
    return range(NUM_OF_SLOTS_ALLOWED).map((_, index) => (
      <GuessSlot key={`${index}-${crypto.randomUUID()}`} />
    ));
  }

  const tmpCorrectAnswer ='WHALE'

  return checkGuess(guess, tmpCorrectAnswer).map((checkedGues) => (
    <GuessSlot key={crypto.randomUUID()} checkedGuess={checkedGues} />
  ));
}
