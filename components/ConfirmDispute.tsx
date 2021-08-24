import { Button, Typography } from 'antd';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newDisputeSelector } from '@redux/work/workSelectors';
import { workActions } from '@redux/work/workActions';
import { userIdSelector } from '@redux/auth/authSelectors';
import Loader from '@components/Loader';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/work/ConfirmDispute.module.css';

interface IConfirmDispute {
  setShow: (k: boolean) => void;
}

const ConfirmDispute: FC<IConfirmDispute> = ({ setShow }) => {
  const disputeInfo = useSelector(newDisputeSelector);
  const id = useSelector(userIdSelector);
  const dispatch = useDispatch();

  const confirmHandler = useCallback((): void => {
    dispatch(workActions.addDispute(disputeInfo));
    setShow(false);
  }, [dispatch, setShow, disputeInfo]);

  const refuseHandler = useCallback((): void => {
    dispatch(workActions.refuseDispute(id));
    setShow(false);
  }, [dispatch, setShow, id]);

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
      <div className={styles.membersBlock}>
        {disputeInfo.members.map(member => (
          <div className={styles.memberItem} key={member.name}>
            <div className={styles.memberAvatar}>
              <img alt="avatar" src={member.avatar} />
            </div>
            <Typography.Text>{member.name}</Typography.Text>
          </div>
        ))}
      </div>
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
