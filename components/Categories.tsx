import { FC } from 'react';
import { Typography } from 'antd';
import Link from 'next/link';

import Container from '@components/Container';
import { appRouters } from '@routers/appRouters';

import styles from '@styles/CategoriesStyle.module.css';

const Categories: FC = () => (
  <section className={styles.categorySection}>
    <Container>
      <div className={styles.categoryWrapper}>
        <Typography.Title className={styles.categoryTitle} level={2}>
          КАТЕГОРИИ
        </Typography.Title>
        <div className={styles.categoryBlockWrapper}>
          <div className={styles.categoryBlock}>
            <Link href={appRouters.family}>
              <Typography.Link className={styles.categoryItem}>
                Семейная медиация
              </Typography.Link>
            </Link>
            <Link href={appRouters.civil}>
              <Typography.Link className={styles.categoryItem}>
                Гражданские споры
              </Typography.Link>
            </Link>
            <Link href={appRouters.arbitration}>
              <Typography.Link className={styles.categoryItem}>
                Арбитражные споры
              </Typography.Link>
            </Link>
          </div>
          <div className={styles.categoryBlock}>
            <Link href={appRouters.administrative}>
              <Typography.Link className={styles.categoryItem}>
                Административнные дела
              </Typography.Link>
            </Link>
            <Link href={appRouters.allCategories}>
              <Typography.Link className={styles.categoryItem}>
                Все категории
              </Typography.Link>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Categories;
