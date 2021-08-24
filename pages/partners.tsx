import { Typography } from 'antd';
import Head from 'next/head';

import Layout from '@components/Layout';
import Container from '@components/Container';
import PartnersRequestForm from '@components/forms/PartnersRequestForm';

import styles from '@styles/Partners.module.css';

const Partners = () => (
  <>
    <Head>
      <title>Партнерская программа</title>
    </Head>
    <Layout>
      <section className={styles.sectionPartners}>
        <Container>
          <div className={styles.titleBlock}>
            <div className={styles.titleBlockText}>
              <Typography.Title className={styles.title} level={1}>
                Партнерская программа
              </Typography.Title>
              <Typography.Paragraph className={styles.description}>
                для организаций, осуществляющих деятельность по обеспечению
                проведения процедуры медиации
              </Typography.Paragraph>
            </div>
            <div className={styles.partnersImage} />
          </div>
          <div>
            <Typography.Title className={styles.title} level={1}>
              Заявка
            </Typography.Title>
            <PartnersRequestForm />
          </div>
        </Container>
      </section>
    </Layout>
  </>
);

export default Partners;
