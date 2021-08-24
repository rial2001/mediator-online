import { FC, useCallback, useState } from 'react';
import { Typography } from 'antd';
import Link from 'next/link';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import HeaderMenu from '@components/header/HeaderMenu';
import { appRouters } from '@routers/appRouters';
import HeaderButtons from '@components/header/HeaderButtons';
import BurgerButton from '@components/header/BurgerButton';
import BurgerMenu from '@components/header/BurgerMenu';
import Container from '@components/Container';
import Login from '@components/forms/Login';
import useAuth from '@hooks/useAuth';
import { userSelector } from '@redux/auth/authSelectors';

import styles from '@styles/header/HeaderStyle.module.css';

const Header: FC = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);
  const [openLoginForm, setOpenLoginForm] = useState<boolean>(false);
  const { isAuth } = useAuth();
  const user = useSelector(userSelector);

  const burgerClickHandler = useCallback((): void => {
    setOpenBurgerMenu(true);
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link href={appRouters.home}>
            <div className={styles.headerLogo}>
              <Typography.Title className={styles.headerLogoTitle} level={1}>
                Медиатор. ОНЛАЙН
              </Typography.Title>
            </div>
          </Link>
          {isAuth && (
            <div className={styles.authBlockHeader}>
              <Link href={`/account/${user.id}`}>
                <Typography.Link className={styles.userName}>
                  {user.name}
                </Typography.Link>
              </Link>
            </div>
          )}
          <div
            className={classNames(styles.headerLinkBlock, {
              [styles.linkBlockAuth]: isAuth,
            })}
          >
            <Link href={appRouters.home}>
              <Typography.Link>частным лицам</Typography.Link>
            </Link>
            <Link href={appRouters.home}>
              <Typography.Link>медиаторам</Typography.Link>
            </Link>
          </div>
          <div className={styles.headerMenuBlock}>
            <HeaderMenu />
            <HeaderButtons openLogin={setOpenLoginForm} />
          </div>
          <BurgerButton onClick={burgerClickHandler} />
        </div>
      </Container>
      <BurgerMenu
        openLogin={setOpenLoginForm}
        setVisible={setOpenBurgerMenu}
        visible={openBurgerMenu}
      />
      <Login setVisible={setOpenLoginForm} visible={openLoginForm} />
    </header>
  );
};

export default Header;
