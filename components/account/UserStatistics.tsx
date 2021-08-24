import { FC, useMemo } from 'react';
import { Typography } from 'antd';
import useWorkType from '@hooks/useWorkType';

import styles from '@styles/account/UserStatistics.module.css';

const UserStatistics: FC = () => {
  const finish = useWorkType('finish')?.length;
  const typeNew = useWorkType('new')?.length;
  const process = useWorkType('process')?.length;

  const allType = useMemo(
    () => finish + typeNew + process,
    [finish, typeNew, process]
  );

  return (
    <div className={styles.userStatistics}>
      <Typography.Title className={styles.accountTitle} level={3}>
        {allType ? ` У вас было всего ${allType} дел` : ' Пока у Вас нет дел'}
      </Typography.Title>
      <div className={styles.workStatistics}>
        <div className={styles.workItem}>
          <Typography.Paragraph>Дел в процессе</Typography.Paragraph>
          <Typography.Text>{process || 0}</Typography.Text>
        </div>
        <div className={styles.workItem}>
          <Typography.Paragraph>Новых дел</Typography.Paragraph>
          <Typography.Text>{typeNew || 0}</Typography.Text>
        </div>
        <div className={styles.workItem}>
          <Typography.Paragraph>Завершенных дел</Typography.Paragraph>
          <Typography.Text>{finish || 0}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
