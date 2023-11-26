import { Fragment } from 'react';
import { Header } from '../Header';
import { PageLayout } from '../PageLayout';
import { Game } from '../Game';

export const App = () => {
  return (
    <Fragment>
      <Header />
      <PageLayout>
        <Game />
      </PageLayout>
    </Fragment>
  );
};
