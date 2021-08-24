import { FC } from 'react';
import { Dropdown, Typography } from 'antd';

import styles from '@styles/account/MobileTitleTabs.module.css';

interface IMobileTitleTabs {
  changeHandler: (k: string) => void;
  activeKey: string;
}

const MobileTitleTabs: FC<IMobileTitleTabs> = ({
  activeKey,
  changeHandler,
}) => {
  const menu = (
    <div className={styles.tabsMenu}>
      <Typography.Title
        className={styles.title}
        level={5}
        onClick={() => changeHandler('Учетная запись')}
      >
        Учетная запись
      </Typography.Title>
      <Typography.Title
        className={styles.title}
        level={5}
        onClick={() => changeHandler('Мой счёт')}
      >
        Мой счёт
      </Typography.Title>
      <Typography.Title
        className={styles.title}
        level={5}
        onClick={() => changeHandler('Уведомления')}
      >
        Уведомления
      </Typography.Title>
    </div>
  );

  return (
    <Dropdown className={styles.dropdownTitle} overlay={menu}>
      <Typography.Title className={styles.title} level={5}>
        {activeKey}
      </Typography.Title>
    </Dropdown>
  );
};

export default MobileTitleTabs;
