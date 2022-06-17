import { Typography } from 'antd';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import ChooseMediatorForm from '@components/forms/ChooseMediatorForm';
import Container from '@components/Container';

import styles from '@styles/forms/ChooseMediatorForm.module.css';

const ChooseMediator = () => {
  const router = useRouter();

  const on_select = mediator => {
    router.push('/work/new-dispute');
  }

  return (
    <>
      <Layout>
        <section className={styles.sectionDispute}>
          <Container>
            <div className={styles.content}>
              <Typography.Title className={styles.title} level={4}>
                Выбор медиатора
              </Typography.Title>
              <ChooseMediatorForm onSelect={on_select} />
            </div>
          </Container>
        </section>
      </Layout>
    </>
  )
}

export default ChooseMediator;
