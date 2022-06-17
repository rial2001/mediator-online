import { Button, Typography } from 'antd';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Loader from '@components/Loader';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/work/ConfirmDispute.module.css';

const ConfirmDispute: FC<any> = ({ setShow }) => {
  const disputeInfo = useSelector<any, any>((state: any) => state.dispute.dispute);
  const id = useSelector<any, any>(state => state.user.user?.id);

  const confirmHandler = useCallback((): void => {
    setShow(false);
  }, [setShow, disputeInfo]);

  const refuseHandler = useCallback((): void => {
    setShow(false);
  }, [setShow, id]);

  if (!disputeInfo) {
    return <Loader />;
  }

  return (
    <div className={styles.confirmDispute} onClick={e => e.stopPropagation()}>
      <div className={styles.dateBlock}>
        <Typography.Text>{disputeInfo?.date}</Typography.Text>
        <Typography.Text>{disputeInfo?.time}</Typography.Text>
      </div>
      <Typography.Text className={styles.confirmDescription}>
        {disputeInfo.description}
      </Typography.Text>
      <div>
        <Button className={buttonsStyle.primaryButton} onClick={confirmHandler}>
          принять
        </Button>
        <Button className={buttonsStyle.defaultButton} onClick={refuseHandler}>
          отказаться
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDispute;
