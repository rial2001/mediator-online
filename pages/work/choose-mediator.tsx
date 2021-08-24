import { Typography } from 'antd';

import Layout from '@components/Layout';
import ChooseMediatorForm from '@components/forms/ChooseMediatorForm';
import Container from '@components/Container';
import { PrivatePage } from '@components/PrivatePage';

import styles from '@styles/forms/ChooseMediatorForm.module.css';

const ChooseMediator = () => (
  <PrivatePage>
    <Layout>
      <section className={styles.sectionDispute}>
        <Container>
          <div className={styles.content}>
            <Typography.Title className={styles.title} level={4}>
              Выбор медиатора
            </Typography.Title>
            <ChooseMediatorForm />
          </div>
        </Container>
      </section>
    </Layout>
  </PrivatePage>
);

export default ChooseMediator;
