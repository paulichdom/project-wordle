import { PageLayout } from '../PageLayout';
import { Game } from '../Game';
import Input from '../Input';
import { range } from '../../utils';
import { useState } from 'react';

export const App = () => {
  const [guesses, setGuesses] = useState<string[]>(range(6).map(() => ''));

  return (
      <PageLayout>
        <Game guesses={guesses} />
        <Input setGuesses={setGuesses} />
      </PageLayout>
  );
};
