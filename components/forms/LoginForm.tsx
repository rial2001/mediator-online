import { FC, memo, useCallback, useEffect } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Rule } from 'rc-field-form/lib/interface';

import { rulesFields } from '@validations/rulesFields';
import { appRouters } from '@routers/appRouters';
import { login, error as set_error } from '@redux/user';

import buttonsStyle from '@styles/ButtonsStyle.module.css';
import styles from '@styles/forms/LoginFormStyle.module.css';

const LoginForm: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const error = useSelector(state => state.user.error.login);

  const onFinish = useCallback(
    (values): void => {
      dispatch(login(values));
    },
    [dispatch]
  );

  return (
    <Form
      className={styles.form}
      name="login"
      onFinish={onFinish}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        className={styles.item}
        label="логин"
        name="email"
        rules={rulesFields.email as Rule[]}
      >
        <Input className={styles.formItem} type="email" />
      </Form.Item>

      <Form.Item
        className={styles.item}
        label="пароль"
        name="password"
        rules={rulesFields.required}
      >
        <Input className={styles.formItem} type="password" />
      </Form.Item>
      {error && (
        <div className={styles.errorMessage}>
          <Typography.Text className={styles.errorMessage}>
            Не верная пара логин / пароль
          </Typography.Text>
        </div>
      )}
      <div className={styles.buttonsBlock}>
        <Form.Item className={styles.buttonsBlock}>
          <Button
            className={classNames(
              buttonsStyle.primaryButton,
              styles.buttonSubmit
            )}
            htmlType="submit"
            type="primary"
          >
            Войти
          </Button>
        </Form.Item>
        <Typography.Link
          className={classNames(
            buttonsStyle.defaultButton,
            styles.buttonRegistration
          )}
          onClick={() => router.push(appRouters.registration)}
        >
          Регистрация
        </Typography.Link>
      </div>
    </Form>
  );
};

export default memo(LoginForm);
