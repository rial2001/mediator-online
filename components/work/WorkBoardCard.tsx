import { Typography } from 'antd';
import Link from 'next/link';

import WorkBoardMember from '@components/work/WorkBoardMember';
import { appRouters } from '@routers/appRouters';

import styles from '@styles/work/WorkBoardCardStyle.module.css';
import categories from '@configs/categories.json';

interface CategoryItem {
  title: string;
  value: string;
  items?: Array<CategoryItem>;
}

const findCategory = (category: string): string | null => {
  const processItem = (cat: CategoryItem): string | null => {
    if(cat.items) {
      for(const item of cat.items) {
        const item_res = processItem(item)
        if(item_res != null) return item_res
      }
    } else if(cat.value == category) {
      return cat.title
    }
  }

  const list: Array<CategoryItem> = categories
  for(const item of list) {
    const item_res = processItem(item)
    if(item_res != null) return item_res
  }
  return null
}

const WorkBoardCard = ({ ...someWork }) => (
  <div className={styles.workBoardCard}>
    <Typography.Title className={styles.cardTitle} level={3}>
      {findCategory(someWork.category)}
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
