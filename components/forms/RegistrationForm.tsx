import { FC, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Rule } from 'rc-field-form/lib/interface';
import classNames from 'classnames';

import { rulesFields } from '@validations/rulesFields';
import UserTypeField from '@components/fields/UserTypeField';
import FieldMask from '@components/fields/FieldMask';
import { IRegistrationUser } from '@models/users';
import { initialValuesForm } from '@constants/initialValuesForm';

import styles from '@styles/forms/RegistrationForm.module.css';
import buttonsStyle from '@styles/ButtonsStyle.module.css';

interface IRegistrationForm {
  setUser: (values: IRegistrationUser) => void;
  onClick: (key: string) => void;
}

const RegistrationForm: FC<IRegistrationForm> = ({ onClick, setUser }) => {
  const [form] = Form.useForm();
  const onFinish = useCallback(
    (values: IRegistrationUser): void => {
      setUser(values);
      onClick('second');
    },
    [setUser, onClick]
  );

  return (
    <Form
      className={classNames(styles.form, 'registrationForm')}
      form={form}
      initialValues={initialValuesForm.register}
      name="register"
      onFinish={onFinish}
      requiredMark={false}
    >
      <UserTypeField />
      <Form.Item
        className={styles.item}
        label="Ф.И.О."
        name="name"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} />
      </Form.Item>
      <Form.Item
        className={styles.item}
        label="e-mail"
        name="email"
        rules={rulesFields.email as Rule[]}
      >
        <Input className={styles.formItem} type="email" />
      </Form.Item>
      <FieldMask
        className={`${styles.formItem} ${styles.masked}`}
        label="номер телефона"
        mask="+7 (999) 999-99-99"
        name="phone"
        placeholder="+7 (999) 999-99-99"
        rules={rulesFields.phone}
      />
      <Form.Item
        className={styles.item}
        label="пароль"
        name="password"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} type="password" />
      </Form.Item>
      <Form.Item
        className={styles.item}
        label="пароль ещё раз"
        name="repeat"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} type="password" />
      </Form.Item>
      <Form.Item className={styles.buttonsBlock}>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.buttonNext)}
          htmlType="submit"
        >
          Далее
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
