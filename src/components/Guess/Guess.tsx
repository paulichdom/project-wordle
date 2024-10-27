import { NUM_OF_SLOTS_ALLOWED } from '../../constants';
import { range } from '../../utils';
import GuessSlot from './GuessSlot';

export default function Guess({ guess }: { guess: string }) {
  const isEmptyGuess = guess.split('').length < 1;

  if (isEmptyGuess) {
    return range(NUM_OF_SLOTS_ALLOWED).map((_, index) => (
      <GuessSlot key={`${index}-${crypto.randomUUID()}`} />
    ));
  }

  return [...guess].map((char) => (
    <GuessSlot key={crypto.randomUUID()} guessCharacter={char} />
  ));
}
