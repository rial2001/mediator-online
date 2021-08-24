import { FC } from 'react';
import { Typography } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';

import { appRouters } from '@routers/appRouters';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/blog/CardBlog.module.css';

const CardBlog: FC = () => (
  <div className={styles.cardWrapper}>
    <div className={styles.cardImage}>Медиатор. ОНЛАЙН</div>
    <div className={styles.cardContent}>
      <Typography.Title level={3}>Название статьи</Typography.Title>
      <Typography.Paragraph>
        Описание статьи. Описание статьи.Описание статьи.Описание
        статьи.Описание статьи.Описание статьи.Описание статьи.
      </Typography.Paragraph>
      <Link href={`${appRouters.blog}/123456`}>
        <Typography.Link
          className={classNames(buttonsStyle.defaultButton, styles.cardButton)}
        >
          читать полносью
        </Typography.Link>
      </Link>
    </div>
  </div>
);

export default CardBlog;
