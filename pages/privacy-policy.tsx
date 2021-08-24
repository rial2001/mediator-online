import { Typography } from 'antd';
import Head from 'next/head';

import Layout from '@components/Layout';
import Container from '@components/Container';
import PolicyList from '@components/PolicyList';

import styles from '@styles/UserInfoList.module.css';

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>Политика конфиденциальности</title>
    </Head>
    <Layout>
      <section className={styles.userInfoSection}>
        <Container>
          <div className={styles.content}>
            <Typography.Title className={styles.titlePrivacy} level={2}>
              Политика конфиденциальности
            </Typography.Title>
            <Typography.Paragraph className={styles.subtitle}>
              Настоящая Политика конфиденциальности персональных данных (далее -
              Политика конфиденциальности) действует в отношении всей
              информации, которую Интернет-сайт https://медиатор.онлайн/ (далее
              - “Сайт”) может получить о Пользователе во время использования
              программ и продуктов Сайта.
            </Typography.Paragraph>
            <PolicyList />
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default PrivacyPolicy;
