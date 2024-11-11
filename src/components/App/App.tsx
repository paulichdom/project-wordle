import { PageLayout } from "../PageLayout";
import Game from "../Game";
import { useRandomWord } from "../../hooks/useRandomWord.ts";
import Spinner from "../Spinner";

export const App = () => {
  const { word, getNewWord, isLoading } = useRandomWord({ wordLength: 5 });

  return (
    <PageLayout>
      {isLoading ? <Spinner /> : <Game word={word} getNewWord={getNewWord} />}
    </PageLayout>
  );
};
