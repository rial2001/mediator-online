import { FC, useCallback } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { rulesFields } from '@validations/rulesFields';
import { confirmCode } from '@redux/user';
import { IRegistrationUser } from '@models/users';

import styles from '@styles/forms/ConfirmCodeForm.module.css';
import buttonsStyle from '@styles/ButtonsStyle.module.css';

interface IConfirmCode {
  user?: IRegistrationUser;
  clickBack: (key: string) => void;
}

const ConfirmCodeForm: FC<IConfirmCode> = ({ clickBack, user }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (values: { code: string }): void => {
      dispatch(confirmCode(values.code));
    },
    [dispatch, user]
  );

  const resendCodeHandler = () => {
    //dispatch(authAction.resendCode(user!.phone));
  };

  return (
    <Form
      className={styles.confirmCodeForm}
      form={form}
      layout="vertical"
      name="confirmCode"
      onFinish={onFinish}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        className={styles.item}
        label="Введите код из смс"
        name="code"
        rules={rulesFields.required}
      >
        <Input className={styles.confirmCodeField} />
      </Form.Item>
      <Form.Item className={styles.item}>
        <Typography.Link
          className={styles.resendCode}
          onClick={resendCodeHandler}
        >
          отправить повторно
        </Typography.Link>
      </Form.Item>

      <Form.Item className={styles.buttonsBlock}>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.formButton)}
          onClick={() => clickBack('first')}
        >
          назад
        </Button>
        <Button
          className={classNames(buttonsStyle.defaultButton, styles.formButton)}
          htmlType="submit"
        >
          далее
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfirmCodeForm;
