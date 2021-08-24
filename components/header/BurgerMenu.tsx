import { FC } from 'react';
import { Button, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { appRouters } from '@routers/appRouters';
import HeaderMenu from '@components/header/HeaderMenu';
import HeaderButtons from '@components/header/HeaderButtons';
import Modal from '@components/Modal';

import styles from '@styles/header/HeaderStyle.module.css';

interface IBurgerMenu {
  setVisible: (state: boolean) => void;
  visible: boolean;
  openLogin: (state: boolean) => void;
}

const BurgerMenu: FC<IBurgerMenu> = ({ openLogin, setVisible, visible }) => (
  <Modal setShow={setVisible} show={visible}>
    <div className={styles.active} onClick={e => e.stopPropagation()}>
      <Button
        className={styles.burgerMenuClose}
        icon={<CloseOutlined />}
        onClick={() => setVisible(false)}
        shape="circle"
      />
      <Link href={appRouters.home}>
        <Typography.Link className={styles.burgerMenuTitle}>
          Медиатор. ОНЛАЙН
        </Typography.Link>
      </Link>
      <HeaderMenu mobile />
      <div className={styles.burgerMenuButtons}>
        <HeaderButtons mobile openLogin={openLogin} />
      </div>
    </div>
  </Modal>
);

export default BurgerMenu;
