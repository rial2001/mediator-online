import { FC } from 'react';
import { Radio, Form } from 'antd';
import classNames from 'classnames';

import styles from '@styles/fields/RadioGroup.module.css';

const UserTypeField: FC = () => (
  <Form.Item className={styles.userTypeField} name="userType">
    <Radio.Group className={classNames(styles.userTypeWrapper, 'userType')}>
      <Radio.Button className={styles.userTypeItem} value="client">
        Я - ПОЛЬЗОВАТЕЛЬ
      </Radio.Button>
      <Radio.Button className={styles.userTypeItem} value="mediator">
        Я - МЕДИАТОР
      </Radio.Button>
    </Radio.Group>
  </Form.Item>
);

export default UserTypeField;
