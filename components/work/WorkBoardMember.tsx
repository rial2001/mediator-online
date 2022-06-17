import { Typography } from 'antd';

import styles from '@styles/work/WorkBoardCardStyle.module.css';

const WorkBoardMember = ({ ...member }) => (
  <div className={styles.membersItem}>
    <div className={styles.userAvatar}>
      <img alt="avatar" src="/avatar.png" />
    </div>
    <Typography.Title className={styles.membersName} level={5}>
      {member.firstName} {member.familyName}
    </Typography.Title>
  </div>
);

export default WorkBoardMember;
