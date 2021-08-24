import { Typography } from 'antd';

import styles from '@styles/work/WorkBoardCardStyle.module.css';

const WorkBoardMember = ({ ...member }) => (
  <div className={styles.membersItem}>
    <div className={styles.userAvatar}>
      <img alt="avatar" src={member.avatar} />
    </div>
    <Typography.Title className={styles.membersName} level={5}>
      {member.name}
    </Typography.Title>
  </div>
);

export default WorkBoardMember;
