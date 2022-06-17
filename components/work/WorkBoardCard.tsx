import { Typography } from 'antd';
import Link from 'next/link';

import WorkBoardMember from '@components/work/WorkBoardMember';
import { appRouters } from '@routers/appRouters';

import styles from '@styles/work/WorkBoardCardStyle.module.css';

const WorkBoardCard = ({ ...someWork }) => (
  <div className={styles.workBoardCard}>
    <Typography.Title className={styles.cardTitle} level={3}>
      {someWork.category}
    </Typography.Title>
    <Typography.Paragraph className={styles.cardDescription}>
      {someWork.description}
    </Typography.Paragraph>
    <div className={styles.membersBlock}>
        <WorkBoardMember key={`client_${someWork.user.id}`} {...someWork.user} />
        <WorkBoardMember key={`mediator_${someWork.mediator.id}`} {...someWork.mediator} />
    </div>
    <Link href={appRouters.home}>
      <Typography.Link className={styles.chatLink}>подробнее</Typography.Link>
    </Link>
  </div>
);

export default WorkBoardCard;
