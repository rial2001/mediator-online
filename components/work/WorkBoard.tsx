import { FC } from 'react';
import { Tabs, Typography } from 'antd';
import Link from 'next/link';
import classNames from 'classnames';

import Container from '@components/Container';
import WorkBoardItem from '@components/work/WorkBoardItem';
import { appRouters } from '@routers/appRouters';
import Loader from '@components/Loader';

import styles from '@styles/work/WorkBoardStyle.module.css';

const WorkBoard: FC = () => (
  <section className={styles.workBoardSection}>
    <Container>
      <div className={classNames(styles.workBoardWrapper, 'workBoardWrapper')}>
        <Tabs defaultActiveKey="new">
          <Tabs.TabPane key="new" tab="новые">
            <WorkBoardItem type="new" />
          </Tabs.TabPane>
          <Tabs.TabPane key="process" tab="в процессе">
            <WorkBoardItem type="process" />
          </Tabs.TabPane>
          <Tabs.TabPane key="finish" tab="завершенные">
            <WorkBoardItem type="finish" />
          </Tabs.TabPane>
          <Tabs.TabPane
            key="open"
            tab={
              <Link href={appRouters.newDispute}>
                <Typography.Link className={styles.openDispute}>
                  открыть спор
                </Typography.Link>
              </Link>
            }
          >
            <Loader />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Container>
  </section>
);

export default WorkBoard;
