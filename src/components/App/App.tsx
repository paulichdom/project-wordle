import { PageLayout } from "../PageLayout";
import Game from "../Game";
import { CORRECT_ANSWER } from "../../constants.ts";

export const App = () => {
  return (
    <PageLayout>
      <Game word={CORRECT_ANSWER} />
    </PageLayout>
  );
};
