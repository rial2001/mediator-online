import Head from 'next/head';
import { Typography } from 'antd';

import CategoriesList from '@components/categories/CategoriesList';
import Container from '@components/Container';
import Layout from '@components/Layout';

import styles from '@styles/categories/AllCategories.module.css';

const AllCategories = () => (
  <>
    <Head>
      <title>Все категории</title>
    </Head>
    <Layout>
      <section className={styles.allCategories}>
        <Container>
          <div className={styles.content}>
            <Typography.Title level={2}>Категории дел</Typography.Title>
            <CategoriesList />
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default AllCategories;
