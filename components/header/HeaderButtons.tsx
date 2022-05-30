import { FC, useCallback, memo } from 'react';
import { Menu, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import classNames from 'classnames';

import { appRouters } from '@routers/appRouters';
import useAuth from '@hooks/useAuth';
import { logout } from '@redux/user';

import styles from '@styles/header/MenuStyle.module.css';

interface IHeaderMenuButtons {
  openLogin: (state: boolean) => void;
  mobile?: boolean;
}

const HeaderButtons: FC<IHeaderMenuButtons> = ({ mobile, openLogin }) => {
  const user = useSelector<any, any>(state => state.user.user);
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (isAuth) {
    return (
      <Menu
        className={classNames(styles.menu, styles.buttonsMenu, {
          [styles.burgerMenu]: mobile,
        })}
      >
        <Menu.Item key="8">
          <div
            className={classNames(styles.authBlock, {
              [styles.authBlockMobile]: mobile,
            })}
          >
            <Link href={`${appRouters.account}/${user.id}`}>
              <Typography.Link
                className={classNames(styles.menuItem, styles.userName)}
              >
                {user.name}
              </Typography.Link>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="4">
          <Typography.Link
            className={styles.menuItem}
            onClick={() => onLogout()}
          >
            Выход
          </Typography.Link>
        </Menu.Item>

      </Menu>
    );
  }

  return (
    <Menu
      className={classNames(styles.menu, styles.buttonsMenu, {
        [styles.burgerMenu]: mobile,
      })}
    >
      <Menu.Item key="5">
        <Link href={appRouters.registration}>
          <Typography.Link className={styles.menuItem}>
            Регистрация
          </Typography.Link>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Typography.Link
          className={styles.menuItem}
          onClick={() => openLogin(true)}
        >
          Вход
        </Typography.Link>
      </Menu.Item>
    </Menu>
  );
};

export default memo(HeaderButtons);
