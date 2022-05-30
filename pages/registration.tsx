import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useDispatch } from 'react-redux';

import Layout from '@components/Layout';
import RegistrationForm from '@components/forms/RegistrationForm';
import Container from '@components/Container';
import ConfirmCodeForm from '@components/forms/ConfirmCodeForm';
import {registration} from '@redux/user';
import {IRegistrationUser} from '@models/users';

import styles from '@styles/forms/RegistrationForm.module.css';

const Registration: FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IRegistrationUser>();
  const [disable, setDisable] = useState<boolean>(true);
  const [activeKey, setActiveKey] = useState<string>('first');

  const changeHandler = key => {
    setActiveKey(key);
  };

  useEffect(() => {
    if (user) {
      dispatch(registration(user));
      setDisable(false);
    }
  }, [user, dispatch]);

  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <Layout>
        <section className={styles.sectionRegistration}>
          <Container>
            <Tabs
              activeKey={activeKey}
              centered
              className={styles.registrationSteps}
              defaultActiveKey="first"
              onChange={changeHandler}
            >
              <Tabs.TabPane key="first" tab="I шаг">
                <RegistrationForm onClick={changeHandler} setUser={setUser} />
              </Tabs.TabPane>
              <Tabs.TabPane disabled={disable} key="second" tab="II шаг">
                <ConfirmCodeForm clickBack={changeHandler} user={user} />
              </Tabs.TabPane>
            </Tabs>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Registration;
