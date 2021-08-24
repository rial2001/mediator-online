import ReactDOM from 'react-dom';
import { FC } from 'react';

import styles from '@styles/ModalStyles.module.css';

interface IModal {
  show: boolean;
  setShow: (state: boolean) => void;
}

const Modal: FC<IModal> = ({ children, setShow, show }) =>
  show &&
  ReactDOM.createPortal(
    <div className={styles.modal} onClick={() => setShow(false)}>
      {children}
    </div>,
    document.getElementById('modal-root')
  );

export default Modal;
