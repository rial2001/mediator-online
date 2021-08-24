import { FC, memo } from 'react';
import Modal from '@components/Modal';
import LoginForm from '@components/forms/LoginForm';
import { Typography } from 'antd';

import styles from '@styles/forms/LoginFormStyle.module.css';

interface ILogin {
  setVisible: (state: boolean) => void;
  visible: boolean;
  requirement?: boolean;
}

const Login: FC<ILogin> = ({ requirement, setVisible, visible }) => (
  <Modal setShow={setVisible} show={visible}>
    <div className={styles.formWrapper} onClick={e => e.stopPropagation()}>
      {requirement && (
        <Typography.Title className={styles.requirement} level={5}>
          Требуется авторизация
        </Typography.Title>
      )}
      <LoginForm />
    </div>
  </Modal>
);

export default memo(Login);
