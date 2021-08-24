import { FC } from 'react';
import { Typography } from 'antd';

import styles from '@styles/work/MemberCard.module.css';

const MemberCard: FC = () => (
  <div className={styles.mediatorCard}>
    <div className={styles.mediatorAvatar} />
    <div>
      <Typography.Title className={styles.mediatorName} level={4}>
        фио медиатора
      </Typography.Title>
      <Typography.Paragraph className={styles.memberCategory}>
        категориии
      </Typography.Paragraph>
      <Typography.Paragraph className={styles.chooseButton}>
        выбрать
      </Typography.Paragraph>
    </div>
  </div>
);

export default MemberCard;
