import { FC, ReactNode } from 'react';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

import styles from '@styles/Layout.module.css';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
