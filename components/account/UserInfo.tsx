import { FC } from 'react';
import { Typography } from 'antd';

import ChangeInfoField from '@components/fields/ChangeInfoField';

import styles from '@styles/account/UserInfo.module.css';

const UserInfo: FC = () => (
  <div className={styles.userInfo}>
    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        ФИО
      </Typography.Paragraph>
      <ChangeInfoField fieldName="name" />
    </div>
    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        e-mail
      </Typography.Paragraph>
      <ChangeInfoField fieldName="email" />
    </div>

    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        номер телефона
      </Typography.Paragraph>
      <ChangeInfoField fieldName="phone" />
    </div>

    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        Пароль
      </Typography.Paragraph>
      <ChangeInfoField fieldName="password" type="password" />
    </div>

    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        Ваш город
      </Typography.Paragraph>
      <ChangeInfoField fieldName="city" />
    </div>

    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        Часовой пояс
      </Typography.Paragraph>
      <ChangeInfoField fieldName="timeZone" />
    </div>

    <div className={styles.userInfoBlock}>
      <Typography.Paragraph className={styles.titleInfo}>
        Ваш адрес
      </Typography.Paragraph>
      <ChangeInfoField fieldName="address" />
    </div>
  </div>
);

export default UserInfo;
