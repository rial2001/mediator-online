import { FC } from 'react';
import Head from 'next/head';

import MainCards from '@components/MainCards';
import Categories from '@components/Categories';
import Layout from '@components/Layout';

import styles from '@styles/ContentStyles.module.css';

const Home: FC = () => (
  <>
    <Head>
      <title>Медиатор.ОНЛАЙН</title>
    </Head>
    <Layout>
      <section className={styles.content} />
      <MainCards />
      <Categories />
    </Layout>
  </>
);

export default Home;
