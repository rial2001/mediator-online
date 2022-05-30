import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Input, Typography } from 'antd';
import classNames from 'classnames';

import { rulesFields } from '@validations/rulesFields';
import UserTypeField from '@components/fields/UserTypeField';
import FieldMask from '@components/fields/FieldMask';
import { IRegistrationUser } from '@models/users';
import { initialValuesForm } from '@constants/initialValuesForm';

import styles from '@styles/forms/RegistrationForm.module.css';
import buttonsStyle from '@styles/ButtonsStyle.module.css';

interface IRegistrationValues extends IRegistrationUser {
  repeat: string;
}

interface IRegistrationForm {
  setUser: (values: IRegistrationUser) => void;
  onClick: (key: string) => void;
}

const RegistrationForm: FC<IRegistrationForm> = ({ onClick, setUser }) => {
  const registration_error = useSelector<any, any>(state => state.user.error.registration)
  const user = useSelector<any, any>(state => state.user.user)
  const [form] = Form.useForm();
  const onFinish = useCallback(
    (values: IRegistrationValues): void => {
      setUser(values);
    },
    [setUser, onClick]
  );

  useEffect(() => {
    if(user && !user.phoneConfirmed) {
      onClick('second');
    }
  }, [user])

  useEffect(() => {
    console.log(registration_error)
  }, [registration_error])

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
        label="Имя"
        name="firstName"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} />
      </Form.Item>
      <Form.Item
        className={styles.item}
        label="Фамилия"
        name="familyName"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} />
      </Form.Item>
      <Form.Item
        className={styles.item}
        label="e-mail"
        name="email"
        rules={rulesFields.email}
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
        dependencies={['password']}
        rules={rulesFields.repeat}
      >
        <Input className={styles.formItem} type="password" />
      </Form.Item>
      {registration_error && (
        <div className={styles.errorMessage}>
          <Typography.Text className={styles.errorMessage}>
            Такая почта уже существует
          </Typography.Text>
        </div>
      )}
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
