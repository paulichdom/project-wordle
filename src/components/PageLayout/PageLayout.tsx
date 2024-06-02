import { ReactNode } from 'react';

import styles from './PageLayout.module.css';

type PageLayout = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayout) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Word Game</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
