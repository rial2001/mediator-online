import { FC } from 'react';

import styles from '@styles/Layout.module.css';

const Container: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
