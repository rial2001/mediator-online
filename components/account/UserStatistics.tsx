import { FC, useMemo } from 'react';
import { Typography } from 'antd';
import useDispute from '@hooks/useDispute';

import styles from '@styles/account/UserStatistics.module.css';

const UserStatistics: FC = () => {
  const disputes = useDispute().disputes;

  return (
    <div className={styles.userStatistics}>
      <Typography.Title className={styles.accountTitle} level={3}>
        {disputes.length ? ` У вас было всего ${disputes.length} дел` : ' Пока у Вас нет дел'}
      </Typography.Title>
      <div className={styles.workStatistics}>
        <div className={styles.workItem}>
          <Typography.Paragraph>Дел в процессе</Typography.Paragraph>
          <Typography.Text>{0}</Typography.Text>
        </div>
        <div className={styles.workItem}>
          <Typography.Paragraph>Новых дел</Typography.Paragraph>
          <Typography.Text>{disputes.length}</Typography.Text>
        </div>
        <div className={styles.workItem}>
          <Typography.Paragraph>Завершенных дел</Typography.Paragraph>
          <Typography.Text>{0}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
