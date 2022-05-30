import { FC, useState } from 'react';
import { Menu, Typography } from 'antd';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Link from 'next/link';

import { appRouters } from '@routers/appRouters';
import useAuth from '@hooks/useAuth';
import Login from '@components/forms/Login';
import { PrivateAppRouters } from '@components/PrivateAppRouters';

import styles from '@styles/header/MenuStyle.module.css';

interface IHeaderMenu {
  mobile?: boolean;
}

const HeaderMenu: FC<IHeaderMenu> = ({ mobile }) => {
  const id = useSelector(state => state.user.user?.id);
  const { isAuth } = useAuth();
  const [open, setOpen] = useState(false);

  const openLogin = event => {
    if (!isAuth) {
      event.preventDefault();

      return setOpen(true);
    }

    return setOpen(false);
  };

  return (
    <>
      <Menu
        className={classNames(styles.menu, styles.navigationMenu, {
          [styles.burgerNavigationMenu]: mobile,
        })}
      >
        <Menu.Item className={styles.item} key="1">
          <Link href={appRouters.about}>
            <Typography.Link className={styles.menuItem}>
              О проекте
            </Typography.Link>
          </Link>
        </Menu.Item>
        <Menu.Item className={styles.item} key="2">
          <Link href={PrivateAppRouters(`${appRouters.work}/${id}`)}>
            <Typography.Link className={styles.menuItem} onClick={openLogin}>
              Мои дела
            </Typography.Link>
          </Link>
        </Menu.Item>
        <Menu.Item className={styles.item} key="3">
          <Link href={PrivateAppRouters(appRouters.information)}>
            <Typography.Link className={styles.menuItem} onClick={openLogin}>
              Полезная информация
            </Typography.Link>
          </Link>
        </Menu.Item>
      </Menu>
      <Login requirement setVisible={setOpen} visible={open} />
    </>
  );
};

export default HeaderMenu;
