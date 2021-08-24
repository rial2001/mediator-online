import { Typography } from 'antd';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Error.module.css';

export default function Custom404() {
  return (
    <Layout>
      <section>
        <Container>
          <div className={styles.content}>
            <Typography.Title className={styles.title} level={4}>
              Ошибка 404
            </Typography.Title>

            <Typography.Paragraph className={styles.description}>
              Страница сайта была удалена или перемещена
            </Typography.Paragraph>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
