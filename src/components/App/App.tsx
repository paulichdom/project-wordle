import { PageLayout } from '../PageLayout';
import Game from '../Game';
import { checkGuess } from '../../game-helpers';

export const App = () => {
  const checkedGuesses = checkGuess('WHALE', 'LEARN');

  console.log({checkedGuesses})
  return (
      <PageLayout>
        <Game />
      </PageLayout>
  );
};
