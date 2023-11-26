import { ReactNode } from 'react';

import styles from './PageLayout.module.css';

type PageLayout = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayout) => {
  return <div className={styles.wrapper}>{children}</div>;
};
