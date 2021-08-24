import { Typography } from 'antd';
import Head from 'next/head';

import UserAgreementList from '@components/UserAgreementList';
import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/UserInfoList.module.css';

const UserAgreement = () => (
  <>
    <Head>
      <title>Пользовательское соглашение</title>
    </Head>
    <Layout>
      <section className={styles.userInfoSection}>
        <Container>
          <div className={styles.content}>
            <Typography.Title className={styles.titlePrivacy} level={2}>
              Пользовательское соглашение
            </Typography.Title>
            <UserAgreementList />
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default UserAgreement;
