import Head from 'next/head';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Button, Typography } from 'antd';

import Layout from '@components/Layout';
import Container from '@components/Container';
import { categories } from '@constants/categories';

import styles from '@styles/categories/AllCategories.module.css';
import buttonsStyle from '@styles/ButtonsStyle.module.css';

const Category = () => {
  const router = useRouter();
  const path = router.asPath;
  const id = path.split('/')[2];
  const { description, title } = categories[id];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <section className={styles.sectionCategory}>
          <Container>
            <div className={styles.content}>
              <div className={styles.descriptionBlock}>
                <Typography.Title level={2}>{title}</Typography.Title>
                <Typography.Text className={styles.description}>
                  {description}
                </Typography.Text>
                <div className={styles.partnersImage} />
              </div>
              <Button
                className={classNames(
                  buttonsStyle.primaryButton,
                  styles.buttonSubmit
                )}
                htmlType="submit"
                type="primary"
              >
                Попробовать
              </Button>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Category;
