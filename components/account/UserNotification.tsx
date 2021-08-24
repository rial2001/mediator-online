import { Typography } from 'antd';
import { FC } from 'react';

import ChangeInfoField from '@components/fields/ChangeInfoField';

import styles from '@styles/account/UserNotification.module.css';

const UserNotification: FC = () => (
  <div className={styles.userNotification}>
    <div className={styles.userNotificationBlock}>
      <Typography.Paragraph className={styles.title}>
        Статусы спора
      </Typography.Paragraph>
      <ChangeInfoField className={styles.textBlock} fieldName="statusDispute" />
    </div>

    <div className={styles.userNotificationBlock}>
      <Typography.Paragraph className={styles.title}>
        Ответы службы поддержки
      </Typography.Paragraph>
      <ChangeInfoField fieldName="support" />
    </div>

    <div className={styles.userNotificationBlock}>
      <Typography.Paragraph className={styles.title}>
        Статусы платежей
      </Typography.Paragraph>
      <ChangeInfoField fieldName="statusPay" />
    </div>
  </div>
);

export default UserNotification;
