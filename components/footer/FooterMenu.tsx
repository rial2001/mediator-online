import Link from 'next/link';
import { Typography } from 'antd';
import { FC } from 'react';

import { PrivateAppRouters } from '@components/PrivateAppRouters';
import { appRouters } from '@routers/appRouters';

import styles from '@styles/footer/FooterMenuStyle.module.css';

const FooterMenu: FC = () => (
  <div className={styles.footerMenuContent}>
    <div className={styles.footerMenu}>
      <Link href={appRouters.about}>
        <Typography.Link className={styles.footerMenuItem}>
          О проекте
        </Typography.Link>
      </Link>
      <Link href={appRouters.partners}>
        <Typography.Link className={styles.footerMenuItem}>
          Партнерская программа
        </Typography.Link>
      </Link>
      <Link href={PrivateAppRouters(appRouters.blog)}>
        <Typography.Link className={styles.footerMenuItem}>
          Блог
        </Typography.Link>
      </Link>
    </div>
    <div className={styles.footerMenu}>
      <Link href={appRouters.userAgreement}>
        <Typography.Link className={styles.footerMenuItem}>
          Пользовательское соглашение
        </Typography.Link>
      </Link>
      <Link href={appRouters.privacyPolicy}>
        <Typography.Link className={styles.footerMenuItem}>
          Политика конфиденциальности
        </Typography.Link>
      </Link>
      <Typography.Link className={styles.footerMenuItem} href="tel:88001111111">
        8 800 111-11-11
      </Typography.Link>
    </div>
  </div>
);

export default FooterMenu;
