import Head from 'next/head';
import classNames from 'classnames';
import { FC } from 'react';
import { Button } from 'antd';

import Layout from '@components/Layout';
import Container from '@components/Container';
import CardBlog from '@components/blog/CardBlog';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/blog/Blog.module.css';

const Index: FC = () => (
  <>
    <Head>
      <title>Блог</title>
    </Head>
    <Layout>
      <section className={styles.blogSection}>
        <Container>
          <div className={styles.content}>
            <div className={styles.newsBlock}>
              <CardBlog />
              <CardBlog />
            </div>
            <Button
              className={classNames(
                buttonsStyle.defaultButton,
                styles.loadButton
              )}
            >
              смотреть еще
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default Index;
