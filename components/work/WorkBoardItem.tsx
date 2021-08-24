import { FC, memo } from 'react';
import { Typography } from 'antd';

import WorkBoardCard from '@components/work/WorkBoardCard';
import useWorkType from '@hooks/useWorkType';
import { IWorks } from '@models/works';

import styles from '@styles/work/WorkBoardStyle.module.css';

interface IWorkBoardItem {
  type: string;
}

const WorkBoardItem: FC<IWorkBoardItem> = ({ type }) => {
  const work = useWorkType(type);

  if (!work?.length) {
    return (
      <Typography.Title className={styles.workTitle} level={3}>
        пока у Вас нет новых дел
      </Typography.Title>
    );
  }

  return (
    <div className={styles.workBoard}>
      {work.map((someWork: IWorks) => (
        <WorkBoardCard key={someWork.id} {...someWork} />
      ))}
    </div>
  );
};

export default memo(WorkBoardItem);
