import { FC, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Tabs, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { TabPosition } from 'rc-tabs/es/interface';

import Layout from '@components/Layout';
import Container from '@components/Container';
import useAuth from '@hooks/useAuth';
import UserInfo from '@components/account/UserInfo';
import UserCheck from '@components/account/UserCheck';
import UserNotification from '@components/account/UserNotification';
import UserStatistics from '@components/account/UserStatistics';
import { authAction } from '@redux/auth/authActions';
import MobileTitleTabs from '@components/account/MobileTitleTabs';
import Loader from '@components/Loader';
import { PrivatePage } from '@components/PrivatePage';

import styles from '@styles/account/Account.module.css';

const Account: FC = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const [tabPosition, setTabPosition] = useState<TabPosition>('left');
  const [activeKey, setActiveKey] = useState<string>('Учетная запись');

  const changeHandler = key => {
    setActiveKey(key);
  };

  const logoutHandler = useCallback((): void => {
    dispatch(authAction.logout());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setTabPosition('top');
    } else {
      setTabPosition('left');
    }
  }, [setTabPosition]);

  if (!user) {
    return <Loader />;
  }

  return (
    <PrivatePage>
      <Head>
        <title>Личный кабинет</title>
      </Head>
      <Layout>
        <section className={styles.accountSection}>
          <Container>
            <MobileTitleTabs
              activeKey={activeKey}
              changeHandler={changeHandler}
            />
            <div className={styles.content}>
              <div
                className={classNames(
                  styles.userAccountWrapper,
                  'userAccountWrapper'
                )}
              >
                <Tabs
                  activeKey={activeKey}
                  onChange={changeHandler}
                  tabPosition={tabPosition}
                >
                  <Tabs.TabPane key="Учетная запись" tab="Учетная запись">
                    <UserInfo />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="Мой счёт" tab="Мой счёт">
                    <UserCheck />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="Уведомления" tab="Уведомления">
                    <UserNotification />
                  </Tabs.TabPane>
                  <Tabs.TabPane
                    key="open"
                    tab={
                      <Typography.Link
                        className={classNames(
                          styles.deleteAccount,
                          styles.deleteAccountDesktop
                        )}
                        onClick={logoutHandler}
                      >
                        удалить учетную запись
                      </Typography.Link>
                    }
                  >
                    <Loader />
                  </Tabs.TabPane>
                </Tabs>
                <Typography.Link
                  className={classNames(
                    styles.deleteAccount,
                    styles.deleteAccountMobile
                  )}
                  onClick={logoutHandler}
                >
                  удалить учетную запись
                </Typography.Link>
              </div>
              <UserStatistics />
            </div>
          </Container>
        </section>
      </Layout>
    </PrivatePage>
  );
};

export default Account;
