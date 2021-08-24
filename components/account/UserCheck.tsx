import { Button, Typography } from 'antd';

import styles from '@styles/account/UserCheck.module.css';
import buttonStyles from '@styles/ButtonsStyle.module.css';

const UserCheck = () => (
  <div className={styles.userCheck}>
    <div className={styles.userCheckBlock}>
      <Typography.Paragraph className={styles.title}>
        Состояние счета
      </Typography.Paragraph>
      <Typography.Text className={styles.text}>0,00 руб.</Typography.Text>
    </div>

    <div className={styles.buttonsBlock}>
      <Button className={buttonStyles.textButton} type="text">
        пополнить
      </Button>
      <Button className={buttonStyles.textButton} type="text">
        история операций
      </Button>
    </div>
  </div>
);

export default UserCheck;
