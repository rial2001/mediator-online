import { FC, useCallback, useEffect, useState } from 'react';
import { Tabs, Typography } from 'antd';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import NewDisputeInformation from '@components/work/NewDisputeInformation';
import Layout from '@components/Layout';
import Container from '@components/Container';
import NewDisputeForm from '@components/forms/NewDisputeForm';
import { newDisputeError } from '@redux/work/workSelectors';
import { workActions } from '@redux/work/workActions';

import styles from '@styles/forms/NewDisputeForm.module.css';

const NewDispute: FC = () => {
  const [disable, setDisable] = useState<boolean>(true);
  const error = useSelector<any, any>(newDisputeError);
  const dispatch = useDispatch();

  const [activeKey, setActiveKey] = useState<string>('first');

  useEffect(() => {
    dispatch(workActions.clearNewDisputeForm());
  }, []);

  const changeHandler = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  return (
    <>
      <Head>
        <title>Открытие спора</title>
      </Head>
      <Layout>
        <section className={styles.sectionDispute}>
          <Container>
            <div className={styles.content}>
              <Tabs
                activeKey={activeKey}
                centered
                className={styles.openDisputeSteps}
                defaultActiveKey="first"
                onChange={changeHandler}
              >
                <Tabs.TabPane key="first" tab="I шаг">
                  <Typography.Title className={styles.openDisputeTitle}>
                    Открытие спора
                  </Typography.Title>
                  <NewDisputeForm
                    activeTab={changeHandler}
                    error={error}
                    setDisable={setDisable}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane disabled={disable} key="second" tab="II шаг">
                  <NewDisputeInformation activeTab={changeHandler} />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default NewDispute;
