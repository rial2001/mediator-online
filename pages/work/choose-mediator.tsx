import { Typography } from 'antd';

import Layout from '@components/Layout';
import ChooseMediatorForm from '@components/forms/ChooseMediatorForm';
import Container from '@components/Container';

import styles from '@styles/forms/ChooseMediatorForm.module.css';

const ChooseMediator = () => (
  <>
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
  </>
);

export default ChooseMediator;
