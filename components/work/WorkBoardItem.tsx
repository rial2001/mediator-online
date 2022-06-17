import { FC, memo } from 'react';
import { Typography } from 'antd';

import WorkBoardCard from '@components/work/WorkBoardCard';
import { IDispute } from '@models/disputes';
import useDispute from '@hooks/useDispute';

import styles from '@styles/work/WorkBoardStyle.module.css';

interface IWorkBoardItem {
  type: string;
}

const WorkBoardItem: FC<IWorkBoardItem> = ({ type }) => {
  const disputes = useDispute().disputes;

  if (!disputes?.length) {
    return (
      <Typography.Title className={styles.workTitle} level={3}>
        пока у Вас нет новых дел
      </Typography.Title>
    );
  }

  return (
    <div className={styles.workBoard}>
      {disputes.map((dispute: IDispute) => (
        <WorkBoardCard key={`dispute_${dispute.id}`} {...dispute} />
      ))}
    </div>
  );
};

export default memo(WorkBoardItem);
